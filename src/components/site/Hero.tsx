export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background grid */}
      <div aria-hidden className="absolute inset-0 grid-bg" />
      {/* Glow orbs */}
      <div aria-hidden className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div aria-hidden className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-cyan animate-pulse" />
            Next-Gen Software Startup
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Engineering the Future</span>
            <br />
            <span className="text-foreground/90">with AI &amp; Full Stack Innovation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A next-generation software startup delivering scalable web platforms, AI-powered applications,
            cloud systems, and enterprise-grade digital solutions.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-cyan hover:scale-[1.02]">
              Explore Projects <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold text-foreground">
              Work With Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground">
              Contact Team →
            </a>
          </div>
        </div>

        {/* Orbiting visual */}
        <div className="relative mx-auto mt-24 hidden h-[340px] w-[340px] sm:block">
          <div aria-hidden className="absolute inset-0 rounded-full border border-border/60" />
          <div aria-hidden className="absolute inset-8 rounded-full border border-border/40" />
          <div aria-hidden className="absolute inset-16 rounded-full border border-border/30" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl glass shadow-glow px-6 py-4 text-center">
            <div className="font-display text-2xl font-bold text-gradient">VIR.AI</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Neural Core</div>
          </div>
          {["React", "Node", "AI", "Cloud", "Mongo", "Next"].map((t, i) => (
            <div
              key={t}
              className="absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-xl glass grid place-items-center text-xs font-semibold text-foreground/80 animate-orbit"
              style={{ animationDelay: `${-i * 3}s` }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "6+", l: "Team Members" },
            { v: "MERN", l: "Stack Experts" },
            { v: "AI + Cloud", l: "Solutions" },
            { v: "10+", l: "Production Projects" },
          ].map((s) => (
            <div key={s.l} className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
