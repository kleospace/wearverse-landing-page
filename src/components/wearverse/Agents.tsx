import { useReveal } from "@/hooks/use-reveal";
import f1 from "@/assets/fashion-2.jpg";
import f2 from "@/assets/fashion-1.jpg";

const agents = [
  {
    num: "01",
    type: "PERCEPTION",
    name: "THE CATALOGUER",
    tagline: "Sees every thread.",
    body: "Point your camera at any garment. The Cataloguer processes the visual input — identifying category, material, dominant colour, silhouette, and styling family in under a second. Your entire wardrobe, permanently mapped.",
    capabilities: ["Vision model", "Auto-tag 0.8s", "Material recognition", "Color extraction"],
    img: f1,
  },
  {
    num: "02",
    type: "REASONING + ACTION",
    name: "THE STYLIST",
    tagline: "Decides what you wear.",
    body: "The Stylist takes everything the Cataloguer knows and reasons across it — weighing your calendar, the weather, and your personal taste model. Every morning it produces three outfit decisions, already made, already yours.",
    capabilities: ["Pattern matching", "Weather-aware", "Calendar sync", "Daily triptych"],
    img: f2,
  },
];

export function Agents() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="agents"
      className="relative bg-ink text-cream py-24 md:py-36 px-5 md:px-10"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Section header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
              [003] · THE SYSTEM
            </div>
            <h2 className="mt-6 font-display text-huge">
              TWO AGENTS.<br />
              ONE <span className="text-blood">CLOSET.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50 max-w-xs leading-relaxed">
            Each agent has a single responsibility. Together they form a complete
            wardrobe operating system.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10">
          {agents.map((a) => (
            <div key={a.num} className="reveal bg-ink p-8 md:p-12 flex flex-col gap-10">

              {/* Agent header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                    [AGENT {a.num}] · {a.type}
                  </div>
                  <h3 className="mt-4 font-display text-big">{a.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-blood">
                    {a.tagline}
                  </p>
                </div>
                {/* Status indicator */}
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 shrink-0 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blood inline-block" />
                  ACTIVE
                </div>
              </div>

              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Corner label */}
                <div className="absolute bottom-0 left-0 font-mono text-[9px] uppercase tracking-[0.25em] bg-ink text-cream/60 px-3 py-2">
                  AGENT/{a.num}
                </div>
              </div>

              {/* Body */}
              <p className="text-base md:text-lg leading-relaxed text-cream/75">
                {a.body}
              </p>

              {/* Capabilities */}
              <ul className="grid grid-cols-2 gap-px bg-cream/10">
                {a.capabilities.map((c) => (
                  <li
                    key={c}
                    className="bg-ink px-4 py-3 font-mono text-xs uppercase tracking-wider text-cream/60"
                  >
                    <span className="text-blood mr-2">●</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Handoff line */}
        <div className="reveal mt-px bg-cream/10 px-8 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
            System handoff
          </div>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
            <span>Cataloguer</span>
            <span className="flex-1 md:w-32 h-px bg-cream/20 hidden md:block" />
            <span className="text-blood">→</span>
            <span className="flex-1 md:w-32 h-px bg-cream/20 hidden md:block" />
            <span>Stylist</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
            Perception → Action
          </div>
        </div>

      </div>
    </section>
  );
}
