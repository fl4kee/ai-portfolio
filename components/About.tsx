import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile, stats, education } from "@/lib/content";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineering that ships,{" "}
          <span className="text-white/40">end to end.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-white/75">
              {profile.intro}
            </p>
            <p className="mt-5 leading-relaxed text-white/55">
              I care about the unglamorous parts that make software trustworthy:
              static typing, tests that don&apos;t flake, observable systems and
              clean integrations. I&apos;ve owned features from requirements
              analysis through release — and increasingly use LLMs and n8n to
              automate the work that shouldn&apos;t need a human.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-xs text-accent">
                EDU
              </div>
              <div>
                <p className="text-sm font-medium text-white/85">
                  {education.school}
                </p>
                <p className="font-mono text-xs text-white/45">
                  {education.degree} · {education.city} · {education.year}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full grid-cols-2 gap-4">
            {stats.map((s) => (
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
