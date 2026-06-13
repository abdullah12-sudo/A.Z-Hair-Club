import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import ConsultForm from "../components/ConsultForm";
import FAQ from "../components/FAQ";
import { PageHero, CTABand } from "../components/Shared";

const wigServices = [
  { icon: "✂️", t: "Custom Hair Wigs", d: "Bespoke wigs crafted to your exact head shape, size, color and style preferences." },
  { icon: "💇", t: "Human Hair Wigs", d: "100% premium human hair for the most realistic look, feel and styling versatility." },
  { icon: "📐", t: "Natural Hairline Design", d: "Hand-tied front hairlines that look like hair growing naturally from your scalp." },
  { icon: "🎨", t: "Styling Options", d: "Cut, color, curl or straighten — style your wig exactly how you want it." },
  { icon: "🧴", t: "Maintenance Services", d: "Professional cleaning, conditioning and refitting to keep your wig pristine." },
  { icon: "🔒", t: "Secure Fitting", d: "Comfortable, secure attachment methods for all-day confidence." },
];

const wigFaqs = [
  { q: "What's the difference between human hair and synthetic wigs?", a: "Human hair wigs offer the most natural look and full styling freedom, while synthetic wigs hold their style longer and are lower maintenance. We help you choose the best fit." },
  { q: "Can a wig look completely natural?", a: "Yes. Our hand-tied, custom-designed hairlines and premium human hair create a completely natural, undetectable appearance." },
  { q: "Do you offer custom-made wigs?", a: "Absolutely. We create fully custom wigs measured and styled to your exact specifications for a perfect fit." },
  { q: "How do I maintain my wig?", a: "We provide complete maintenance services including washing, conditioning, restyling and refitting to extend its life and keep it looking new." },
];

export default function HairWig() {
  return (
    <>
      <PageHero
        badge="Hair Wig Services in Faisalabad"
        title={<>Premium Custom <span className="gold-text">Hair Wigs</span></>}
        subtitle="Luxurious human-hair wigs with natural hairlines, custom-designed and styled just for you."
        image="/images/wig.jpg"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <img src="/images/wig.jpg" alt="Premium custom hair wig" className="aspect-square w-full rounded-3xl border border-gold/20 object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Luxury Hair Wigs"
              center={false}
              title={<>The Art Of The <span className="gold-text">Perfect Wig</span></>}
              subtitle="Our custom hair wigs are crafted by skilled artisans using premium human hair and hand-tied hairlines. Every wig is built around your unique head shape, hair color and style to deliver a flawless, natural result."
            />
            <p className="mt-5 leading-relaxed text-neutral-400">
              Whether you want a complete transformation or a subtle, natural look, our wig specialists guide you through
              every step — from measurement and design to styling and ongoing maintenance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="What We Offer" title={<>Complete Wig <span className="gold-text">Services</span></>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wigServices.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-gold/40 hover:-translate-y-1">
                  <div className="mb-4 text-3xl">{s.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="FAQ" center={false} title={<>Wig <span className="gold-text">Questions</span></>} />
            <div className="mt-10"><FAQ items={wigFaqs} /></div>
          </div>
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <ConsultForm title="Find Your Perfect Hair Solution" />
          </Reveal>
        </div>
      </section>

      <CTABand title="Find Your Perfect Hair Solution" primary="Book On WhatsApp" />
    </>
  );
}
