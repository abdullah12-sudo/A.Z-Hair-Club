import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GoldButton } from "./ui";
import { whatsappLink } from "../lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/hair-patch", label: "Hair Patch" },
  { to: "/hair-wig", label: "Hair Wigs" },
  { to: "/hair-transplant", label: "Transplant" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/85 backdrop-blur-xl border-b border-gold/15 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold-dark to-gold-light font-serif text-lg font-bold text-black">
            AZ
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-wide text-white">A.Z Hair Club</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-gold">Premium Hair Restoration</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-neutral-200"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <GoldButton href={whatsappLink()} external className="px-5 py-2.5 text-xs">
            Book Free Consult
          </GoldButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-6 bg-gold transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gold transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[90vh] border-t border-gold/15" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? "bg-gold/10 text-gold" : "text-neutral-200 hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <GoldButton href={whatsappLink()} external className="mt-3">
            Book Free Consultation
          </GoldButton>
        </div>
      </div>
    </header>
  );
}
