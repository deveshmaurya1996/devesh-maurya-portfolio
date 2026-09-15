import { NextRequest, NextResponse } from "next/server";
import { buildPortfolioKnowledge } from "@/lib/portfolio-knowledge";

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";

// Tried in order. Skip to next on EOL / unavailable / transient errors.
const DEFAULT_MODELS = [
  "mistralai/mistral-nemotron",
  "nvidia/nemotron-3.5-lightning-30b-a3b",
];

function resolveModels(): string[] {
  const fromList = process.env.NVIDIA_MODELS?.split(",")
    .map((m) => m.trim())
    .filter(Boolean);
  const preferred = process.env.NVIDIA_MODEL?.trim();
  const ordered = [
    ...(fromList?.length ? fromList : []),
    ...(preferred ? [preferred] : []),
    ...DEFAULT_MODELS,
  ];
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
  const knowledge = buildPortfolioKnowledge();

  const messages = [
    {
      role: "system",
      content: `${knowledge}

Answer the latest user question now.
Rules: use only the knowledge above; third person about Devesh; be specific with project names and tech; if unknown, say so; keep under ~180 words unless they ask for detail.`,
    },
    ...(body.history ?? [])
      .filter((m) => m.role === "user" || m.role === "assistant")
      .slice(-6)
      .map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: message },
  ];

  const failures: string[] = [];

  try {
    for (const model of models) {
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
            max_tokens: 768,
            top_p: 0.85,
          }),
        });
      } catch (err) {
        console.error(`NVIDIA fetch failed for ${model}:`, err);
        failures.push(`${model}: network error`);
        continue;
      }

      if (!response.ok) {
        const errText = await response.text();
        console.error("NVIDIA API error:", model, response.status, errText);
        failures.push(`${model}: ${response.status}`);

        // Auth is shared across models — no point trying the rest.
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
    return NextResponse.json(
      {
        error:
          "All NVIDIA NIM models failed. Update NVIDIA_MODEL / NVIDIA_MODELS.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Ask API error:", error);
    return NextResponse.json(
      { error: "Unexpected error calling NVIDIA NIM." },
      { status: 500 }
    );
  }
}
