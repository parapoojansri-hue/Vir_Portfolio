import { Section } from "./Section";
import {
  Globe, Smartphone, Palette, BrainCircuit, Wrench, Rocket, Cloud, Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    t: "Website Development",
    d: "Performance-tuned, SEO-ready web platforms with modern frameworks.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "from-blue-500/12 via-blue-500/5 to-transparent",
    border: "border-blue-500/20 hover:border-blue-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    label: "Web",
  },
  {
    icon: Smartphone,
    t: "Mobile App Development",
    d: "Cross-platform mobile apps with native feel and offline capability.",
    gradient: "from-indigo-500 to-purple-600",
    bg: "from-indigo-500/12 via-indigo-500/5 to-transparent",
    border: "border-indigo-500/20 hover:border-indigo-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
    label: "Mobile",
  },
  {
    icon: Palette,
    t: "UI/UX Design",
    d: "Design systems and product experiences that convert and delight.",
    gradient: "from-pink-500 to-rose-600",
    bg: "from-pink-500/12 via-pink-500/5 to-transparent",
    border: "border-pink-500/20 hover:border-pink-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.2)]",
    badge: "bg-pink-500/15 text-pink-300 border-pink-500/25",
    label: "Creative",
  },
  {
    icon: BrainCircuit,
    t: "AI Integration",
    d: "LLMs, computer vision, and intelligent automation built into your stack.",
    gradient: "from-rose-500 to-red-600",
    bg: "from-rose-500/12 via-rose-500/5 to-transparent",
    border: "border-rose-500/20 hover:border-rose-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(244,63,94,0.2)]",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
    label: "Cognitive",
  },
  {
    icon: Wrench,
    t: "Maintenance & Support",
    d: "Proactive monitoring, updates, and on-call engineering for production.",
    gradient: "from-amber-500 to-yellow-600",
    bg: "from-amber-500/12 via-amber-500/5 to-transparent",
    border: "border-amber-500/20 hover:border-amber-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    label: "Reliability",
  },
  {
    icon: Rocket,
    t: "Digital Transformation",
    d: "Comprehensive strategies to modernize enterprise architecture and workflows.",
    gradient: "from-orange-500 to-amber-600",
    bg: "from-orange-500/12 via-orange-500/5 to-transparent",
    border: "border-orange-500/20 hover:border-orange-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/25",
    label: "Transform",
  },
  {
    icon: Cloud,
    t: "Cloud Deployment",
    d: "CI/CD, edge networks, and zero-downtime deployments on modern cloud.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-500/12 via-emerald-500/5 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    label: "Cloud",
  },
  {
    icon: Code2,
    t: "Custom Software",
    d: "Bespoke enterprise systems tailored to your operations and growth.",
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-500/12 via-cyan-500/5 to-transparent",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    glow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    label: "Tailored",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services & Solutions"
      title={<>Enterprise technology <span className="text-gradient">consulting &amp; digital solutions</span></>}
      description="Empowering global businesses with next-generation digital transformation, AI integration, and robust cloud infrastructure."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.t}
            className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${s.bg} ${s.border} ${s.glow} p-6 transition-all duration-300 hover:-translate-y-1.5`}
          >
            {/* Decorative orb */}
            <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-all group-hover:opacity-25`} />

            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                {/* Icon box */}
                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                {/* Badge */}
                <span className={`rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${s.badge}`}>
                  {s.label}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-foreground leading-tight group-hover:text-white transition-colors">
                {s.t}
              </h3>
              <div className={`mt-1.5 h-0.5 w-6 rounded-full bg-gradient-to-r ${s.gradient} opacity-60`} />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.d}</p>

              <div className="mt-5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
