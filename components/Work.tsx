"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n";
import type { ProjectStatus } from "@/lib/content";

const statusStyle: Record<ProjectStatus, string> = {
  inProgress: "border-accent/30 bg-accent/10 text-accent",
  planned: "border-white/15 bg-white/[0.04] text-white/50",
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

export function Work() {
  const { t } = useLang();

  return (
    <Section
      id="work"
      eyebrow={t.ui.workEyebrow}
      title={
        <>
          {t.ui.workTitleLead}{" "}
          <span className="text-white/40">{t.ui.workTitleMuted}</span>
        </>
      }
      intro={t.ui.workIntro}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/30">
                  0{i + 1} /
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                    statusStyle[p.status]
                  }`}
                >
                  {t.ui.statuses[p.status]}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                {p.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
