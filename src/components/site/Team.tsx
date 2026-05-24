import { Section } from "./Section";
import { Github, Linkedin, Mail } from "lucide-react";

const team = [
  { name: "President", role: "President & Founder", initials: "PR", socials: ["mail"] },
  { name: "Vice President", role: "Operations & Delivery", initials: "VP", socials: ["linkedin", "github", "mail"] },
  { name: "Lead Engineer", role: "Full-Stack & AI", initials: "LE", socials: ["linkedin", "github", "mail"] },
  { name: "Frontend Engineer", role: "UI/UX & Web", initials: "FE", socials: ["linkedin", "github", "mail"] },
  { name: "Backend Engineer", role: "APIs & Cloud", initials: "BE", socials: ["linkedin", "github", "mail"] },
  { name: "Client Manager", role: "Partnerships", initials: "CM", socials: ["linkedin", "github", "mail"] },
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
          <div key={m.name} className="group rounded-3xl glass glass-hover p-8 text-center">
            <div className="relative mx-auto h-24 w-24">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-primary font-display text-2xl font-bold text-primary-foreground shadow-glow">
                {m.initials}
              </div>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              {m.socials.map((social) => {
                let Icon;
                if (social === "linkedin") Icon = Linkedin;
                else if (social === "github") Icon = Github;
                else if (social === "mail") Icon = Mail;
                if (!Icon) return null;
                return (
                  <span key={social} className="rounded-lg glass p-2 text-muted-foreground transition-colors hover:text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
