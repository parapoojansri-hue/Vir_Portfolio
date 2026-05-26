import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-black text-zinc-300">
      {/* Sleek top white glowing border */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-100" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="VIR Technologies Logo" className="h-11 w-11 rounded-xl object-cover border border-white/10 shadow-glow" />
              <div>
                <div className="font-display text-base font-bold text-white">VIR Technologies</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Engineering the Future</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-zinc-400 leading-relaxed">
              A next-generation software startup delivering AI-powered, cloud-ready, full-stack solutions for startups and enterprises.
            </p>
            <div className="mt-4 text-xs font-medium text-zinc-400 flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-white/70" />
              <a href="mailto:ceo@virtechnologies.in" className="hover:text-white transition-colors">
                ceo@virtechnologies.in
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 block mb-2">Connect With Us</span>
                <div className="flex gap-1.5">
                  {[
                    { Icon: Linkedin, href: "https://linkedin.com/company/vir-technologies" },
                    { Icon: Github, href: "https://github.com/vir-technologies" },
                    { Icon: Mail, href: "mailto:ceo@virtechnologies.in" },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-colors hover:text-white hover:bg-white/10">
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <FooterCol title="Navigate" links={[
            { l: "About", h: "#about" }, { l: "Services", h: "#services" },
            { l: "Case Studies", h: "#projects" }, { l: "Team", h: "#team" },
            { l: "Contact", h: "#contact" },
          ]} />
          <FooterCol title="Services" links={[
            { l: "Web Development" }, { l: "Mobile Apps" },
            { l: "AI Integration" }, { l: "Cloud Deployment" },
            { l: "Startup MVP" },
          ]} />
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} VIR Technologies. All rights reserved.</div>
          <div>Built by <span className="text-white font-semibold">VIR Technologies</span></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h?: string }[] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((x) => (
          <li key={x.l}>
            <a href={x.h ?? "#"} className="text-zinc-400 transition-colors hover:text-white">{x.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
