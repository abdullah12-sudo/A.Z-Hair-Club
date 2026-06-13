import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 60}>
          <div
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              open === i ? "border-gold/40 bg-gold/5" : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-white">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-400">{item.a}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
