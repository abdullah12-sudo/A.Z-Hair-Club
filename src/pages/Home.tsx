import { Link } from "react-router-dom";
import { GoldButton, OutlineButton, SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import ConsultForm from "../components/ConsultForm";
import { CTABand, TrustBadges } from "../components/Shared";
import { faqs, services, stats, steps, testimonials, whatsappLink } from "../lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="Confident man with full natural hair" className="h-full w-full object-cover object-top opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                ⭐ Best Hair Patch Center in Faisalabad
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                Get Your Hair Back,
                <br />
                Get Your <span className="gold-text">Confidence</span> Back
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-300">
                Natural-looking Hair Patches, Hair Systems & Hair Restoration Solutions designed for modern men.
                Non-surgical. Painless. Instant results.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <GoldButton href={whatsappLink()} external>Book Free Consultation</GoldButton>
                <OutlineButton href={whatsappLink()} external>
                  💬 WhatsApp Now
                </OutlineButton>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-12 grid max-w-lg grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-2xl font-bold text-gold md:text-3xl">{s.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-neutral-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float text-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-white/5 bg-neutral-950 py-8">
        <div className="mx-auto max-w-7xl px-5">
          <TrustBadges />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Why A.Z Hair Club"
            title={<>The Premium Choice For <span className="gold-text">Modern Men</span></>}
            subtitle="We combine artistry, premium materials and expert craftsmanship to deliver hair that looks and feels completely natural."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🎯", t: "Undetectable Results", d: "Custom-matched color, density & hairline make your hair system impossible to detect." },
              { icon: "⚡", t: "Instant Transformation", d: "Walk in with hair loss, walk out with a full head of hair — the very same day." },
              { icon: "🛡️", t: "Non-Surgical & Safe", d: "No surgery, no pain, no scars and no downtime. A risk-free solution." },
              { icon: "👨‍🔬", t: "Expert Specialists", d: "12+ years of experience crafting natural hair systems for thousands of men." },
              { icon: "💧", t: "Active Lifestyle Ready", d: "Swim, shower, sweat and exercise with total confidence and security." },
              { icon: "♻️", t: "Lifelong Maintenance", d: "Dedicated aftercare keeps your system fresh, clean and looking brand new." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all duration-300 hover:border-gold/40 hover:from-gold/[0.06]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-2xl transition-transform group-hover:scale-110">
                    {c.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Our Services"
            title={<>Complete Hair <span className="gold-text">Restoration</span> Solutions</>}
            subtitle="From hair patches to custom wigs and transplant guidance — everything you need under one premium roof."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(201,162,75,0.12)]">
                  <div className="mb-5 font-serif text-4xl text-gold">{s.icon}</div>
                  <h3 className="font-serif text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{s.short}</p>
                  <Link to={`/${s.slug === "hair-patch" || s.slug === "non-surgical" || s.slug === "hair-fixing" || s.slug === "maintenance" ? "hair-patch" : s.slug === "hair-wig" ? "hair-wig" : "hair-transplant"}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold transition-all group-hover:gap-3">
                    Learn More →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <BeforeAfter />
            </Reveal>
            <Reveal delay={150}>
              <SectionTitle
                eyebrow="Real Transformations"
                center={false}
                title={<>See The <span className="gold-text">Difference</span> For Yourself</>}
                subtitle="Drag the slider to reveal the dramatic, natural results our clients enjoy. No filters — just expert craftsmanship and premium hair systems."
              />
              <ul className="mt-6 space-y-3">
                {["Natural front hairline", "Full coverage & density", "Same-day results", "Completely undetectable"].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-neutral-300">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <GoldButton to="/gallery">View Full Gallery</GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="The Process"
            title={<>Your Hair Transformation <span className="gold-text">Journey</span></>}
            subtitle="A simple, comfortable and confidential 4-step process to your new look."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                  <div className="font-serif text-5xl font-bold text-gold/30">{s.n}</div>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Client Reviews"
            title={<>What Our <span className="gold-text">Clients</span> Say</>}
            subtitle="Thousands of men have rediscovered their confidence with A.Z Hair Club."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
                  <div className="text-gold">{"★".repeat(t.rating)}</div>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-200">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-dark to-gold-light font-semibold text-black">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{t.name}</div>
                      <div className="text-xs text-neutral-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + FORM */}
      <section className="relative bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                eyebrow="FAQ"
                center={false}
                title={<>Frequently Asked <span className="gold-text">Questions</span></>}
              />
              <div className="mt-10">
                <FAQ items={faqs} />
              </div>
            </div>
            <Reveal delay={150} className="lg:sticky lg:top-28 lg:self-start">
              <ConsultForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
