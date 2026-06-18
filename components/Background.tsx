export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base grid */}
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-70" />

      {/* ambient gradient orbs */}
      <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute -top-10 right-[8%] h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[130px]" />
      <div className="absolute top-[40%] left-[-6%] h-[460px] w-[460px] rounded-full bg-accent-blue/10 blur-[140px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_40%,#060608_85%)]" />
    </div>
  );
}
