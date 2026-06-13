import { useRef, useState } from "react";

export default function BeforeAfter({
  before = "/images/before1.jpg",
  after = "/images/after1.jpg",
}: {
  before?: string;
  after?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl border border-gold/20 shadow-2xl"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt="After hair restoration" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase text-black">
        After
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before hair restoration"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current?.offsetWidth || "100%", maxWidth: "none" }}
        />
        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase text-white">
          Before
        </div>
      </div>
      <div className="absolute inset-y-0 w-1 bg-gold" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-black text-gold shadow-lg">
          ⇄
        </div>
      </div>
    </div>
  );
}
