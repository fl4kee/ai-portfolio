import { Reveal } from "./Reveal";
import { profile } from "@/lib/content";

const channels = [
  { label: "Telegram", value: profile.telegram, href: profile.telegramUrl },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-accent-violet/25 blur-[120px]" />

            <p className="eyebrow justify-center">Let&apos;s build something</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Open to remote roles &amp;{" "}
              <span className="text-gradient">ambitious problems.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/55">
              Backend depth, an AI-automation edge, and a habit of owning things
              end to end. If that fits what you&apos;re building, let&apos;s talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Message on Telegram
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/30"
              >
                Send an email
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
                  <p className="mt-1 truncate text-sm text-white/80">
                    {c.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-white/35">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
          <p className="font-mono text-xs text-white/35">
            {profile.location}
          </p>
        </footer>
      </div>
    </section>
  );
}
