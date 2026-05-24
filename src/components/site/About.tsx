import { Section } from "./Section";
import { Target, Eye, Compass } from "lucide-react";

const pillars = [
  { 
    t: "Mission", 
    d: "Build scalable, intelligent digital products that empower startups and enterprises to ship faster.",
    icon: Target,
    color: "from-cyan-500/15 via-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  },
  { 
    t: "Vision", 
    d: "Become a global hub for AI-driven full-stack engineering powered by a relentless innovation mindset.",
    icon: Eye,
    color: "from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10",
  },
  { 
    t: "Approach", 
    d: "Pair startup velocity with enterprise discipline — clean architecture, modern UX, production-ready code.",
    icon: Compass,
    color: "from-emerald-500/15 via-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  },
];

const leadership = [
  { role: "President", focus: "Strategy & Vision", color: "border-amber-500/30 text-amber-400 bg-amber-500/5 hover:shadow-amber-500/10" },
  { role: "Vice President", focus: "Operations & Delivery", color: "border-purple-500/30 text-purple-400 bg-purple-500/5 hover:shadow-purple-500/10" },
  { role: "Development Team", focus: "Full-Stack & AI Engineering", color: "border-blue-500/30 text-blue-400 bg-blue-500/5 hover:shadow-blue-500/10" },
  { role: "Client Management", focus: "Partnerships & Success", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:shadow-emerald-500/10" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About VIR Technologies"
      title={<>A startup built by engineers, <span className="text-gradient">for the future</span></>}
      description="VIR Technologies is a software company founded by a passionate team of undergraduate students and engineering professionals. We focus on MERN, AI applications, cloud, and full-stack enterprise platforms."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.t}
              className={`group relative overflow-hidden rounded-2xl border bg-secondary/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${p.color}`}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl glass p-8 sm:p-10 relative overflow-hidden border border-border/50 bg-secondary/10">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Leadership Hierarchy</div>
          <h3 className="font-display text-2xl font-bold mt-1 text-foreground">How we&apos;re organized</h3>
        </div>
        
        {/* Glowing connected roadmap */}
        <div className="relative grid gap-6 md:grid-cols-4 md:gap-4">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-purple-500/20 via-blue-500/20 to-emerald-500/20 hidden md:block transform -translate-y-1/2" />
          
          {leadership.map((l, i) => (
            <div
              key={l.role}
              className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-secondary/40 p-5 ${l.color}`}
            >
              {/* Level indicator */}
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] uppercase tracking-widest font-bold">Level {i + 1}</div>
                <div className="h-2 w-2 rounded-full bg-current animate-pulse" />
              </div>
              <div className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {l.role}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {l.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
