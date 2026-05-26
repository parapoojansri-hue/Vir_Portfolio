import { Section } from "./Section";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AlgoSpark",
    tag: "Coding Platform",
    desc: "The ultimate coding platform for engineering students. Practice algorithmic problems, compete in contests, and excel in assessments — all in one place.",
    image: "https://poojan.pages.dev/images/proj_algospark.png",
    link: "https://algospark.in/",
    github: "https://github.com/parapoojansri-hue",
    tags: ["React", "Node.js", "MongoDB", "Competitive Programming"],
  },
  {
    name: "Farm2Buy",
    tag: "Marketplace",
    desc: "A full-stack e-commerce platform for fresh farm chicken orders. Features 24/7 delivery, worker login, admin panel, and live cart management.",
    image: "https://poojan.pages.dev/images/proj_farm2buy.png",
    link: "https://farm2buy.in/",
    tags: ["E-Commerce", "Firebase", "Payments", "Real-time"],
  },
  {
    name: "ACSE Portal",
    tag: "Department Hub",
    desc: "Central hub for certificate submissions and event management at Vignan's ACSE Department. Admins verify and manage records with full control.",
    image: "https://poojan.pages.dev/images/proj_acse.png",
    link: "https://acse.pages.dev/",
    tags: ["Cloudflare Pages", "Google Auth", "Admin Dashboard"],
  },
  {
    name: "V-Ride",
    tag: "Campus Mobility",
    desc: "A university ride-hailing platform built for Vignan campus. Features real-time driver availability, live map with Leaflet.js, and pickup selection.",
    image: "https://poojan.pages.dev/images/proj_vride.png",
    link: "https://v-ride.pages.dev/",
    tags: ["Leaflet.js", "Real-time Maps", "Cloudflare", "Ride-sharing"],
  },
  {
    name: "House Price Predictor",
    tag: "AI · ML",
    desc: "ML-powered web app predicting real estate prices and generating custom architectural blueprints showing full room layouts with dimensions.",
    image: "https://poojan.pages.dev/images/proj_house.png",
    link: "https://housepricepredictor-1mql.onrender.com",
    tags: ["Python", "ML / Linear Regression", "Flask", "Render"],
  },
  {
    name: "Automated Timetable",
    tag: "Enterprise",
    desc: "Enterprise-grade scheduling engine auto-resolving conflicts across 30 sections and 100+ faculty. Generates timetables exported as Excel sheets.",
    image: "https://poojan.pages.dev/images/proj_timetable.png",
    tags: ["Python", "Pandas", "Flask", "Excel Export", "Constraint Solver"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Case Studies & Solutions"
      title={<>Enterprise solutions, <span className="text-gradient">shipped to real users</span></>}
      description="A selection of enterprise platforms we have designed, built, and deployed."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-cyan"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-secondary/80 border border-border px-3 py-1 text-[10px] uppercase tracking-widest text-accent font-semibold">
                  {p.tag}
                </span>
                
                {/* Links */}
                <div className="flex gap-2">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Site"
                      className="rounded-lg glass p-2 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                </div>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-secondary/50 border border-border/50 px-2 py-0.5 text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
