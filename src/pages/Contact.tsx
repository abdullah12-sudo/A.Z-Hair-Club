import { SectionTitle } from "../components/ui";
import Reveal from "../components/Reveal";
import ConsultForm from "../components/ConsultForm";
import { PageHero, CTABand } from "../components/Shared";
import { ADDRESS, EMAIL, PHONE, whatsappLink } from "../lib/data";

export default function Contact() {
  const info = [
    { icon: "📍", t: "Visit Us", v: ADDRESS, href: "https://maps.google.com/?q=Faisalabad" },
    { icon: "📞", t: "Call Us", v: PHONE, href: `tel:${PHONE}` },
    { icon: "💬", t: "WhatsApp", v: "Chat With Us Now", href: whatsappLink() },
    { icon: "✉️", t: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <>
      <PageHero
        badge="Get In Touch"
        title={<>Start Your <span className="gold-text">Transformation</span> Today</>}
        subtitle="Reach out for your free consultation. Our specialists are ready to help you get your hair — and confidence — back."
        image="/images/about.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <SectionTitle eyebrow="Contact Info" center={false} title={<>Let's <span className="gold-text">Connect</span></>} />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {info.map((c, i) => (
                  <Reveal key={c.t} delay={i * 70}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-gold/40 hover:-translate-y-1"
                    >
                      <span className="text-3xl">{c.icon}</span>
                      <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">{c.t}</span>
                      <span className="mt-1 text-sm text-neutral-300">{c.v}</span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h4 className="font-serif text-lg font-semibold text-white">⏰ Business Hours</h4>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                    <li className="flex justify-between"><span>Monday – Saturday</span><span className="text-neutral-200">11:00 AM – 9:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="text-neutral-200">By Appointment</span></li>
                  </ul>
                  <div className="mt-5 flex gap-3">
                    {["Facebook", "Instagram", "YouTube", "TikTok"].map((s) => (
                      <a key={s} href="#" className="flex h-9 items-center rounded-full border border-gold/30 px-3 text-xs text-gold transition-all hover:bg-gold hover:text-black">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={120}>
              <ConsultForm title="Send Us A Message" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-gold/20">
              <iframe
                title="A.Z Hair Club Location"
                src="https://www.google.com/maps?q=Faisalabad,Pakistan&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, filter: "grayscale(0.3) invert(0.9) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Your New Look Awaits" />
    </>
  );
}
