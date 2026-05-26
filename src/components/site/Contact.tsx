import { useState } from "react";
import { Section } from "./Section";
import { Phone, Github, Linkedin, MapPin, MessageCircle, Mail } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      budget: formData.get("budget") as string,
      details: formData.get("details") as string,
      createdAt: new Date().toISOString(),
    };

    try {
      const { addDoc, collection } = await import("firebase/firestore");
      const { db } = await import("@/lib/firebase");
      await addDoc(collection(db, "contacts"), data);
      setSent(true);
      form.reset();
    } catch (err: any) {
      console.error("Error saving contact message to Firestore:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let&apos;s build something <span className="text-gradient">extraordinary</span></>}
      description="Tell us about your project. Our team will reach out within 24 hours."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">

          {/* Poojan Sri Para — cyan theme */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl transition-all group-hover:bg-cyan-500/30" />
            <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="relative flex items-center gap-4 mb-5">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/30 blur-lg" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 font-display text-base font-bold text-white shadow-lg">PS</div>
              </div>
              <div>
                <div className="font-display text-base font-bold text-foreground">Poojan Sri Para</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">Co-Founder, Investor & Vice President</div>
              </div>
            </div>
            <div className="relative grid gap-2.5">
              <ContactLink Icon={Phone} label="Phone" value="+91 8309529483" href="tel:+918309529483" accent="cyan" />
              <ContactLink Icon={Mail} label="Email" value="poojan@virtechnologies.in" href="mailto:poojan@virtechnologies.in" accent="cyan" />
              <ContactLink Icon={Github} label="GitHub" value="parapoojansri-hue" href="https://github.com/parapoojansri-hue" accent="cyan" />
              <ContactLink Icon={Linkedin} label="LinkedIn" value="poojan-sri-para" href="https://www.linkedin.com/in/poojan-sri-para-9b84a7399" accent="cyan" />
            </div>
          </div>

          {/* Arvind Swamy — purple theme */}
          <div className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition-all group-hover:bg-purple-500/30" />
            <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="relative flex items-center gap-4 mb-5">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-purple-500/30 blur-lg" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 font-display text-base font-bold text-white shadow-lg">AS</div>
              </div>
              <div>
                <div className="font-display text-base font-bold text-foreground">Arvind Swamy</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-semibold">CEO & Founder</div>
              </div>
            </div>
            <div className="relative grid gap-2.5">
              <ContactLink Icon={Phone} label="Phone" value="+91 8522855282" href="tel:+918522855282" accent="purple" />
              <ContactLink Icon={Mail} label="Email" value="ceo@virtechnologies.in" href="mailto:ceo@virtechnologies.in" accent="purple" />
              <ContactLink Icon={Github} label="GitHub" value="iarvindswamy" href="https://github.com/iarvindswamy" accent="purple" />
              <ContactLink Icon={Linkedin} label="LinkedIn" value="iarvindswamy" href="https://www.linkedin.com/in/iarvindswamy" accent="purple" />
            </div>
          </div>

          {/* Gade Pavan Kumar — emerald theme */}
          <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-500/30" />
            <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="relative flex items-center gap-4 mb-5">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/30 blur-lg" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 font-display text-base font-bold text-white shadow-lg">PK</div>
              </div>
              <div>
                <div className="font-display text-base font-bold text-foreground">Gade Pavan Kumar</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">CMO</div>
              </div>
            </div>
            <div className="relative grid gap-2.5">
              <ContactLink Icon={Phone} label="Phone" value="+91 8522927443" href="tel:+918522927443" accent="emerald" />
              <ContactLink Icon={Mail} label="Email" value="cmo@virtechnologies.in" href="mailto:cmo@virtechnologies.in" accent="emerald" />
              <ContactLink Icon={Github} label="GitHub" value="pavankumargade09" href="https://github.com/pavankumargade09" accent="emerald" />
              <ContactLink Icon={Linkedin} label="LinkedIn" value="pavankumargade09" href="https://www.linkedin.com/in/pavankumargade09/" accent="emerald" />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl glass p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            <Field label="Company" name="company" placeholder="Acme Inc." />
            <Field label="Budget" name="budget" placeholder="$5k – $25k" />
          </div>
          <div className="mt-4">
            <label className="block text-[10px] uppercase tracking-widest text-muted-foreground">Project Details</label>
            <textarea
              name="details"
              required
              rows={5}
              placeholder="Tell us about your goals, timeline, and current stack…"
              className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-cyan hover:scale-[1.01] disabled:opacity-50"
          >
            {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
            {!loading && !sent && <span className="transition-transform group-hover:translate-x-1">→</span>}
          </button>
          {error && (
            <p className="mt-4 text-xs text-red-500 text-center font-medium">
              {error}
            </p>
          )}
        </form>
      </div>

      <a
        href="https://wa.me/918522855282"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary shadow-glow transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function ContactLink({ Icon, label, value, href, accent = "cyan" }: { Icon: any; label: string; value: string; href: string; accent?: "cyan" | "purple" | "emerald" }) {
  const iconBg = {
    cyan: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    emerald: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  }[accent];
  const hoverText = {
    cyan: "group-hover:text-cyan-400",
    purple: "group-hover:text-purple-400",
    emerald: "group-hover:text-emerald-400",
  }[accent];
  const borderHover = {
    cyan: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
    purple: "hover:border-purple-500/30 hover:bg-purple-500/5",
    emerald: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
  }[accent];

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`group flex items-center gap-3.5 rounded-xl border border-border/40 bg-secondary/20 p-3 transition-all duration-200 ${borderHover}`}>
      <div className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg ${iconBg} text-white shadow-md`}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className={`text-xs font-semibold text-foreground truncate transition-colors ${hoverText}`}>{value}</div>
      </div>
      <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
    </a>
  );
}
