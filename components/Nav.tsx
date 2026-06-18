"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.ui.nav.about },
    { href: "#journey", label: t.ui.nav.journey },
    { href: "#stack", label: t.ui.nav.stack },
    { href: "#work", label: t.ui.nav.work },
    { href: "#contact", label: t.ui.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-sm font-semibold text-white transition-colors group-hover:border-accent/50">
            {t.monogram}
          </span>
          <span className="hidden font-mono text-sm text-white/70 transition-colors group-hover:text-white sm:block">
            {t.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} className="ml-2" />
          <a
            href="#contact"
            className="ml-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all hover:border-accent/50 hover:bg-accent/10"
          >
            {t.ui.getInTouch}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
  className = "",
}: {
  lang: "en" | "ru";
  setLang: (l: "en" | "ru") => void;
  className?: string;
}) {
  const langs: Array<"en" | "ru"> = ["en", "ru"];
  return (
    <div
      className={`relative inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-0.5 font-mono text-[11px] uppercase ${className}`}
      role="group"
      aria-label="Language"
    >
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2 py-1 tracking-wider transition-colors ${
            lang === l
              ? "bg-white text-ink-950"
              : "text-white/50 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
