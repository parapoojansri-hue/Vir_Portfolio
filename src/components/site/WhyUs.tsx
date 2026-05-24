import { Section } from "./Section";
import { Zap, Layers, Sparkles, ShieldCheck, Cpu, Users } from "lucide-react";

const items = [
  { icon: Zap, t: "Fast Delivery", d: "Ship MVPs in weeks, not quarters." },
  { icon: Layers, t: "Scalable Architecture", d: "Built to grow from 10 to 10M users." },
  { icon: Sparkles, t: "Modern UI/UX", d: "Design systems that feel premium." },
  { icon: Cpu, t: "AI Expertise", d: "LLMs, ML, and intelligent automation." },
  { icon: ShieldCheck, t: "Cloud-Ready", d: "Secure, observable, production-grade." },
  { icon: Users, t: "Dedicated Team", d: "Engineers who care about your outcome." },
];

const metrics = [
  { v: "100%", l: "Client Satisfaction" },
  { v: "<2wks", l: "Avg. MVP Timeline" },
  { v: "24/7", l: "Engineering Support" },
  { v: "10+", l: "Live Deployments" },
];

export function WhyUs() {
  return (
    <Section
      eyebrow="Why Choose Us"
      title={<>Trusted to build <span className="text-gradient">mission-critical software</span></>}
      description="A startup mindset backed by enterprise-grade engineering discipline."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl glass glass-hover p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{i.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl glass p-6 sm:grid-cols-4 sm:p-8">
        {metrics.map((m) => (
          <div key={m.l} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">{m.v}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{m.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
