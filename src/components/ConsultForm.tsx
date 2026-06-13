import { useState } from "react";
import { GoldButton } from "./ui";
import { whatsappLink } from "../lib/data";

export default function ConsultForm({ title = "Book Your Free Consultation" }: { title?: string }) {
  const [data, setData] = useState({ name: "", phone: "", service: "Hair Patch / Hair System", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Consultation Request%0A----------------------%0AName: ${data.name}%0APhone: ${data.phone}%0AService: ${data.service}%0AMessage: ${data.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.05]";

  return (
    <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-neutral-900/80 to-black/80 p-7 backdrop-blur-xl md:p-9">
      <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">Fill the form and our specialist will reach out within hours.</p>

      {sent ? (
        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-6 text-center">
          <div className="text-3xl">✅</div>
          <p className="mt-2 font-medium text-white">Thank you! Redirecting you to WhatsApp…</p>
          <p className="mt-1 text-sm text-neutral-400">We'll confirm your free consultation shortly.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            required
            placeholder="Your Name"
            className={field}
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            required
            placeholder="Phone / WhatsApp Number"
            className={field}
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <select
            className={field}
            value={data.service}
            onChange={(e) => setData({ ...data, service: e.target.value })}
          >
            {[
              "Hair Patch / Hair System",
              "Non-Surgical Hair Replacement",
              "Hair Wig Services",
              "Hair Transplant Consultation",
              "Hair Fixing & Bonding",
              "Hair Maintenance",
            ].map((s) => (
              <option key={s} className="bg-neutral-900">
                {s}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Tell us about your hair goals (optional)"
            rows={3}
            className={field}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <GoldButton className="w-full">Send & Book On WhatsApp</GoldButton>
          <p className="text-center text-xs text-neutral-500">🔒 100% private & confidential. No spam.</p>
        </form>
      )}
    </div>
  );
}
