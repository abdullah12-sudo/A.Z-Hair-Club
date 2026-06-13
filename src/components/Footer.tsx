import { Link } from "react-router-dom";
import { ADDRESS, EMAIL, PHONE, whatsappLink } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-gradient-to-b from-black to-neutral-950">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold-dark to-gold-light font-serif text-lg font-bold text-black">
                AZ
              </span>
              <span className="font-serif text-lg font-semibold text-white">A.Z Hair Club</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              The best hair patch & hair restoration center in Faisalabad. Helping modern men regain their hair and
              confidence with premium, natural-looking solutions.
            </p>
            <div className="mt-5 flex gap-3">
              {["f", "in", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-xs uppercase text-gold transition-all hover:bg-gold hover:text-black"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                ["Home", "/"],
                ["Hair Patch", "/hair-patch"],
                ["Hair Wig Services", "/hair-wig"],
                ["Hair Transplant", "/hair-transplant"],
                ["Gallery", "/gallery"],
                ["About Us", "/about"],
              ].map(([l, t]) => (
                <li key={t}>
                  <Link to={t} className="transition-colors hover:text-gold">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-white">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>Hair Patch & Hair System</li>
              <li>Non-Surgical Replacement</li>
              <li>Custom Hair Wigs</li>
              <li>Hair Fixing & Bonding</li>
              <li>Hair Maintenance</li>
              <li>Transplant Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex gap-3">
                <span className="text-gold">📍</span> {ADDRESS}
              </li>
              <li className="flex gap-3">
                <span className="text-gold">📞</span>
                <a href={`tel:${PHONE}`} className="hover:text-gold">{PHONE}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✉️</span>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">💬</span>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp Us</a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-neutral-500">Mon – Sat: 11:00 AM – 9:00 PM</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} A.Z Hair Club, Faisalabad. All rights reserved.</p>
          <p>Premium Hair Restoration · Hair Patch · Hair Systems · Non-Surgical Replacement</p>
        </div>
      </div>
    </footer>
  );
}
