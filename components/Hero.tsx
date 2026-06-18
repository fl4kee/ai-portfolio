"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/content";

const STATIC = process.env.NEXT_PUBLIC_STATIC === "1";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();
  const noAnim = STATIC || reduce;
  const startHidden = noAnim ? false : "hidden";

  return (
    <section
      id="top"
      className={`relative flex items-center pt-28 pb-20 ${
        noAnim ? "min-h-0" : "min-h-[100svh]"
      }`}
    >
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.status}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
              className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
              className="mt-4 text-2xl font-medium sm:text-3xl"
            >
              <span className="text-gradient animate-gradient-pan">
                {profile.role}
              </span>
              <span className="text-white/40"> — {profile.focus}</span>
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">Let&apos;s talk</span>
              </a>
              <a
                href="#journey"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                View journey
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-3 font-mono text-sm text-white/55 transition-colors hover:text-white"
              >
                résumé ↗
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial={startHidden}
              animate="visible"
              className="mt-10 flex items-center gap-5 font-mono text-xs text-white/40"
            >
              <span>📍 {profile.location}</span>
              <span className="h-3 w-px bg-white/15" />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                github/{profile.githubHandle}
              </a>
            </motion.div>
          </div>

          {/* Right: terminal card */}
          <motion.div
            initial={noAnim ? false : { opacity: 0, y: 30, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-violet/20 via-accent-blue/10 to-accent-cyan/20 blur-2xl" />
            <div className="glass relative animate-float rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 pb-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/40">
                  ~/kirill — engineer.py
                </span>
              </div>
              <pre className="overflow-hidden font-mono text-[13px] leading-relaxed text-white/70">
                <code>
                  <span className="text-accent-cyan">class</span>{" "}
                  <span className="text-white">Engineer</span>:
                  {"\n"}
                  {"    "}stack = [
                  {"\n"}
                  {"        "}
                  <span className="text-emerald-300">&quot;python&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;django&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;drf&quot;</span>,
                  {"\n"}
                  {"        "}
                  <span className="text-emerald-300">&quot;postgres&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;react&quot;</span>,
                  {"\n"}
                  {"    "}]
                  {"\n"}
                  {"    "}focus = (
                  {"\n"}
                  {"        "}
                  <span className="text-accent">&quot;LLM automation&quot;</span>
                  {"\n"}
                  {"    "})
                  {"\n\n"}
                  {"    "}
                  <span className="text-accent-cyan">def</span>{" "}
                  <span className="text-violet-300">ship</span>(self, idea):
                  {"\n"}
                  {"        "}
                  <span className="text-accent-cyan">return</span> production
                  {"\n"}
                  <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse-glow bg-accent" />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
