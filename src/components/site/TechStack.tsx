import { Section } from "./Section";
import { Code, Server, Brain, Database, Sparkles, Layers, Cpu, ArrowRight } from "lucide-react";

const expertise = [
  { name: "Full Stack Development", val: 95, color: "bg-cyan-500" },
  { name: "MERN Stack Applications", val: 92, color: "bg-purple-500" },
  { name: "Data Science & Analysis", val: 88, color: "bg-rose-500" },
  { name: "Machine Learning Models", val: 86, color: "bg-amber-500" },
  { name: "AI API Integrations", val: 90, color: "bg-pink-500" },
  { name: "Cloud & Edge Deployments", val: 85, color: "bg-emerald-500" },
];

const categories = [
  {
    title: "Frontend Engineering",
    desc: "Building modern, high-performance, and pixel-perfect user interfaces.",
    icon: Code,
    color: "from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    techs: ["React.js", "Next.js", "Tailwind CSS", "Leaflet.js", "HTML5/CSS3"],
  },
  {
    title: "Backend & APIs",
    desc: "Designing secure, modular, and scalable server-side systems.",
    icon: Server,
    color: "from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    techs: ["Node.js", "Express.js", "Python", "Flask", "REST APIs"],
  },
  {
    title: "AI & Data Science",
    desc: "Integrating intelligent models, constraint solvers, and analytics.",
    icon: Brain,
    color: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/20 hover:border-rose-500/40 hover:shadow-rose-500/10",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    techs: ["Machine Learning", "Linear Regression", "Pandas", "AI Utilities", "Python"],
  },
  {
    title: "Cloud & Database",
    desc: "Managing database layers, real-time sync, and edge deployment.",
    icon: Database,
    color: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    techs: ["MongoDB", "Firebase", "Cloudflare Pages", "Vercel / Render", "Google Auth"],
  },
];

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={<>Engineering excellence with a <span className="text-gradient">modern toolkit</span></>}
      description="A battle-tested set of technologies designed to build intelligent, secure, and production-ready applications."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Core Expertise Progress */}
        <div className="lg:col-span-5 rounded-3xl glass p-8 relative overflow-hidden">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-25 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              <h3 className="font-display text-lg font-bold text-foreground">Core Competencies</h3>
            </div>
            
            <div className="space-y-6">
              {expertise.map((s) => (
                <div key={s.name} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-foreground/80 group-hover:text-foreground transition-colors">
                      {s.name}
                    </span>
                    <span className="font-display text-xs font-bold text-accent">
                      {s.val}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary/80 border border-border/30 relative">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${s.color} opacity-85 shadow-glow`}
                      style={{ width: `${s.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info banner */}
            <div className="mt-8 rounded-2xl bg-secondary/30 border border-border/50 p-4 flex items-center gap-3">
              <Layers className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold block text-foreground">Multi-disciplinary Approach</span>
                <span className="text-muted-foreground block mt-0.5">Combining full-stack speed, ML models, and constraint solving engines.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Categorized Grid */}
        <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`group relative overflow-hidden rounded-3xl border bg-secondary/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${c.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {c.title}
                  </h4>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.techs.map((t) => (
                    <span
                      key={t}
                      className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-all ${c.badgeColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
