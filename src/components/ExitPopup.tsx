import { useEffect, useState } from "react";
import { GoldButton } from "./ui";
import { whatsappLink } from "../lib/data";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("az_exit")) {
      setDismissed(true);
      return;
    }
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) setShow(true);
    };
    const timer = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem("az_exit")) setShow(true);
    }, 25000);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mouseout", onLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("az_exit", "1");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-neutral-900 to-black p-8 text-center shadow-[0_0_60px_rgba(201,162,75,0.25)]">
        <button
          onClick={close}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-gold"
        >
          ✕
        </button>
        <div className="mb-4 text-4xl">🎁</div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Wait — Don't Go!</span>
        <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
          Claim Your <span className="gold-text">FREE</span> Consultation
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          Book today and receive a complimentary hair assessment plus an exclusive discount on your first hair system.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <GoldButton href={whatsappLink("Hi! I'd like to claim my free consultation + discount.")} external>
            Claim On WhatsApp
          </GoldButton>
          <button onClick={close} className="text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-300">
            No thanks, I don't want my hair back
          </button>
        </div>
      </div>
    </div>
  );
}
