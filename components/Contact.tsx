"use client";

import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n";

export function Contact() {
  const { t } = useLang();

  const channels = [
    { label: "Telegram", value: t.telegram, href: t.telegramUrl },
    { label: "Email", value: t.email, href: `mailto:${t.email}` },
    { label: "GitHub", value: t.githubHandle, href: t.github },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-accent-violet/25 blur-[120px]" />

            <p className="eyebrow justify-center">{t.ui.contactEyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.ui.contactTitleLead}{" "}
              <span className="text-gradient">{t.ui.contactTitleAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/55">
              {t.ui.contactIntro}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={t.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                {t.ui.contactTelegram}
              </a>
              <a
                href={`mailto:${t.email}`}
                className="rounded-xl border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/30"
              >
                {t.ui.contactEmail}
              </a>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-accent/40"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    {c.label}
                  </p>
                  <p className="mt-1 truncate text-sm text-white/80">{c.value}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-white/35">
            © {new Date().getFullYear()} {t.name}. {t.ui.footerBuilt}
          </p>
          <p className="font-mono text-xs text-white/35">{t.location}</p>
        </footer>
      </div>
    </section>
  );
}
