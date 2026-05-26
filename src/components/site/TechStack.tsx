import { Section } from "./Section";
import { Code, Server, Brain, Database, Sparkles, Layers } from "lucide-react";

const expertise = [
  { name: "Full Stack Development",   val: 95, from: "from-cyan-400",   to: "to-blue-500",    track: "bg-cyan-500/20" },
  { name: "MERN Stack Applications",  val: 92, from: "from-violet-400", to: "to-purple-600",  track: "bg-violet-500/20" },
  { name: "Data Science & Analysis",  val: 88, from: "from-rose-400",   to: "to-pink-600",    track: "bg-rose-500/20" },
  { name: "Machine Learning Models",  val: 86, from: "from-amber-400",  to: "to-orange-500",  track: "bg-amber-500/20" },
  { name: "AI API Integrations",      val: 90, from: "from-pink-400",   to: "to-rose-600",    track: "bg-pink-500/20" },
  { name: "Cloud & Edge Deployments", val: 85, from: "from-emerald-400", to: "to-teal-600",   track: "bg-emerald-500/20" },
];

const categories = [
  {
    title: "Frontend Engineering",
    desc: "Building modern, high-performance, and pixel-perfect user interfaces.",
    icon: Code,
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-500/12 via-cyan-500/5 to-transparent",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    techs: ["React.js", "Next.js", "Tailwind CSS", "Leaflet.js", "HTML5/CSS3"],
  },
  {
    title: "Backend & APIs",
    desc: "Designing secure, modular, and scalable server-side systems.",
    icon: Server,
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-500/12 via-violet-500/5 to-transparent",
    border: "border-violet-500/20 hover:border-violet-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    techs: ["Node.js", "Express.js", "Python", "Flask", "REST APIs"],
  },
  {
    title: "AI & Data Science",
    desc: "Integrating intelligent models, constraint solvers, and analytics.",
    icon: Brain,
    gradient: "from-rose-500 to-pink-600",
    bg: "from-rose-500/12 via-rose-500/5 to-transparent",
    border: "border-rose-500/20 hover:border-rose-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
    techs: ["Machine Learning", "Linear Regression", "Pandas", "AI Utilities", "Python"],
  },
  {
    title: "Cloud & Database",
    desc: "Managing database layers, real-time sync, and edge deployment.",
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-500/12 via-emerald-500/5 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    techs: ["MongoDB", "Firebase", "Cloudflare Pages", "Vercel / Render", "Google Auth"],
  },
];

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Next-Gen Technologies"
      title={<>Driving Innovation with <span className="text-gradient">enterprise ecosystems</span></>}
      description="Leveraging the power of Cloud, AI, and enterprise-grade technologies to deliver scalable digital transformation solutions."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Core Competencies */}
        <div className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-border/40 bg-secondary/10 p-8">
          <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-primary shadow-md">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Core Competencies</h3>
            </div>

            <div className="space-y-5">
              {expertise.map((s) => (
                <div key={s.name} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground/75 group-hover:text-foreground transition-colors">
                      {s.name}
                    </span>
                    <span className={`font-display text-xs font-bold bg-gradient-to-r ${s.from} ${s.to} bg-clip-text text-transparent`}>
                      {s.val}%
                    </span>
                  </div>
                  <div className={`h-2 overflow-hidden rounded-full ${s.track} border border-border/20 relative`}>
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${s.from} ${s.to} shadow-sm`}
                      style={{ width: `${s.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/40 bg-secondary/30 p-4 flex items-center gap-3">
              <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-primary shadow-md">
                <Layers className="h-4 w-4 text-white" />
              </div>
              <div className="text-xs">
                <span className="font-bold block text-foreground">Digital Innovation Hub</span>
                <span className="text-muted-foreground block mt-0.5">Fostering an ecosystem of next-gen technologies and industry-centric solutions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Category Cards */}
        <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${c.bg} ${c.border} ${c.glow} p-6 transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${c.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${c.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-display text-base font-bold text-foreground group-hover:text-white transition-colors">
                      {c.title}
                    </h4>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">{c.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.techs.map((t) => (
                      <span
                        key={t}
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${c.badge}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
