import { NextRequest, NextResponse } from "next/server";
import { answerFromPortfolio } from "@/lib/portfolio-answer";
import { buildPortfolioKnowledge } from "@/lib/portfolio-knowledge";

export const maxDuration = 60;

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";
const NIM_TIMEOUT_MS = 2_500;
const MODELS_LOOKUP_MS = 800;
const MAX_TOKENS = 180;

/** Preferred chat models — tried in order among ones currently listed by NIM. */
const CANDIDATE_MODELS = [
  "mistralai/mistral-nemotron",
  "nvidia/nemotron-3.5-lightning-30b-a3b",
];

const EOL_MODELS = new Set([
  "meta/llama-3.1-8b-instruct",
  "meta/llama-3.1-70b-instruct",
  "meta/llama-3.2-1b-instruct",
  "meta/llama-3.2-3b-instruct",
  "meta/llama-3.3-70b-instruct",
]);

/** Pick live models from NIM catalog; fall back to built-in candidates. */
async function resolveModels(apiKey: string): Promise<string[]> {
  const fallback = CANDIDATE_MODELS.filter((m) => !EOL_MODELS.has(m));

  try {
    const res = await fetch(`${NVIDIA_BASE}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(MODELS_LOOKUP_MS),
    });
    if (!res.ok) return fallback;

    const data = await res.json();
    const available = new Set(
      (data?.data ?? [])
        .map((m: { id?: string }) => m.id)
        .filter((id: unknown): id is string => typeof id === "string")
    );

    const live = fallback.filter((m) => available.has(m));
    return live.length ? live : fallback;
  } catch {
    return fallback;
  }
}

async function tryNimAnswer(
  apiKey: string,
  model: string,
  message: string,
  history: Array<{ role: string; content: string }>
): Promise<string | null> {
  const knowledge = buildPortfolioKnowledge();
  const messages = [
    {
      role: "system",
      content: `${knowledge}

Answer the latest user question now.
Rules: use only the knowledge above; third person about Devesh; be specific; if unknown, say so; keep under ~100 words.`,
    },
    ...history
      .filter((m) => m.role === "user" || m.role === "assistant")
      .slice(-4)
      .map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: message },
  ];

  try {
    const response = await fetch(`${NVIDIA_BASE}/chat/completions`, {
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
      signal: AbortSignal.timeout(NIM_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error("NVIDIA API error:", model, response.status);
      return null;
    }

    const data = await response.json();
    return (
      data?.choices?.[0]?.message?.content?.trim() ||
      data?.choices?.[0]?.message?.reasoning_content?.trim() ||
      null
    );
  } catch (err) {
    console.error(`NVIDIA fetch failed for ${model}:`, err);
    return null;
  }
}

export async function POST(request: NextRequest) {
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

  const localAnswer = answerFromPortfolio(message);
  const apiKey = process.env.NVIDIA_API_KEY;
  const history = body.history ?? [];

  if (!apiKey) {
    return NextResponse.json({
      answer: localAnswer,
      source: "local",
      configured: false,
    });
  }

  const models = await resolveModels(apiKey);
  for (const model of models) {
    const nimAnswer = await tryNimAnswer(apiKey, model, message, history);
    if (nimAnswer) {
      return NextResponse.json({
        answer: nimAnswer,
        source: "nim",
        model,
        configured: true,
      });
    }
  }

  return NextResponse.json({
    answer: localAnswer,
    source: "local-fallback",
    configured: true,
  });
}
