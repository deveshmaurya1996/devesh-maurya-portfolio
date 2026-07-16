"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";

import Typography from "@/components/general/typography";
import { mergeClasses } from "@/lib/utils";

const SUGGESTIONS = [
  "What AI products have I built?",
  "Show my mobile experience.",
  "What companies have I worked for?",
];

type Message = { role: "user" | "assistant"; content: string };

export default function AskPortfolioFab() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setError(null);
    setLoading(true);
    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: messages }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not get an answer.");
        setMessages([
          ...nextMessages,
          {
            role: "assistant",
            content:
              data.error ||
              "Ask my portfolio needs NVIDIA_API_KEY on the server.",
          },
        ]);
        return;
      }

      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.answer },
      ]);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void ask(input);
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="pointer-events-auto flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] bg-gray/95 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-gray-200/80 backdrop-blur-xl dark:bg-gray-50/95"
          >
            {/* Orbital header */}
            <div className="relative overflow-hidden border-b border-gray-100 px-4 py-3">
              <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="mb-1 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <Sparkles size={14} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Ask my portfolio
                    </span>
                  </div>
                  <Typography className="text-sm font-semibold text-gray-900">
                    Questions about my experience
                  </Typography>
                  <Typography className="text-xs text-gray-500">
                    Answers from portfolio data via NVIDIA NIM
                  </Typography>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div
              ref={listRef}
              className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-3 py-3"
            >
              {messages.length === 0 ? (
                <div className="flex flex-1 flex-col justify-center gap-3 px-1">
                  <Typography className="text-center text-xs text-gray-500">
                    Ask about projects, skills, or companies
                  </Typography>
                  <div className="flex flex-wrap justify-center gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        disabled={loading}
                        onClick={() => void ask(s)}
                        className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-800 transition hover:bg-emerald-500/20 dark:text-emerald-300"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <motion.div
                    key={`${m.role}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={mergeClasses(
                      "max-w-[88%] rounded-2xl px-3 py-2 text-xs leading-relaxed",
                      m.role === "user"
                        ? "ml-auto rounded-br-md bg-gray-900 text-gray-50"
                        : "mr-auto rounded-bl-md bg-gray-50 text-gray-800 ring-1 ring-gray-100 dark:bg-gray-100"
                    )}
                  >
                    {m.content}
                  </motion.div>
                ))
              )}
              {loading ? (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Loader2 className="animate-spin" size={14} /> Thinking…
                </div>
              ) : null}
            </div>

            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-gray-100 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 rounded-full bg-gray-50 px-3 py-2 text-xs outline-none ring-1 ring-gray-100 focus:ring-emerald-400/50 dark:bg-gray-100"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-500 disabled:opacity-40"
                aria-label="Send"
              >
                <Send size={14} />
              </button>
            </form>
            {error ? (
              <Typography className="px-3 pb-2 text-[10px] text-red-600">
                {error}
              </Typography>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-gray-50 shadow-[0_12px_40px_-8px_rgba(16,185,129,0.55)] ring-2 ring-emerald-400/40"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? "Close ask portfolio" : "Ask my portfolio"}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
