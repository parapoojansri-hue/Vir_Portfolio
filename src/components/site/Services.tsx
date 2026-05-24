import { Section } from "./Section";
import {
  Globe, Smartphone, Palette, BrainCircuit, Wrench, Rocket, Cloud, Code2,
} from "lucide-react";

const services = [
  { 
    icon: Globe, 
    t: "Website Development", 
    d: "Performance-tuned, SEO-ready web platforms with modern frameworks.",
    color: "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    label: "Web"
  },
  { 
    icon: Smartphone, 
    t: "Mobile App Development", 
    d: "Cross-platform mobile apps with native feel and offline capability.",
    color: "from-indigo-500/10 via-indigo-500/5 to-transparent border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-indigo-500/10",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    label: "Mobile"
  },
  { 
    icon: Palette, 
    t: "UI/UX Design", 
    d: "Design systems and product experiences that convert and delight.",
    color: "from-pink-500/10 via-pink-500/5 to-transparent border-pink-500/20 hover:border-pink-500/40 hover:shadow-pink-500/10",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    label: "Creative"
  },
  { 
    icon: BrainCircuit, 
    t: "AI Integration", 
    d: "LLMs, computer vision, and intelligent automation built into your stack.",
    color: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/20 hover:border-rose-500/40 hover:shadow-rose-500/10",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    label: "Cognitive"
  },
  { 
    icon: Wrench, 
    t: "Maintenance & Support", 
    d: "Proactive monitoring, updates, and on-call engineering for production.",
    color: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/20 hover:border-amber-500/40 hover:shadow-amber-500/10",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    label: "Reliability"
  },
  { 
    icon: Rocket, 
    t: "Startup MVP Development", 
    d: "Idea-to-MVP in weeks with a launch-ready product and feedback loop.",
    color: "from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    label: "Launch"
  },
  { 
    icon: Cloud, 
    t: "Cloud Deployment", 
    d: "CI/CD, edge networks, and zero-downtime deployments on modern cloud.",
    color: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    label: "Cloud"
  },
  { 
    icon: Code2, 
    t: "Custom Software", 
    d: "Bespoke enterprise systems tailored to your operations and growth.",
    color: "from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    label: "Tailored"
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>Enterprise-grade <span className="text-gradient">engineering capabilities</span></>}
      description="From idea to production, our team ships modern, scalable, and intelligent software for startups and enterprises."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.t}
            className={`group relative overflow-hidden rounded-3xl border bg-secondary/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${s.color}`}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex justify-between items-start">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-105 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className={`rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${s.badgeColor}`}>
                  {s.label}
                </span>
              </div>
              
              <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {s.t}
              </h3>
              
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
