import { NextRequest, NextResponse } from "next/server";
import { buildPortfolioKnowledge } from "@/lib/portfolio-knowledge";

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";
const DEFAULT_MODEL = "meta/llama-3.1-8b-instruct";

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

  const model = process.env.NVIDIA_MODEL || DEFAULT_MODEL;
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
        max_tokens: 768,
        top_p: 0.85,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("NVIDIA API error:", response.status, errText);
      return NextResponse.json(
        { error: "Failed to get a response from NVIDIA NIM." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const answer =
      data?.choices?.[0]?.message?.content?.trim() ||
      "I could not generate a response. Please try again.";

    return NextResponse.json({ answer, configured: true });
  } catch (error) {
    console.error("Ask API error:", error);
    return NextResponse.json(
      { error: "Unexpected error calling NVIDIA NIM." },
      { status: 500 }
    );
  }
}
