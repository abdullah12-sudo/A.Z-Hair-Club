import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import BeforeAfter from "../components/BeforeAfter";
import { PageHero, CTABand } from "../components/Shared";
import { testimonials } from "../lib/data";

const gallery = [
  { img: "/images/after1.jpg", t: "Full Crown Restoration", tag: "Hair System" },
  { img: "/images/patch.jpg", t: "Natural Hairline Design", tag: "Hair Patch" },
  { img: "/images/wig.jpg", t: "Custom Human Hair Wig", tag: "Hair Wig" },
  { img: "/images/hero.jpg", t: "Complete Transformation", tag: "Non-Surgical" },
  { img: "/images/transplant.jpg", t: "Density Enhancement", tag: "Consultation" },
  { img: "/images/before1.jpg", t: "Receding Hairline Fix", tag: "Hair Bonding" },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        badge="Real Client Results"
        title={<>Transformation <span className="gold-text">Gallery</span></>}
        subtitle="Real men. Real results. See the natural, life-changing transformations we create every day."
        image="/images/after1.jpg"
      />

      {/* Slider */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle eyebrow="Before & After" title={<>Slide To <span className="gold-text">Reveal</span></>} />
          <div className="mt-12"><BeforeAfter /></div>
        </div>
      </section>

      {/* Masonry */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Client Results" title={<>Success <span className="gold-text">Stories</span></>} subtitle="A glimpse of the premium results across all our services." />
          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                  <img src={g.img} alt={g.t} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 2 ? "aspect-[3/4]" : "aspect-square"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase text-black">{g.tag}</span>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-white">{g.t}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Hear From Them" title={<>Video <span className="gold-text">Testimonials</span></>} subtitle="Our clients share their journeys in their own words." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-neutral-800 to-black">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-2xl text-black transition-transform hover:scale-110">▶</div>
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">Client Story</span>
                  </div>
                  <div className="p-6">
                    <div className="text-gold">{"★".repeat(t.rating)}</div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">"{t.text.slice(0, 90)}…"</p>
                    <div className="mt-4 font-medium text-white">{t.name}</div>
                    <div className="text-xs text-neutral-400">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Your Transformation Is Next" />
    </>
  );
}
