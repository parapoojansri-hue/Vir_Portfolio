import { Section } from "./Section";
import { Zap, Layers, Sparkles, ShieldCheck, Cpu, Users } from "lucide-react";

const items = [
  { icon: Zap,        t: "Fast Delivery",        d: "Ship MVPs in weeks, not quarters.",            gradient: "from-amber-400 to-orange-500",   glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]",   border: "border-amber-500/20 hover:border-amber-400/40",   bg: "from-amber-500/10 via-amber-500/4 to-transparent",   iconBg: "from-amber-400 to-orange-500" },
  { icon: Layers,     t: "Scalable Architecture", d: "Built to grow from 10 to 10M users.",          gradient: "from-blue-400 to-indigo-600",    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]",   border: "border-blue-500/20 hover:border-blue-400/40",    bg: "from-blue-500/10 via-blue-500/4 to-transparent",     iconBg: "from-blue-400 to-indigo-600" },
  { icon: Sparkles,   t: "Modern UI/UX",          d: "Design systems that feel premium.",            gradient: "from-pink-400 to-rose-600",      glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.18)]",   border: "border-pink-500/20 hover:border-pink-400/40",    bg: "from-pink-500/10 via-pink-500/4 to-transparent",     iconBg: "from-pink-400 to-rose-600" },
  { icon: Cpu,        t: "AI Expertise",          d: "LLMs, ML, and intelligent automation.",       gradient: "from-violet-400 to-purple-600",  glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]",   border: "border-violet-500/20 hover:border-violet-400/40", bg: "from-violet-500/10 via-violet-500/4 to-transparent",  iconBg: "from-violet-400 to-purple-600" },
  { icon: ShieldCheck,t: "Cloud-Ready",           d: "Secure, observable, production-grade.",       gradient: "from-emerald-400 to-teal-600",   glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]",   border: "border-emerald-500/20 hover:border-emerald-400/40", bg: "from-emerald-500/10 via-emerald-500/4 to-transparent", iconBg: "from-emerald-400 to-teal-600" },
  { icon: Users,      t: "Dedicated Team",        d: "Engineers who care about your outcome.",      gradient: "from-cyan-400 to-blue-600",      glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]",    border: "border-cyan-500/20 hover:border-cyan-400/40",    bg: "from-cyan-500/10 via-cyan-500/4 to-transparent",     iconBg: "from-cyan-400 to-blue-600" },
];

const metrics = [
  { v: "90+",   l: "Countries",        gradient: "from-cyan-400 to-blue-500" },
  { v: "1000+", l: "Global Customers", gradient: "from-violet-400 to-purple-500" },
  { v: "145k+", l: "Professionals",    gradient: "from-emerald-400 to-teal-500" },
  { v: "$6B+",  l: "Global Revenue",   gradient: "from-amber-400 to-orange-500" },
];

export function WhyUs() {
  return (
    <Section
      eyebrow="Our Advantage"
      title={<>Enabling Transformative Scale <span className="text-gradient">at Unparalleled Speed</span></>}
      description="A unique blend of digital innovation, domain expertise, and robust industry-strong processes."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((i) => {
          const Icon = i.icon;
          return (
            <div
              key={i.t}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${i.bg} ${i.border} ${i.glow} p-6 transition-all duration-300 hover:-translate-y-1.5`}
            >
              <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${i.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              <div className="relative flex items-start gap-4">
                <div className={`flex-shrink-0 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${i.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{i.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics banner */}
      <div className="mt-10 relative overflow-hidden rounded-3xl border border-border/40 bg-secondary/10 p-8">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.l} className="text-center group">
              <div className={`font-display text-3xl font-bold sm:text-4xl bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent`}>
                {m.v}
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
