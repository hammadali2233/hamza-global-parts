import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Globe2, Search, PackageCheck, Truck, ShieldCheck, Clock, Wrench, Mail, Phone, MapPin, ArrowRight, CheckCircle2, MessageCircle, BadgeCheck, FileCheck2, Award } from "lucide-react";

const BUSINESS_EMAIL = "hamzaautos.isbpk@gmail.com";
const BUSINESS_PHONE_DISPLAY = "+971 56 171 8762";
const BUSINESS_WHATSAPP = "971561718762"; // E.164 without +
const BUSINESS_ADDRESS = "Basement 2C, Adeel Plaza, Fazal-e-Haq Road, Blue Area, Islamabad, Pakistan, 44000";

import logoAsset from "@/assets/hamza-autos-logo.svg.asset.json";
import heroEngine from "@/assets/hero-engine.jpg";
import globalShipping from "@/assets/global-shipping.jpg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamza Autos — 100% Genuine Imported Auto Parts in Pakistan" },
      { name: "description", content: "Hamza Autos imports 100% original, genuine OEM automotive parts from anywhere in the world on customer demand and delivers them to your doorstep in Pakistan." },
      { property: "og:title", content: "Hamza Autos — 100% Original Auto Parts, Sourced Worldwide" },
      { property: "og:description", content: "We only deal in 100% genuine original parts. Order-based global sourcing, delivered across Pakistan." },
    ],
  }),
  component: HamzaAutosLanding,
});

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(25),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  vehicle: z.string().trim().min(2, "Tell us the vehicle make / model / year").max(120),
  part: z.string().trim().min(2, "Describe the part you need").max(200),
  details: z.string().trim().max(1000).optional().or(z.literal("")),
});

function HamzaAutosLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" theme="dark" />
      <Nav />
      <main>
        <Hero />
        <OriginalGuarantee />
        <Stats />
        <Process />
        <WhyUs />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- WHATSAPP FAB ---------- */
function WhatsAppFab() {
  const msg = encodeURIComponent("Hi Hamza Autos, I'd like to inquire about an auto part.");
  return (
    <a
      href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white font-semibold shadow-elegant transition-smooth hover:scale-105 hover:shadow-glow sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white text-neutral-900 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <img
  src="/logo.png"
  alt="Hamza Autos logo"
  className="h-10 w-auto sm:h-11 transition-smooth group-hover:scale-105"
/>
          <div className="leading-none">
            <div className="font-display text-xl font-bold tracking-wider text-neutral-900 sm:text-2xl">HAMZA AUTOS</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Global Parts Sourcing</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#guarantee" className="text-neutral-600 transition-smooth hover:text-neutral-900">Guarantee</a>
          <a href="#process" className="text-neutral-600 transition-smooth hover:text-neutral-900">Process</a>
          <a href="#why" className="text-neutral-600 transition-smooth hover:text-neutral-900">Why Us</a>
          <a href="#contact" className="text-neutral-600 transition-smooth hover:text-neutral-900">Contact</a>
        </nav>
        <Button asChild variant="default" size="sm" className="bg-gradient-primary text-primary-foreground font-semibold tracking-wide shadow-glow hover:opacity-95">
          <a href="#inquiry">Request a Part</a>
        </Button>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroEngine}
        alt="High-performance engine bay"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-lines opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-40">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
            <BadgeCheck className="h-3.5 w-3.5 text-primary-glow" />
            100% Genuine Original Parts
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            The part you can't find <br className="hidden sm:block" />
            <span className="text-primary-glow">we import it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hamza Autos is an order-based importer of rare and hard-to-find automotive parts.
            No warehouse, no inflated stock — we source the exact OEM or performance part you need
            from the global market and deliver it to your doorstep in Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold tracking-wide shadow-glow hover:opacity-95">
              <a href="#inquiry">
                Submit an Inquiry <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-surface/60 backdrop-blur hover:bg-surface">
              <a href="#process">How it works</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-glow" /> 100% Original</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-glow" /> Verified Suppliers</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-glow" /> Door-to-Door</div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <div className="relative rounded-2xl border border-border bg-surface/70 p-8 backdrop-blur-xl shadow-elegant">
            <img src={logoAsset.url} alt="" className="h-20 w-auto" aria-hidden />
            <p className="mt-6 font-display text-3xl leading-tight">
              "Tell us what you drive. <br />
              We'll find the part."
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat label="Countries" value="20+" />
              <Stat label="Parts Sourced" value="2,500+" />
              <Stat label="On-Time" value="98%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary-glow">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- ORIGINAL PARTS GUARANTEE ---------- */
function OriginalGuarantee() {
  const items = [
    { icon: BadgeCheck, title: "100% Genuine OEM", desc: "We deal exclusively in original manufacturer parts — no replicas, no copies, no aftermarket lookalikes." },
    { icon: FileCheck2, title: "Traceable Invoices", desc: "Every part ships with a verifiable supplier invoice and origin paperwork — full transparency from source to your hand." },
    { icon: Award, title: "Authenticity Promise", desc: "If a part isn't genuine OEM as quoted, we refund you in full. That's our written guarantee." },
  ];
  return (
    <section id="guarantee" className="relative border-y border-border bg-surface/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-glow">
            <BadgeCheck className="h-3.5 w-3.5" />
            Our Promise
          </div>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            We only deal in <span className="text-primary-glow">100% original parts.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No copies. No fakes. No "OEM-style" substitutes. Every part we source is genuine — direct from
            authorised dealers, OEM channels, and trusted international suppliers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-border bg-surface p-7 transition-smooth hover:border-primary/40 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/30">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-wide">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------- STATS BAR ---------- */
function Stats() {
  const items = [
    { label: "USA", note: "OEM & Performance" },
    { label: "Japan", note: "JDM Specialists" },
    { label: "Germany", note: "Euro Precision" },
    { label: "UAE", note: "Fast Transit" },
    { label: "UK", note: "Classic & Modern" },
    { label: "China", note: "Volume & Value" },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {items.map((i) => (
          <div key={i.label} className="text-center">
            <div className="font-display text-2xl tracking-wider">{i.label}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{i.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { n: "01", title: "Send Inquiry", desc: "Share your vehicle details and the part you need — part number, photo, or description." },
    { n: "02", title: "Quotation", desc: "We locate the part globally and send you a final landed price with delivery ETA." },
    { n: "03", title: "Confirm & Pay", desc: "Approve the quote and confirm with an advance. We place the order with the supplier." },
    { n: "04", title: "Import & Deliver", desc: "We handle shipping, customs, and door-step delivery anywhere in Pakistan." },
  ];
  return (
    <section id="process" className="relative overflow-hidden border-y border-border">
      <img src={globalShipping} alt="" aria-hidden width={1600} height={1000} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 -z-10 bg-background/70" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeader eyebrow="The process" title="From inquiry to your driveway." />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative bg-surface p-8">
              <div className="font-display text-5xl text-primary/70">{s.n}</div>
              <h3 className="mt-3 font-display text-xl tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const points = [
    "100% original, genuine OEM parts — never replicas or copies",
    "No inflated stock prices — you pay sourcing + landing, not warehouse margin",
    "Direct access to JDM, EuroSpec, and US-market parts unavailable in Pakistan",
    "Honest quotes with line-item breakdown: part, freight, duty, delivery",
    "We chase the part, you stay in the loop — WhatsApp updates at every step",
  ];
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeader eyebrow="Why Hamza Autos" title="A workshop owner's secret weapon." align="left" />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />
                <span className="text-base text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-10 bg-gradient-primary text-primary-foreground font-semibold tracking-wide shadow-glow">
            <a href="#inquiry">Get a Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/15 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            <Card big value="500+" label="Successful Imports" />
            <Card value="48h" label="Avg Quote Time" />
            <Card value="20+" label="Source Countries" />
            <Card big value="0" label="Stocked Parts — pure sourcing" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ value, label, big = false }: { value: string; label: string; big?: boolean }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 ${big ? "row-span-1" : ""}`}>
      <div className="font-display text-5xl text-primary-glow sm:text-6xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- INQUIRY ---------- */
function Inquiry() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      vehicle: String(fd.get("vehicle") ?? ""),
      part: String(fd.get("part") ?? ""),
      details: String(fd.get("details") ?? ""),
    };

    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        _subject: `New Parts Inquiry — ${parsed.data.name} (${parsed.data.vehicle})`,
        _template: "table",
        _captcha: "false",
        Name: parsed.data.name,
        Phone: parsed.data.phone,
        Email: parsed.data.email || "(not provided)",
        Vehicle: parsed.data.vehicle,
        "Part needed": parsed.data.part,
        Details: parsed.data.details || "(none)",
      };
      const res = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network error");
      toast.success("Inquiry sent! We'll reply to you by email shortly.");
      form.reset();
    } catch {
      toast.error("Couldn't send your inquiry. Please try again or email us at " + BUSINESS_EMAIL);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="inquiry" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Request a part" title="Tell us what you need." sub="The more detail you share, the tighter the quote. Part number or a clear photo is gold." />
        <form onSubmit={onSubmit} className="mt-12 rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-xl shadow-elegant sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" required placeholder="Hamza Autos" />
            <Field label="Phone / WhatsApp" name="phone" required placeholder="+92 300 0000000" type="tel" />
            <Field label="Email (optional)" name="email" placeholder="you@example.com" type="email" />
            <Field label="Vehicle (make / model / year)" name="vehicle" required placeholder="Toyota Land Cruiser 2018" />
            <div className="sm:col-span-2">
              <Field label="Part needed" name="part" required placeholder="Front right headlight assembly (OEM) — part no. 81110-60K10" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="details" className="mb-2 inline-block text-xs uppercase tracking-widest text-muted-foreground">Additional details</Label>
              <Textarea
                id="details"
                name="details"
                placeholder="VIN, photos in WhatsApp, preferred source country, budget range, urgency…"
                className="min-h-32 bg-background/60 border-border focus-visible:ring-primary"
                maxLength={1000}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">By submitting you agree to be contacted about your inquiry. We never share your details.</p>
            <Button type="submit" size="lg" disabled={submitting} className="bg-gradient-primary text-primary-foreground font-semibold tracking-wide shadow-glow hover:opacity-95">
              {submitting ? "Sending…" : <>Send Inquiry <ArrowRight className="ml-1 h-4 w-4" /></>}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="mb-2 inline-block text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-primary-glow">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="h-11 bg-background/60 border-border focus-visible:ring-primary"
      />
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/40 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        <ContactCard icon={Phone} title="Call / WhatsApp" lines={[BUSINESS_PHONE_DISPLAY, "Mon – Sat · 10am – 9pm PKT"]} href={`https://wa.me/${BUSINESS_WHATSAPP}`} />
        <ContactCard icon={Mail} title="Email" lines={[BUSINESS_EMAIL, "Quotes within 48 hours"]} href={`mailto:${BUSINESS_EMAIL}`} />
        <ContactCard icon={MapPin} title="Visit / Address" lines={[BUSINESS_ADDRESS]} href="https://maps.google.com/?q=Adeel+Plaza+Fazal-e-Haq+Road+Blue+Area+Islamabad" />
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines, href }: { icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl p-4 -m-4 transition-smooth hover:bg-surface/60">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow ring-1 ring-primary/30">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-xl tracking-wide">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground break-words">{l}</div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="" className="h-8 w-auto" aria-hidden />
          <div className="font-display text-lg tracking-wider">HAMZA AUTOS</div>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Hamza Autos. Global parts, delivered to Pakistan.</div>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionHeader({
  eyebrow, title, sub, align = "center",
}: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        <PackageCheck className="h-3 w-3 text-primary-glow" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}
