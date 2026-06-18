"use client";

import { useState } from "react";
import { Section } from "./Section";
import { useLang } from "@/lib/i18n";

export function Journey() {
  const { t } = useLang();
  const journey = t.journey;
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="journey"
      eyebrow={t.ui.journeyEyebrow}
      title={
        <>
          {t.ui.journeyTitleLead}{" "}
          <span className="text-white/40">{t.ui.journeyTitleMuted}</span>
        </>
      }
      intro={t.ui.journeyIntro}
    >
      <div className="relative">
        {/* timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-[9px]" />

        <div className="flex flex-col gap-4">
          {journey.map((role, i) => {
            const isOpen = open === i;
            return (
              <div key={role.company} className="relative pl-8 md:pl-12">
                {/* node */}
                <span
                  className={`absolute left-0 top-6 grid h-4 w-4 place-items-center rounded-full border transition-all md:h-5 md:w-5 ${
                    isOpen
                      ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(124,140,255,0.18)]"
                      : "border-white/25 bg-ink-900"
                  }`}
                >
                  {i === 0 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
                  )}
                </span>

                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`glass card-hover w-full rounded-2xl p-6 text-left transition-all sm:p-7 ${
                    isOpen ? "border-accent/30" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {role.company}
                        </h3>
                        {i === 0 && (
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                            {t.ui.now}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-base text-accent">{role.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-white/55">
                        {role.period}
                      </p>
                      <p className="font-mono text-[11px] text-white/35">
                        {role.duration} · {role.tag}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
                    {role.summary}
                  </p>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2.5 border-t border-white/10 pt-5">
                        {role.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex gap-3 text-sm leading-relaxed text-white/65"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.stack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 font-mono text-[11px] text-white/35">
                    {isOpen ? t.ui.collapse : t.ui.expand}
                  </p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
