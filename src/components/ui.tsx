import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function GoldButton({
  children,
  href,
  to,
  onClick,
  className = "",
  external = false,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}) {
  const cls = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-black shadow-[0_8px_30px_rgba(201,162,75,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(201,162,75,0.6)] hover:-translate-y-0.5 ${className}`;
  const inner = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </a>
    );
  return <button onClick={onClick} className={cls}>{inner}</button>;
}

export function OutlineButton({
  children,
  href,
  to,
  className = "",
  external = false,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-white/0 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gold/10 hover:border-gold ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  return <span className={cls}>{children}</span>;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2 className={`font-serif text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-black" : "text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-neutral-600" : "text-neutral-400"}`}>{subtitle}</p>
      )}
    </div>
  );
}
