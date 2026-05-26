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
            Global Technology Consulting
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Transformative Scale</span>
            <br />
            <span className="text-foreground/90">at Unparalleled Speed</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We offer technology consulting and digital solutions to global enterprises across industries, enabling transformative scale through next-generation technologies.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-cyan hover:scale-[1.02]">
              Explore Case Studies <span className="transition-transform group-hover:translate-x-1">→</span>
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
        <div className="relative mx-auto mt-24 hidden h-[420px] w-[420px] sm:block">
          {/* Orbit ring lines */}
          <div aria-hidden className="absolute inset-0 rounded-full border border-border/50" />
          <div aria-hidden className="absolute inset-[30px] rounded-full border border-border/35" />
          <div aria-hidden className="absolute inset-[70px] rounded-full border border-border/25" />
          <div aria-hidden className="absolute inset-[110px] rounded-full border border-border/15" />

          {/* Outer glow pulse */}
          <div aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl animate-pulse-glow" />

          {/* Center Neural Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl px-7 py-5 text-center"
            style={{ background: "linear-gradient(135deg, oklch(1 0 0 / 0.85), oklch(1 0 0 / 0.55))", backdropFilter: "blur(24px)", border: "1px solid oklch(0.2 0.04 260 / 0.12)", boxShadow: "0 0 40px -8px oklch(0.5 0.2 258 / 0.4), 0 0 80px -20px oklch(0.58 0.16 210 / 0.3)" }}>
            <div className="font-display text-2xl font-bold" style={{ background: "linear-gradient(135deg, oklch(0.5 0.2 258), oklch(0.58 0.16 210))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>VIR.AI</div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">Neural Core</div>
            <div className="mt-2 flex gap-1 justify-center">
              <div className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
              <div className="h-1 w-1 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>

          {/* Inner orbit ring — clockwise */}
          {[
            { label: "React",  gradient: "from-cyan-400 to-blue-500",    shadow: "rgba(6,182,212,0.5)" },
            { label: "Node",   gradient: "from-emerald-400 to-teal-600", shadow: "rgba(16,185,129,0.5)" },
            { label: "AI",     gradient: "from-violet-400 to-purple-600",shadow: "rgba(139,92,246,0.5)" },
            { label: "Cloud",  gradient: "from-sky-400 to-indigo-500",   shadow: "rgba(56,189,248,0.5)" },
            { label: "Mongo",  gradient: "from-green-400 to-emerald-600",shadow: "rgba(74,222,128,0.5)" },
            { label: "Next",   gradient: "from-slate-400 to-slate-600",  shadow: "rgba(148,163,184,0.5)" },
          ].map(({ label, gradient, shadow }, i) => (
            <div
              key={label}
              className={`absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-xl grid place-items-center text-[10px] font-bold text-white animate-orbit`}
              style={{
                animationDelay: `${-i * 3}s`,
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                boxShadow: `0 4px 20px -4px ${shadow}`,
              }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient}`} />
              <span className="relative z-10 drop-shadow">{label}</span>
            </div>
          ))}

          {/* Outer orbit ring — counter-clockwise */}
          {[
            { label: "Python", gradient: "from-amber-400 to-yellow-500",  shadow: "rgba(251,191,36,0.5)" },
            { label: "Docker", gradient: "from-blue-400 to-indigo-600",   shadow: "rgba(96,165,250,0.5)" },
            { label: "GraphQL",gradient: "from-pink-400 to-rose-600",     shadow: "rgba(244,114,182,0.5)" },
            { label: "AWS",    gradient: "from-orange-400 to-amber-600",  shadow: "rgba(251,146,60,0.5)" },
            { label: "TS",     gradient: "from-blue-500 to-cyan-600",     shadow: "rgba(59,130,246,0.5)" },
            { label: "Redis",  gradient: "from-red-400 to-rose-600",      shadow: "rgba(248,113,113,0.5)" },
          ].map(({ label, gradient, shadow }, i) => (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-xl grid place-items-center text-[10px] font-bold text-white animate-orbit-outer"
              style={{
                animationDelay: `${-i * 4.7}s`,
                boxShadow: `0 4px 20px -4px ${shadow}`,
              }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient}`} />
              <span className="relative z-10 drop-shadow">{label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "90+", l: "Countries Presence" },
            { v: "Enterprise", l: "Digital Solutions" },
            { v: "Next-Gen", l: "Tech Innovations" },
            { v: "1000+", l: "Global Customers" },
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
