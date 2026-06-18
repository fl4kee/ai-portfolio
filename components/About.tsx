"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();

  return (
    <Section
      id="about"
      eyebrow={t.ui.aboutEyebrow}
      title={
        <>
          {t.ui.aboutTitleLead}{" "}
          <span className="text-white/40">{t.ui.aboutTitleMuted}</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-white/75">{t.intro}</p>
            <p className="mt-5 leading-relaxed text-white/55">{t.introExtra}</p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-xs text-accent">
                {t.ui.aboutEduLabel}
              </div>
              <div>
                <p className="text-sm font-medium text-white/85">
                  {t.education.school}
                </p>
                <p className="font-mono text-xs text-white/45">
                  {t.education.degree} · {t.education.city} · {t.education.year}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full grid-cols-2 gap-4">
            {t.stats.map((s) => (
              <div
                key={s.label}
                className="glass card-hover flex flex-col justify-between rounded-2xl p-6"
              >
                <span className="text-gradient text-4xl font-semibold tracking-tight">
                  {s.value}
                </span>
                <span className="mt-3 text-sm leading-snug text-white/55">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
