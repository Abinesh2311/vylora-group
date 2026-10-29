import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroBg from "@/assets/hero-abstract.jpg";
const vyloraLogo = "/vylora_logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vylora Group — Where Needs Meet Excellence" },
      { name: "description", content: "Vylora Group is a premium multi-service brand delivering exceptional solutions across industries through one trusted network of professionals and partners." },
      { property: "og:title", content: "Vylora Group — Where Needs Meet Excellence" },
      { property: "og:description", content: "One brand. Unlimited possibilities. Premium solutions for every need." },
    ],
  }),
  component: Index,
});

const PHONE = "8754945996";
const PHONE_INTL = "918754945996";
const EMAIL = "vyloragroup.02@gmail.com";
const WHATSAPP = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent("Hello Vylora Group, I'd like to discuss a requirement.")}`;
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Inquiry — Vylora Group")}`;

function Monogram({ className = "" }: { className?: string }) {
  return (
    <img
    src={vyloraLogo}
    alt="Vylora Group"
    className={`h-10 w-auto object-contain ${className}`}
    />
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============ NAV ============ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-border/70" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center"><Monogram /></a>
          <nav className="hidden items-center gap-10 md:flex">
            {[
              ["Home", "#top"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[0.78rem] font-medium tracking-[0.14em] uppercase text-espresso/75 transition-colors hover:text-espresso"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-espresso/80 bg-espresso px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ivory transition-all hover:bg-transparent hover:text-espresso"
          >
            Get Started
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-px w-5 bg-espresso transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-espresso transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-ivory">
            <div className="flex flex-col px-6 py-6">
              {[["Home","#top"],["About","#about"],["Services","#services"],["Contact","#contact"]].map(([l,h]) => (
                <a key={l} href={h} onClick={() => setOpen(false)} className="py-3 text-[0.82rem] tracking-[0.14em] uppercase text-espresso/80">{l}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex justify-center rounded-full bg-espresso px-5 py-3 text-[0.72rem] tracking-[0.16em] uppercase text-ivory">Get Started</a>
            </div>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/55 to-ivory" />
        <div className="pointer-events-none absolute -left-32 top-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <span className="eyebrow inline-block" data-reveal>Premium Multi-Service Brand · Est. for Excellence</span>
          <h1 data-reveal className="mt-10 flex justify-center">
            <img
            src={vyloraLogo}
            alt="Vylora Group — Where Needs Meet Excellence"
            className="w-[clamp(18rem,46vw,34rem)] h-auto object-contain"
          />
          </h1>
          <p data-reveal className="mx-auto mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-espresso/65">
            We provide exceptional solutions for every need through our trusted network of
            professionals and partners. One brand. Unlimited possibilities.
          </p>
          <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">Get Started</a>
            <a href={MAILTO} className="btn-outline">Contact Us</a>
          </div>

          <div data-reveal className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[0.7rem] tracking-[0.22em] uppercase text-taupe">
            <span>Trusted Network</span>
            <span className="h-1 w-1 rounded-full bg-taupe/50" />
            <span>Premium Standards</span>
            <span className="h-1 w-1 rounded-full bg-taupe/50" />
            <span>Multi-Service Excellence</span>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="relative py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-sm border border-border bg-champagne/40 p-8">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-taupe/10 blur-3xl" />
              <div className="relative w-full rounded-sm bg-ivory/95 p-7 shadow-sm backdrop-blur">
                <p className="font-serif text-2xl leading-snug text-espresso">
                  &ldquo;Every requirement deserves excellence.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <span className="eyebrow" data-reveal>Who We Are</span>
            <h2 data-reveal className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-serif font-light leading-[1.1]">
              A premium brand built on <span className="italic text-taupe">trust, craft</span> and quiet excellence.
            </h2>
            <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-espresso/75" data-reveal>
              <p>
                Vylora Group is a premium multi-service company dedicated to delivering exceptional
                solutions across various industries. Through our trusted partner network, we provide
                customers with the services and expertise they need under one unified brand.
              </p>
              <p>
                We believe that every requirement deserves excellence, professionalism, and reliability.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border sm:grid-cols-3" data-reveal>
              {[
                ["Premium", "Multi-Service Brand"],
                ["Trusted", "Partner Network"],
                ["Unified", "Service Experience"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ivory p-6">
                  <p className="font-serif text-xl text-espresso">{k}</p>
                  <p className="mt-1 text-[0.78rem] tracking-[0.14em] uppercase text-taupe">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="relative bg-champagne/50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center" data-reveal>
            <span className="eyebrow">Our Compass</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.75rem)] font-serif font-light">
              Vision &amp; Mission
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                tag: "01 — Vision",
                title: "Our Vision",
                body: "To become the most trusted premium service brand by delivering excellence across every customer need.",
              },
              {
                tag: "02 — Mission",
                title: "Our Mission",
                body: "To provide reliable, high-quality solutions through a carefully selected network of professionals while maintaining the highest standards of service and customer satisfaction.",
              },
            ].map((c) => (
              <article
                key={c.title}
                data-reveal
                className="group relative overflow-hidden rounded-sm border border-border bg-ivory p-10 transition-all duration-500 hover:border-espresso/40 lg:p-12"
              >
                <span className="text-[0.7rem] tracking-[0.24em] uppercase text-gold">{c.tag}</span>
                <h3 className="mt-6 font-serif text-3xl text-espresso lg:text-4xl">{c.title}</h3>
                <div className="hairline my-6 w-16" />
                <p className="text-[0.98rem] leading-relaxed text-espresso/75">{c.body}</p>
                <span className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/8 blur-2xl transition-transform duration-700 group-hover:scale-125" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-serif font-light leading-[1.1]">
              Premium solutions, <span className="italic text-taupe">curated</span> across sectors.
            </h2>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-espresso/70">
              Vylora Group offers premium solutions across multiple sectors, connecting clients with
              the right expertise through one trusted brand.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", t: "Fitness & Personal Training", d: "Tailored training and wellness expertise from vetted professionals." },
              { n: "02", t: "Digital Services", d: "Strategic digital support and modern brand-driven solutions." },
              { n: "03", t: "Business Solutions", d: "Practical business assistance tailored to evolving operational needs." },
              { n: "04", t: "Home & Lifestyle Services", d: "Considered everyday services delivered with discretion and care." },
              { n: "05", t: "Professional Consulting", d: "Specialist guidance from carefully selected industry advisors." },
              { n: "06", t: "Event & Creative Services", d: "Refined creative direction and execution for distinctive moments." },
              { n: "07", t: "Customized Service Solutions", d: "Bespoke arrangements built around your specific requirement." },
            ].map((s) => (
              <article
                key={s.n}
                data-reveal
                className="group relative bg-ivory p-8 transition-colors duration-500 hover:bg-champagne/60 lg:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.7rem] tracking-[0.24em] uppercase text-taupe">{s.n}</span>
                  <span className="font-serif text-[0.95rem] italic text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">→</span>
                </div>
                <h3 className="mt-10 font-serif text-[1.5rem] leading-snug text-espresso">{s.t}</h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-espresso/65">{s.d}</p>
              </article>
            ))}
            <div className="relative flex items-center justify-center bg-espresso p-10 text-center">
              <div>
                <p className="font-serif text-[1.5rem] italic leading-snug text-ivory">
                  &ldquo;If you need it, Vylora delivers it.&rdquo;
                </p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-block text-[0.72rem] tracking-[0.22em] uppercase text-gold hover:text-ivory transition-colors">
                  Discuss your need →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="relative bg-espresso py-24 text-ivory lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-gold">Why Choose Vylora</span>
              <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] text-ivory">
                A standard you can feel in <span className="italic text-gold">every detail</span>.
              </h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory/70">
                Our promise is consistency — the same considered approach, the same quality of people,
                the same calm professionalism, every time.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
                {[
                  ["Excellence", "We maintain high standards in every service."],
                  ["Trusted Partners", "Our network consists of carefully selected professionals."],
                  ["Convenience", "One company for multiple solutions."],
                  ["Reliability", "Quality and customer satisfaction come first."],
                  ["Premium Experience", "Every service reflects the Vylora standard."],
                ].map(([t, d], i) => (
                  <li key={t} data-reveal className="group grid grid-cols-12 gap-4 py-7">
                    <span className="col-span-2 font-serif text-sm text-gold sm:col-span-1">0{i + 1}</span>
                    <h3 className="col-span-10 font-serif text-2xl text-ivory sm:col-span-4">{t}</h3>
                    <p className="col-span-12 text-[0.95rem] leading-relaxed text-ivory/70 sm:col-span-7">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER ============ */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-gradient-to-br from-champagne via-ivory to-stone">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <span className="text-[0.7rem] tracking-[0.28em] uppercase text-taupe">Founder</span>
                <div className="my-8 flex h-32 w-32 items-center justify-center rounded-full border border-espresso/15 bg-ivory shadow-[var(--shadow-soft)]">
                  <span className="font-serif text-5xl text-espresso">VR</span>
                </div>
                <p className="font-serif text-2xl text-espresso">Vinish R</p>
                <p className="mt-1 text-[0.74rem] tracking-[0.2em] uppercase text-taupe">Founder, Vylora Group</p>
                <div className="hairline mt-8 w-20" />
                <p className="mt-6 font-serif text-sm italic text-espresso/60">— Est. with intention</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <span className="eyebrow" data-reveal>Meet the Founder</span>
            <h2 data-reveal className="mt-5 text-[clamp(1.8rem,3.8vw,3rem)] font-serif font-light leading-[1.15]">
              Built on a simple <span className="italic text-taupe">vision</span>.
            </h2>
            <blockquote data-reveal className="mt-10 border-l-2 border-gold pl-8">
              <p className="font-serif text-[1.35rem] leading-relaxed text-espresso/85 lg:text-[1.55rem]">
                &ldquo;Vylora Group was founded with a simple vision — to create a brand where people
                can find exceptional solutions for their needs under one trusted name. Our commitment
                is to deliver excellence, reliability, and meaningful experiences through every
                service we provide.&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-serif text-lg text-espresso">Vinish R</p>
                <p className="text-[0.72rem] tracking-[0.2em] uppercase text-taupe">Founder · Vylora Group</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-champagne/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center" data-reveal>
            <span className="eyebrow">The Process</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-serif font-light">How It Works</h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-espresso/70">
              Three considered steps, from your first message to the moment we deliver.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Tell Us Your Requirement", d: "Share your need with our team." },
              { n: "02", t: "We Find The Right Solution", d: "Our experts identify the best professional or service." },
              { n: "03", t: "We Deliver Excellence", d: "You receive the service with complete support from Vylora." },
            ].map((s, i) => (
              <div key={s.n} data-reveal className="relative">
                <div className="rounded-sm border border-border bg-ivory p-10 transition-all duration-500 hover:-translate-y-1 hover:border-espresso/30 hover:shadow-[var(--shadow-elevated)]">
                  <span className="font-serif text-5xl font-light text-gold">{s.n}</span>
                  <div className="hairline my-6 w-12" />
                  <h3 className="font-serif text-xl text-espresso">{s.t}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-espresso/65">{s.d}</p>
                </div>
                {i < 2 && (
                  <div aria-hidden className="hidden md:block absolute top-1/2 -right-4 z-10 text-taupe/60">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M0 6h22m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section id="contact" className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow">Begin</span>
              <h2 className="mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] font-serif font-light leading-[1.05]">
                Let Vylora handle your <span className="italic text-taupe">next requirement</span>.
              </h2>
              <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-espresso/70">
                Share your requirement and our team will guide you to the right solution — calmly,
                professionally, and with the standard you expect from Vylora.
              </p>

              <div className="mt-12 space-y-4">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-sm border border-border bg-ivory p-5 transition-all hover:border-espresso/40 hover:bg-champagne/40">
                  <div>
                    <p className="text-[0.7rem] tracking-[0.22em] uppercase text-taupe">WhatsApp</p>
                    <p className="mt-1 font-serif text-lg text-espresso">Chat with our team</p>
                  </div>
                  <span className="font-serif text-xl text-gold transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href={MAILTO} className="group flex items-center justify-between rounded-sm border border-border bg-ivory p-5 transition-all hover:border-espresso/40 hover:bg-champagne/40">
                  <div>
                    <p className="text-[0.7rem] tracking-[0.22em] uppercase text-taupe">Email</p>
                    <p className="mt-1 font-serif text-lg text-espresso break-all">{EMAIL}</p>
                  </div>
                  <span className="font-serif text-xl text-gold transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href={`tel:+91${PHONE}`} className="group flex items-center justify-between rounded-sm border border-border bg-ivory p-5 transition-all hover:border-espresso/40 hover:bg-champagne/40">
                  <div>
                    <p className="text-[0.7rem] tracking-[0.22em] uppercase text-taupe">Call</p>
                    <p className="mt-1 font-serif text-lg text-espresso">+91 {PHONE}</p>
                  </div>
                  <span className="font-serif text-xl text-gold transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border bg-champagne/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-serif text-3xl tracking-tight text-espresso">VYLORA GROUP</p>
              <p className="mt-3 font-serif italic text-espresso/65">Where Needs Meet Excellence.</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-taupe">Navigate</p>
              <ul className="mt-5 space-y-2 text-[0.92rem] text-espresso/75">
                <li><a href="#top" className="hover:text-espresso">Home</a></li>
                <li><a href="#about" className="hover:text-espresso">About</a></li>
                <li><a href="#services" className="hover:text-espresso">Services</a></li>
                <li><a href="#contact" className="hover:text-espresso">Contact</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-taupe">Contact</p>
              <ul className="mt-5 space-y-2 text-[0.92rem] text-espresso/75">
                <li><a href={MAILTO} className="hover:text-espresso break-all">{EMAIL}</a></li>
                <li><a href={`tel:+91${PHONE}`} className="hover:text-espresso">+91 {PHONE}</a></li>
              </ul>
            </div>
          </div>
          <div className="hairline my-12" />
          <div className="flex flex-col items-start justify-between gap-3 text-[0.78rem] text-espresso/55 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Vylora Group. All rights reserved.</p>
            <p className="tracking-[0.18em] uppercase text-[0.7rem]">Crafted with intention</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const phone = String(fd.get("phone") || "").trim().slice(0, 30);
    const email = String(fd.get("email") || "").trim().slice(0, 120);
    const service = String(fd.get("service") || "").trim().slice(0, 80);
    const message = String(fd.get("message") || "").trim().slice(0, 1000);
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry from ${name || "Website"}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[0.95rem] text-espresso placeholder:text-taupe/70 focus:border-espresso focus:outline-none focus:ring-0 transition-colors";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-border bg-ivory p-8 shadow-[var(--shadow-soft)] lg:p-12"
    >
      <p className="eyebrow">Inquiry</p>
      <h3 className="mt-3 font-serif text-2xl text-espresso lg:text-3xl">Tell us what you need.</h3>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-espresso/65">
        Share your requirement and our team will respond personally.
      </p>

      <div className="mt-10 grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-taupe">Full Name</span>
          <input name="name" required maxLength={100} className={input} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-taupe">Phone</span>
          <input name="phone" required maxLength={30} className={input} placeholder="Your number" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-taupe">Email</span>
          <input type="email" name="email" required maxLength={120} className={input} placeholder="you@email.com" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-taupe">Service Needed</span>
          <select name="service" className={input + " appearance-none"} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Fitness & Personal Training</option>
            <option>Digital Services</option>
            <option>Business Solutions</option>
            <option>Home & Lifestyle Services</option>
            <option>Professional Consulting</option>
            <option>Event & Creative Services</option>
            <option>Customized Service Solutions</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-taupe">Message</span>
          <textarea name="message" rows={4} maxLength={1000} className={input + " resize-none"} placeholder="A short note about your requirement" />
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.78rem] text-espresso/55">We respond within one business day.</p>
        <button type="submit" className="btn-primary">{sent ? "Sent ✓" : "Send Inquiry"}</button>
      </div>
    </form>
  );
}
