import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import ConsultForm from "../components/ConsultForm";
import FAQ from "../components/FAQ";
import { PageHero, CTABand } from "../components/Shared";

const compare = [
  ["Surgery Required", "No — completely non-surgical", "Yes — surgical procedure"],
  ["Results Timeline", "Instant — same day", "6–12 months to fully grow"],
  ["Pain & Recovery", "Painless, zero downtime", "Some discomfort & recovery"],
  ["Cost", "Lower, flexible", "Higher, one-time investment"],
  ["Coverage", "Full coverage instantly", "Depends on donor area"],
  ["Maintenance", "Routine servicing", "Minimal after healing"],
];

const transplantFaqs = [
  { q: "Am I a good candidate for a hair transplant?", a: "It depends on your donor hair density, extent of hair loss and goals. Our free assessment determines the best option for you — whether transplant or a non-surgical hair system." },
  { q: "Is a hair patch better than a transplant?", a: "Both have advantages. A hair patch offers instant, full results with no surgery, while a transplant uses your own growing hair over time. We give honest guidance based on your needs." },
  { q: "Does A.Z Hair Club perform transplants?", a: "We provide expert hair loss assessment, consultation and guidance, and connect you with trusted specialists when a transplant is the right choice." },
  { q: "How much does a consultation cost?", a: "Your initial hair loss assessment and consultation is completely free with no obligation." },
];

export default function HairTransplant() {
  return (
    <>
      <PageHero
        badge="Hair Restoration Services"
        title={<>Hair Transplant <span className="gold-text">Consultation</span></>}
        subtitle="Expert hair loss assessment and honest guidance to help you choose the right restoration path."
        image="/images/transplant.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Where To Start" title={<>Your Hair Loss <span className="gold-text">Assessment</span></>} subtitle="A thorough, honest evaluation is the foundation of the right solution." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🔍", t: "Hair Loss Assessment", d: "We analyze your scalp, density, hairline and the pattern and stage of your hair loss." },
              { icon: "🗣️", t: "Consultation Services", d: "A private, no-pressure discussion of your goals, lifestyle and budget." },
              { icon: "🧭", t: "Transplant Guidance", d: "Clear, honest advice on whether a transplant or hair system suits you best." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center transition-all hover:border-gold/40">
                  <div className="mb-4 text-4xl">{c.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="Make The Right Choice" title={<>Hair Patch vs. <span className="gold-text">Hair Transplant</span></>} subtitle="A clear comparison to help you decide what's best for you." />
          <Reveal className="mt-12 overflow-hidden rounded-3xl border border-gold/20">
            <div className="grid grid-cols-3 bg-gold/10 text-sm font-semibold text-white">
              <div className="p-4">Feature</div>
              <div className="p-4 text-gold">Hair Patch</div>
              <div className="p-4">Hair Transplant</div>
            </div>
            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                <div className="p-4 font-medium text-neutral-300">{row[0]}</div>
                <div className="p-4 text-neutral-200">{row[1]}</div>
                <div className="p-4 text-neutral-400">{row[2]}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="The Benefits" title={<>Why Start With A <span className="gold-text">Consultation</span></>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💯", t: "Honest Advice" },
              { icon: "🆓", t: "Free Assessment" },
              { icon: "🔒", t: "100% Private" },
              { icon: "⚕️", t: "Expert Specialists" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 70}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
                  <div className="mb-3 text-3xl">{b.icon}</div>
                  <h3 className="font-serif text-lg font-semibold text-white">{b.t}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="FAQ" center={false} title={<>Transplant <span className="gold-text">Questions</span></>} />
            <div className="mt-10"><FAQ items={transplantFaqs} /></div>
          </div>
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <ConsultForm title="Schedule Your Consultation" />
          </Reveal>
        </div>
      </section>

      <CTABand title="Schedule Your Consultation" primary="Book On WhatsApp" />
    </>
  );
}
