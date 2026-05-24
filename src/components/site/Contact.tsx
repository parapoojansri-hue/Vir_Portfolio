import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle } from "lucide-react";

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
        <div className="space-y-4 lg:col-span-2">
          {/* Poojan Sri Para */}
          <div className="rounded-3xl glass p-5 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-primary opacity-20 blur-xl" />
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Poojan Sri Para</div>
            <div className="grid gap-2">
              <ContactLink Icon={Mail} label="Email" value="parapoojansri@gmail.com" href="mailto:parapoojansri@gmail.com" />
              <ContactLink Icon={Phone} label="Phone" value="+91 8309529483" href="tel:+918309529483" />
              <ContactLink Icon={Github} label="GitHub" value="parapoojansri-hue" href="https://github.com/parapoojansri-hue" />
              <ContactLink Icon={Linkedin} label="LinkedIn" value="poojan-sri-para" href="https://www.linkedin.com/in/poojan-sri-para-9b84a7399" />
            </div>
          </div>

          {/* Arvind Swamy */}
          <div className="rounded-3xl glass p-5 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-primary opacity-20 blur-xl" />
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Arvind Swamy</div>
            <div className="grid gap-2">
              <ContactLink Icon={Mail} label="Email" value="arvindswamy@gmail.com" href="mailto:arvindswamy@gmail.com" />
              <ContactLink Icon={Phone} label="Phone" value="+91 8522855282" href="tel:+918522855282" />
              <ContactLink Icon={Github} label="GitHub" value="iarvindswamy" href="https://github.com/iarvindswamy" />
              <ContactLink Icon={Linkedin} label="LinkedIn" value="iarvindswamy" href="https://www.linkedin.com/in/iarvindswamy" />
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

function ContactLink({ Icon, label, value, href }: { Icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/50 p-3.5 transition-colors">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-xs font-semibold text-foreground">{value}</div>
      </div>
    </a>
  );
}
