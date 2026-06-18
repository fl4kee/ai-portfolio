"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

export function DigitalTwin() {
  const { t } = useLang();
  const chat = t.ui.chat;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, streaming]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  async function send(text: string) {
    const value = text.trim();
    if (!value || streaming) return;

    const history: Msg[] = [...messages, { role: "user", content: value }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) throw new Error("request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        acc += decoder.decode(chunk, { stream: true });
        setMessages((prev) => {
          const copy = prev.slice();
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }

      if (!acc.trim()) throw new Error("empty response");
    } catch {
      setError(chat.error);
      // drop the empty assistant bubble
      setMessages((prev) =>
        prev.length && prev[prev.length - 1].role === "assistant" && !prev[prev.length - 1].content
          ? prev.slice(0, -1)
          : prev,
      );
    } finally {
      setStreaming(false);
    }
  }

  const showStarters = messages.length === 0;

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={chat.fab}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full border border-white/10 bg-ink-850/90 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all hover:border-accent/50 hover:bg-ink-800 sm:bottom-6 sm:right-6"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="hidden text-sm font-medium text-white/90 sm:block">
          {open ? chat.title : chat.fab}
        </span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-3 left-3 z-[60] flex h-[70vh] max-h-[600px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl backdrop-blur-2xl sm:left-auto sm:right-6 sm:bottom-24 sm:w-[400px]"
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-semibold text-accent">
                  {t.monogram}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{chat.title}</p>
                  <p className="font-mono text-[11px] text-white/45">{chat.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-8 w-8 place-items-center rounded-lg text-white/50 transition-colors hover:bg-white/5 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              <Bubble role="assistant" monogram={t.monogram}>
                {chat.greeting}
              </Bubble>

              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} monogram={t.monogram}>
                  {m.content || (
                    <span className="inline-flex gap-1">
                      <Dot /> <Dot d={0.15} /> <Dot d={0.3} />
                    </span>
                  )}
                </Bubble>
              ))}

              {error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                  {error}
                </p>
              )}

              {showStarters && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {chat.starters.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-left text-xs text-white/65 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-white/10 p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 focus-within:border-accent/50">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={chat.placeholder}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-ink-950 transition-opacity disabled:opacity-30"
                  aria-label={chat.send}
                >
                  ↑
                </button>
              </div>
              <p className="mt-2 text-center font-mono text-[10px] text-white/30">
                {chat.disclaimer}
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  role,
  monogram,
  children,
}: {
  role: "user" | "assistant";
  monogram: string;
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border font-mono text-[10px] font-semibold ${
          isUser
            ? "border-white/10 bg-white/[0.05] text-white/60"
            : "border-accent/30 bg-accent/10 text-accent"
        }`}
      >
        {isUser ? "You" : monogram}
      </span>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-tr-sm bg-white text-ink-950"
            : "rounded-tl-sm border border-white/10 bg-white/[0.03] text-white/85"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-white/50"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: d }}
    />
  );
}
