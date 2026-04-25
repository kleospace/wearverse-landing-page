import { useReveal } from "@/hooks/use-reveal";
import f1 from "@/assets/fashion-1.jpg";
import f2 from "@/assets/fashion-2.jpg";
import f3 from "@/assets/fashion-3.jpg";
import f4 from "@/assets/fashion-4.jpg";
import f5 from "@/assets/fashion-5.jpg";
import f6 from "@/assets/fashion-6.jpg";

const tiles = [
  { img: f1, tag: "OUTERWEAR", code: "WV-014" },
  { img: f6, tag: "TEXTURE", code: "WV-021" },
  { img: f3, tag: "DETAIL", code: "WV-007" },
  { img: f2, tag: "FLAT LAY", code: "WV-033" },
  { img: f5, tag: "ARCHIVE", code: "WV-009" },
  { img: f4, tag: "FIELD", code: "WV-042" },
];

export function WardrobeGrid() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-ink text-cream py-24 md:py-36 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/60">
              [INDEX] · YOUR CLOSET, INDEXED
            </div>
            <h2 className="mt-6 font-display text-huge">
              EVERY PIECE.<br />
              <span className="text-blood">ACCOUNTED FOR.</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-3 gap-8 md:gap-12 font-mono text-xs uppercase">
            <div>
              <div className="font-display text-4xl">247</div>
              <div className="opacity-60 mt-2">items indexed</div>
            </div>
            <div>
              <div className="font-display text-4xl">8</div>
              <div className="opacity-60 mt-2">categories</div>
            </div>
            <div>
              <div className="font-display text-4xl text-blood">€11k</div>
              <div className="opacity-60 mt-2">closet value</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {tiles.map((t, i) => (
            <div
              key={t.code}
              className={`reveal relative overflow-hidden group ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[3/4]"
              }`}
            >
              <img
                src={t.img}
                alt={t.tag}
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-cream text-ink px-2 py-1">
                {t.code}
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                {t.tag}
              </div>
            </div>
          ))}
        </div>

        {/* marquee */}
        <div className="mt-16 md:mt-24 -mx-5 md:-mx-10 overflow-hidden border-y border-cream/15 py-6">
          <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-4xl md:text-6xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {["WEAR LESS", "·", "MEAN MORE", "·", "OWN BETTER", "·", "WASTE NOTHING", "·"].map(
                  (w, j) => (
                    <span key={`${k}-${j}`} className={j % 2 === 1 ? "text-blood" : ""}>
                      {w}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
