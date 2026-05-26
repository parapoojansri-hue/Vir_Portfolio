import { Section } from "./Section";
import { Target, Eye, Compass } from "lucide-react";

const pillars = [
  {
    t: "Mission",
    d: "Build scalable, intelligent digital products that empower startups and enterprises to ship faster.",
    icon: Target,
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-500/15 via-cyan-500/5 to-blue-500/5",
    border: "border-cyan-500/25 hover:border-cyan-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]",
    tag: "Core Purpose",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  },
  {
    t: "Vision",
    d: "Become a global hub for AI-driven full-stack engineering powered by a relentless innovation mindset.",
    icon: Eye,
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-500/15 via-violet-500/5 to-purple-500/5",
    border: "border-violet-500/25 hover:border-violet-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]",
    tag: "Future Forward",
    tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  },
  {
    t: "Approach",
    d: "Pair startup velocity with enterprise discipline — clean architecture, modern UX, production-ready code.",
    icon: Compass,
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-500/15 via-emerald-500/5 to-teal-500/5",
    border: "border-emerald-500/25 hover:border-emerald-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]",
    tag: "Methodology",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  },
];


export function About() {
  return (
    <Section
      id="about"
      eyebrow="About VIR Technologies"
      title={<>A startup built by engineers, <span className="text-gradient">for the future</span></>}
      description="VIR Technologies is an elite software engineering company founded by a passionate team of industry professionals and technologists. We focus on MERN, AI applications, cloud, and full-stack enterprise platforms."
    >
      {/* Pillar Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.t}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${p.bg} ${p.border} ${p.glow} p-8 transition-all duration-300 hover:-translate-y-1.5`}
            >
              {/* Top-right decorative orb */}
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-2xl transition-all group-hover:opacity-20`} />
              {/* Bottom-left subtle orb */}
              <div className={`absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-gradient-to-br ${p.gradient} opacity-8 blur-xl`} />

              <div className="relative">
                {/* Tag badge */}
                <div className={`mb-5 inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] ${p.tagColor}`}>
                  {p.tag}
                </div>

                {/* Icon */}
                <div className={`mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ height: "52px", width: "52px" }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">{p.t}</h3>
                <div className={`mt-1.5 h-0.5 w-8 rounded-full bg-gradient-to-r ${p.gradient} opacity-60`} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* How We Deliver */}
      <div className="mt-12 rounded-3xl border border-border/40 bg-secondary/10 p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        {/* Background glow */}
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl pointer-events-none" />

        <div className="relative mb-10 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent/30" />
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Our Process</div>
            <h3 className="font-display text-2xl font-bold text-foreground">How we complete every project</h3>
          </div>
        </div>

        <div className="relative grid gap-4 md:grid-cols-4">
          {/* Animated connector line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] hidden md:block"
            style={{ background: "linear-gradient(90deg, rgba(251,191,36,0.4), rgba(139,92,246,0.4), rgba(6,182,212,0.4), rgba(16,185,129,0.4))" }} />

          {[
            {
              step: "01",
              title: "Discovery & Planning",
              desc: "We start with deep-dive sessions to understand your goals, tech stack, timeline, and KPIs. Every line of code is scoped before it's written.",
              icon: "🔍",
              gradient: "from-amber-400 to-orange-500",
              border: "border-amber-500/25 hover:border-amber-400/50",
              bg: "from-amber-500/10 via-amber-500/5 to-transparent",
              glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
              tag: "Phase 1",
              tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/25",
              stepColor: "text-amber-400",
            },
            {
              step: "02",
              title: "Design & Architecture",
              desc: "UI/UX wireframes, system design diagrams, API contracts, and database schemas — built before development begins for zero guesswork.",
              icon: "🎨",
              gradient: "from-violet-400 to-purple-600",
              border: "border-violet-500/25 hover:border-violet-400/50",
              bg: "from-violet-500/10 via-violet-500/5 to-transparent",
              glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
              tag: "Phase 2",
              tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
              stepColor: "text-violet-400",
            },
            {
              step: "03",
              title: "Build & Iterate",
              desc: "Agile sprints with weekly demos. Clean, tested, reviewed code shipped in cycles — with real feedback loops and live previews at every stage.",
              icon: "⚙️",
              gradient: "from-cyan-400 to-blue-600",
              border: "border-cyan-500/25 hover:border-cyan-400/50",
              bg: "from-cyan-500/10 via-cyan-500/5 to-transparent",
              glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
              tag: "Phase 3",
              tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
              stepColor: "text-cyan-400",
            },
            {
              step: "04",
              title: "Launch & Support",
              desc: "Zero-downtime deployment to cloud, full monitoring setup, handoff docs, and 30-day post-launch support. Your product, production-ready.",
              icon: "🚀",
              gradient: "from-emerald-400 to-teal-600",
              border: "border-emerald-500/25 hover:border-emerald-400/50",
              bg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
              glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
              tag: "Phase 4",
              tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
              stepColor: "text-emerald-400",
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${phase.bg} ${phase.border} ${phase.glow} p-5 transition-all duration-300 hover:-translate-y-1.5`}
            >
              <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${phase.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="relative">
                {/* Step badge + emoji */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${phase.tagColor}`}>
                    {phase.tag}
                  </span>
                  <span className="text-xl">{phase.icon}</span>
                </div>

                {/* Step number */}
                <div className={`font-display text-3xl font-black ${phase.stepColor} opacity-25 leading-none mb-2 group-hover:opacity-40 transition-opacity`}>
                  {phase.step}
                </div>

                {/* Title */}
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">{phase.title}</h4>
                <div className={`mt-1.5 h-0.5 w-6 rounded-full bg-gradient-to-r ${phase.gradient} opacity-60`} />

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
