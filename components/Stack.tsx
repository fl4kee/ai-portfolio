import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/lib/content";

const marquee = [
  "Python",
  "Django",
  "DRF",
  "FastAPI",
  "PostgreSQL",
  "Celery",
  "RabbitMQ",
  "Redis",
  "Docker",
  "Nginx",
  "React",
  "LangChain",
  "OpenRouter",
  "RAG",
  "n8n",
  "Grafana",
  "pytest",
  "mypy",
  "Ruff",
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title={
        <>
          The stack I reach for{" "}
          <span className="text-white/40">to ship fast and safe.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="glass card-hover h-full rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase tracking-wider text-white/80">
                  {group.label}
                </h3>
                <span className="font-mono text-xs text-white/30">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* marquee */}
      <div className="mask-fade-x relative mt-12 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-lg border border-white/8 bg-white/[0.02] px-4 py-2 font-mono text-sm text-white/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
