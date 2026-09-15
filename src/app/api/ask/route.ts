import { NextRequest, NextResponse } from "next/server";
import { buildPortfolioKnowledge } from "@/lib/portfolio-knowledge";

export const maxDuration = 60;

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";
// Hobby wall is ~10s; leave a little headroom for JSON + response.
const FUNCTION_BUDGET_MS = 9_200;
const MAX_TOKENS = 256;

// Fast default only — slow models blow Vercel Hobby's ~10s limit.
const DEFAULT_MODELS = ["mistralai/mistral-nemotron"];

const EOL_MODELS = new Set([
  "meta/llama-3.1-8b-instruct",
  "meta/llama-3.1-70b-instruct",
  "meta/llama-3.2-1b-instruct",
  "meta/llama-3.2-3b-instruct",
  "meta/llama-3.3-70b-instruct",
]);

function resolveModels(): string[] {
  const fromList = process.env.NVIDIA_MODELS?.split(",")
    .map((m) => m.trim())
    .filter(Boolean);
  const preferred = process.env.NVIDIA_MODEL?.trim();
  const ordered = [
    ...(fromList?.length ? fromList : []),
    ...(preferred ? [preferred] : []),
    ...DEFAULT_MODELS,
  ].filter((m) => !EOL_MODELS.has(m));
  return Array.from(new Set(ordered));
}

function shouldFailover(status: number, body: string): boolean {
  if ([404, 408, 410, 429, 500, 502, 503, 504].includes(status)) return true;
  return /end of life|no longer available|not found|model.*(unavailable|deprecated)/i.test(
    body
  );
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.NVIDIA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "NVIDIA_API_KEY is not configured. Add it in your environment to enable Ask my portfolio.",
        configured: false,
      },
      { status: 503 }
    );
  }

  let body: { message?: string; history?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = body.message?.trim();
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const models = resolveModels();
  if (!models.length) {
    return NextResponse.json(
      { error: "No usable NVIDIA models configured." },
      { status: 503 }
    );
  }

  const knowledge = buildPortfolioKnowledge();
  const started = Date.now();

  const messages = [
    {
      role: "system",
      content: `${knowledge}

Answer the latest user question now.
Rules: use only the knowledge above; third person about Devesh; be specific with project names and tech; if unknown, say so; keep under ~120 words unless they ask for detail.`,
    },
    ...(body.history ?? [])
      .filter((m) => m.role === "user" || m.role === "assistant")
      .slice(-4)
      .map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: message },
  ];

  const failures: string[] = [];

  try {
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      const elapsed = Date.now() - started;
      const remaining = FUNCTION_BUDGET_MS - elapsed;
      if (remaining < 2_000) {
        failures.push(`${model}: skipped (budget)`);
        break;
      }

      const timeoutMs = remaining;
      let response: Response;
      try {
        response = await fetch(`${NVIDIA_BASE}/chat/completions`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.2,
            max_tokens: MAX_TOKENS,
            top_p: 0.85,
          }),
          signal: AbortSignal.timeout(timeoutMs),
        });
      } catch (err) {
        const name = err instanceof Error ? err.name : "Error";
        console.error(`NVIDIA fetch failed for ${model}:`, err);
        failures.push(
          `${model}: ${name === "TimeoutError" || name === "AbortError" ? "timeout" : "network error"}`
        );
        continue;
      }

      if (!response.ok) {
        const errText = await response.text();
        console.error("NVIDIA API error:", model, response.status, errText);
        failures.push(`${model}: ${response.status}`);

        if (response.status === 401 || response.status === 403) {
          return NextResponse.json(
            { error: "NVIDIA API key was rejected." },
            { status: 502 }
          );
        }

        if (shouldFailover(response.status, errText)) continue;

        return NextResponse.json(
          { error: "Failed to get a response from NVIDIA NIM." },
          { status: 502 }
        );
      }

      const data = await response.json();
      const answer =
        data?.choices?.[0]?.message?.content?.trim() ||
        data?.choices?.[0]?.message?.reasoning_content?.trim();

      if (!answer) {
        failures.push(`${model}: empty response`);
        continue;
      }

      if (failures.length) {
        console.info(
          `NVIDIA failover: used ${model} after trying ${failures.join(" → ")}`
        );
      }

      return NextResponse.json({ answer, configured: true, model });
    }

    console.error("NVIDIA all models failed:", failures.join(" → "));
    const timedOut = failures.some((f) => f.includes("timeout"));
    return NextResponse.json(
      {
        error: timedOut
          ? "Server timed out — try again."
          : "All NVIDIA NIM models failed. Update NVIDIA_MODEL / NVIDIA_MODELS.",
      },
      { status: timedOut ? 504 : 502 }
    );
  } catch (error) {
    console.error("Ask API error:", error);
    return NextResponse.json(
      { error: "Unexpected error calling NVIDIA NIM." },
      { status: 500 }
    );
  }
}
