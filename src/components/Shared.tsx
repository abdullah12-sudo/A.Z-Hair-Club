import type { ReactNode } from "react";
import { GoldButton, OutlineButton } from "./ui";
import Reveal from "./Reveal";
import { whatsappLink } from "../lib/data";

export function PageHero({
  title,
  subtitle,
  image,
  badge,
}: {
  title: ReactNode;
  subtitle: string;
  image: string;
  badge?: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <Reveal>
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {badge}
            </span>
          )}
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-300">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CTABand({
  title = "Ready To Transform Your Look?",
  subtitle = "Book your free, no-obligation consultation today and take the first step toward a confident new you.",
  primary = "Book Free Consultation",
}: {
  title?: string;
  subtitle?: string;
  primary?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 via-black to-gold-dark/20" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">{title}</h2>
        <p className="mt-4 text-neutral-300">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GoldButton href={whatsappLink()} external>{primary}</GoldButton>
          <OutlineButton to="/contact">Visit Our Center</OutlineButton>
        </div>
      </Reveal>
    </section>
  );
}

export function TrustBadges() {
  const badges = [
    { icon: "🏆", t: "Award-Winning Results" },
    { icon: "🤝", t: "100% Confidential" },
    { icon: "💎", t: "Premium Quality" },
    { icon: "⭐", t: "5000+ Happy Clients" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {badges.map((b) => (
        <div key={b.t} className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-neutral-200">
          <span>{b.icon}</span> {b.t}
        </div>
      ))}
    </div>
  );
}
