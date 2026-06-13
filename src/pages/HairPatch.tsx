import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import ConsultForm from "../components/ConsultForm";
import { PageHero, CTABand } from "../components/Shared";

const benefits = [
  { icon: "🌿", t: "Natural Appearance", d: "Custom-matched hairline, color and density that's completely undetectable." },
  { icon: "🪶", t: "Comfortable & Lightweight", d: "Breathable bases you'll forget you're even wearing all day long." },
  { icon: "🔧", t: "Non-Surgical Solution", d: "No surgery, no pain, no scars — instant full coverage the same day." },
  { icon: "💪", t: "Active-Lifestyle Ready", d: "Shower, swim and work out with a secure, confident hold." },
  { icon: "🎨", t: "Fully Customizable", d: "Choose your style, length, curl and density to match your look." },
  { icon: "💰", t: "Affordable & Lasting", d: "A cost-effective solution that lasts with simple maintenance." },
];

const patchFaqs = [
  { q: "What is a hair patch?", a: "A hair patch (hair system) is a custom-made unit of natural-looking hair attached to the scalp area experiencing hair loss. It instantly restores a full, natural head of hair without surgery." },
  { q: "Is a hair patch noticeable?", a: "No. We hand-craft each patch to match your exact hair color, texture, density and natural hairline so it blends seamlessly and is undetectable even up close." },
  { q: "How is the hair patch attached?", a: "We use medical-grade tapes, bonding adhesives or clips depending on your lifestyle. All methods are safe, secure and comfortable." },
  { q: "How long does it last?", a: "With proper care and routine maintenance, a quality hair patch lasts 6–12 months. We offer maintenance plans to keep it fresh." },
  { q: "Can I style it like real hair?", a: "Absolutely. You can cut, comb, gel and style your hair patch exactly like your natural hair." },
];

export default function HairPatch() {
  return (
    <>
      <PageHero
        badge="Hair Patch in Faisalabad"
        title={<>Premium Hair Patch & <span className="gold-text">Hair System</span></>}
        subtitle="The fastest, safest and most natural-looking way to a full head of hair — without surgery."
        image="/images/patch.jpg"
      />

      {/* What is */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <img src="/images/patch.jpg" alt="Natural hair patch result" className="aspect-[4/5] w-full rounded-3xl border border-gold/20 object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Non-Surgical Hair Replacement"
              center={false}
              title={<>What Is A <span className="gold-text">Hair Patch?</span></>}
              subtitle="A hair patch — or hair system — is a custom-built, ultra-thin unit of premium human hair designed to perfectly match your natural hair. It's bonded to your scalp to instantly cover bald or thinning areas, giving you a complete, natural look in a single session."
            />
            <p className="mt-5 leading-relaxed text-neutral-400">
              Unlike surgery, there's zero pain, zero downtime and zero waiting. You walk in experiencing hair loss and
              walk out with a full, confident head of hair the very same day. It's the preferred choice for modern men
              who want immediate, undetectable results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="The Benefits" title={<>Why Choose A <span className="gold-text">Hair Patch</span></>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-gold/40">
                  <div className="mb-4 text-3xl">{b.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-white">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before after */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle eyebrow="Real Results" title={<>Before & <span className="gold-text">After</span></>} subtitle="Drag the slider to see the transformation." />
          <div className="mt-12">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* FAQ + form */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="FAQ" center={false} title={<>Hair Patch <span className="gold-text">Questions</span></>} />
            <div className="mt-10"><FAQ items={patchFaqs} /></div>
          </div>
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <ConsultForm title="Book Your Hair Patch Consultation Today" />
          </Reveal>
        </div>
      </section>

      <CTABand title="Book Your Hair Patch Consultation Today" primary="Book On WhatsApp" />
    </>
  );
}
