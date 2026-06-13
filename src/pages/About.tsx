import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import { PageHero, CTABand, TrustBadges } from "../components/Shared";
import { stats } from "../lib/data";

export default function About() {
  return (
    <>
      <PageHero
        badge="About A.Z Hair Club"
        title={<>Restoring Hair, <span className="gold-text">Restoring Confidence</span></>}
        subtitle="A premium hair restoration brand dedicated to helping modern men look and feel their best."
        image="/images/about.jpg"
      />

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <img src="/images/about.jpg" alt="A.Z Hair Club premium clinic" className="aspect-[4/3] w-full rounded-3xl border border-gold/20 object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Our Story"
              center={false}
              title={<>The A.Z Hair Club <span className="gold-text">Difference</span></>}
              subtitle="A.Z Hair Club is dedicated to helping men regain confidence through modern hair restoration solutions. We specialize in natural-looking hair systems, wigs, hair patches and professional consultations."
            />
            <p className="mt-5 leading-relaxed text-neutral-400">
              Based in Faisalabad and trusted by thousands, we've built our reputation on craftsmanship, discretion and
              genuinely natural results. Every solution we create is tailored to the individual — because no two heads of
              hair are the same. From your first free consultation to lifelong maintenance, our specialists are with you
              at every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-neutral-950 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <div className="font-serif text-4xl font-bold text-gold md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-9">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="font-serif text-2xl font-semibold text-white">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  To empower every man facing hair loss with premium, natural-looking, non-surgical solutions that restore
                  not just their hair — but their confidence and quality of life.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-transparent p-9">
                <div className="mb-4 text-4xl">🌟</div>
                <h3 className="font-serif text-2xl font-semibold text-white">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  To be recognized as the most trusted and premium hair restoration brand in Pakistan — setting the
                  standard for quality, artistry and client care in modern hair solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Why Choose Us" title={<>Built On <span className="gold-text">Trust</span></>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💎", t: "Premium Quality", d: "Only the finest materials and expert craftsmanship." },
              { icon: "🤝", t: "Total Discretion", d: "Your privacy and confidence always come first." },
              { icon: "👨‍🔬", t: "Expert Team", d: "12+ years of specialist experience." },
              { icon: "❤️", t: "Client-First Care", d: "Personalized solutions and lifelong support." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                  <div className="mb-4 text-3xl">{c.icon}</div>
                  <h3 className="font-serif text-lg font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14"><TrustBadges /></div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
