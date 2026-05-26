import { Section } from "./Section";
import { Linkedin, Phone, Mail } from "lucide-react";

const team = [
  { name: "Poojan Sri Para", role: "Co-Founder, Investor & Vice President", initials: "PS", gradient: "from-amber-400 to-orange-500", border: "border-amber-500/25 hover:border-amber-400/50", bg: "from-amber-500/10 via-amber-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]", tag: "text-amber-300", socials: [{ type: "linkedin", href: "https://www.linkedin.com/in/poojan-sri-para-9b84a7399" }, { type: "phone", href: "tel:+918309529483" }, { type: "mail", href: "mailto:poojan@virtechnologies.in" }] },
  { name: "Arvind Swamy", role: "CEO & Founder", initials: "AS", gradient: "from-violet-400 to-purple-600", border: "border-violet-500/25 hover:border-violet-400/50", bg: "from-violet-500/10 via-violet-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]", tag: "text-violet-300", socials: [{ type: "linkedin", href: "https://www.linkedin.com/in/iarvindswamy" }, { type: "phone", href: "tel:+918522855282" }, { type: "mail", href: "mailto:ceo@virtechnologies.in" }] },
  { name: "Brahmaiah", role: "CTO", initials: "BR", gradient: "from-cyan-400 to-blue-600", border: "border-cyan-500/25 hover:border-cyan-400/50", bg: "from-cyan-500/10 via-cyan-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]", tag: "text-cyan-300", socials: [{ type: "mail", href: "mailto:cto@virtechnologies.in" }] },
  { name: "Raghu", role: "CFO", initials: "RG", gradient: "from-indigo-400 to-blue-600", border: "border-indigo-500/25 hover:border-indigo-400/50", bg: "from-indigo-500/10 via-indigo-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]", tag: "text-indigo-300", socials: [{ type: "mail", href: "mailto:cfo@virtechnologies.in" }] },
  { name: "Hareesh", role: "COO", initials: "HR", gradient: "from-pink-400 to-rose-600", border: "border-pink-500/25 hover:border-pink-400/50", bg: "from-pink-500/10 via-pink-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.2)]", tag: "text-pink-300", socials: [{ type: "mail", href: "mailto:coo@virtechnologies.in" }] },
  { name: "Gade Pavan Kumar", role: "CMO", initials: "PK", gradient: "from-emerald-400 to-teal-600", border: "border-emerald-500/25 hover:border-emerald-400/50", bg: "from-emerald-500/10 via-emerald-500/4 to-transparent", glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]", tag: "text-emerald-300", socials: [{ type: "linkedin", href: "https://www.linkedin.com/in/pavankumargade09/" }, { type: "phone", href: "tel:+918522927443" }, { type: "mail", href: "mailto:cmo@virtechnologies.in" }] },
];

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="Leadership & Team"
      title={<>The people <span className="text-gradient">behind VIR</span></>}
      description="A focused team of engineers, designers, and operators building the future of software."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div
            key={m.name}
            className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${m.bg} ${m.border} ${m.glow} p-7 transition-all duration-300 hover:-translate-y-1.5`}
          >
            {/* Decorative orb */}
            <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${m.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            <div className={`absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-gradient-to-br ${m.gradient} opacity-6 blur-xl`} />

            <div className="relative text-center">
              {/* Avatar */}
              <div className="relative mx-auto mb-5 h-20 w-20">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.gradient} opacity-30 blur-xl`} />
                <div className={`relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br ${m.gradient} font-display text-xl font-bold text-white shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                  {m.initials}
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
              <p className={`mt-1 text-xs font-medium ${m.tag}`}>{m.role}</p>

              {/* Divider */}
              <div className={`mx-auto mt-4 mb-4 h-px w-16 bg-gradient-to-r ${m.gradient} opacity-40`} />

              {/* Social links */}
              <div className="flex items-center justify-center gap-2.5">
                {m.socials.map((social) => {
                  let Icon = Phone;
                  if (social.type === "linkedin") Icon = Linkedin;
                  else if (social.type === "mail") Icon = Mail;
                  return (
                    <a
                      key={social.type}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group/btn grid h-9 w-9 place-items-center rounded-xl border bg-gradient-to-br ${m.gradient} border-transparent shadow-md text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
