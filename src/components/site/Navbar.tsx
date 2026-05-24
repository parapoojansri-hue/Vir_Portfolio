import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? "glass shadow-card mx-4 lg:mx-auto" : ""
      }`} style={{ width: scrolled ? undefined : undefined }}>
        <a href="#top" className="flex items-center gap-3 py-2">
          <img src="/logo.jpg" alt="VIR Technologies Logo" className="h-10 w-10 rounded-xl object-cover shadow-glow" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">VIR</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technologies</span>
          </div>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-cyan"
          >
            Work With Us
            <span aria-hidden>→</span>
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden rounded-md p-2 text-foreground"
        >
          <div className="space-y-1.5">
            <div className={`h-0.5 w-5 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="mx-4 mt-2 rounded-2xl glass p-4 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground">
              Work With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
