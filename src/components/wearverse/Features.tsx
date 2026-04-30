import { useReveal } from "@/hooks/use-reveal";
import f1 from "@/assets/fashion-2.jpg";
import f2 from "@/assets/fashion-1.jpg";

type Feat = {
  num: string;
  name: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  reverse?: boolean;
  bg: "cream" | "ink";
};

const features: Feat[] = [
  {
    num: "01",
    name: "The Cataloguer",
    title: "Snap a photo. We do the rest.",
    body: "Point your camera at any garment. Our vision model identifies category, dominant colour, material composition, silhouette and styling family in under a second.",
    bullets: ["Auto-tag in 0.8s", "Material recognition", "Color extraction", "Silhouette mapping"],
    img: f1,
    bg: "cream",
  },
  {
    num: "02",
    name: "The Stylist",
    title: "Three outfits. Every morning.",
    body: "Wake up to a curated triptych assembled from what's already hanging in your closet — calibrated for weather, your calendar and the way you actually like to dress.",
    bullets: ["Weather-aware", "Calendar sync", "Personal taste model", "Always 3, never more"],
    img: f2,
    reverse: true,
    bg: "ink",
  },
];

function FeatureBlock({ f }: { f: Feat }) {
  const ref = useReveal<HTMLElement>();
  const dark = f.bg === "ink";
  return (
    <section
      ref={ref}
      className={`relative py-24 md:py-36 px-5 md:px-10 ${
        dark ? "bg-ink text-cream" : "bg-cream text-ink"
      }`}
    >
      <div
        className={`max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
          f.reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="md:col-span-6 reveal">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={f.img}
              alt={f.name}
              loading="lazy"
              width={768}
              height={960}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-2 ${
                dark ? "bg-cream text-ink" : "bg-ink text-cream"
              }`}
            >
              FEAT/{f.num}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 reveal">
          <div
            className={`font-mono text-xs uppercase tracking-[0.3em] ${
              dark ? "text-cream/60" : "text-ink/60"
            }`}
          >
            [{f.num}] · {f.name}
          </div>
          <h3 className="mt-6 font-display text-huge">{f.title}</h3>
          <p
            className={`mt-8 max-w-xl text-lg md:text-xl leading-relaxed ${
              dark ? "text-cream/80" : "text-ink/80"
            }`}
          >
            {f.body}
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-px bg-current/10 max-w-md">
            {f.bullets.map((b) => (
              <li
                key={b}
                className={`p-4 font-mono text-xs uppercase tracking-wider ${
                  dark ? "bg-ink" : "bg-cream"
                }`}
              >
                <span className="text-blood mr-2">●</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <div id="features">
      {features.map((f) => (
        <FeatureBlock key={f.num} f={f} />
      ))}
    </div>
  );
}
