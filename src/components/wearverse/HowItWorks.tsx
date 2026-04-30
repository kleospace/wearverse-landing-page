import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    name: "CAPTURE",
    body: "Photograph each piece once. The cataloguer tags it forever — material, colour, silhouette, season.",
  },
  {
    n: "02",
    name: "CURATE",
    body: "Wake to three daily outfits, drawn from what you already own and tuned to weather and calendar.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="how"
      className="relative bg-cocoa text-cream py-24 md:py-36 px-5 md:px-10 grain overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/60">
              [PROCESS] · HOW IT WORKS
            </div>
            <h2 className="mt-6 font-display text-huge">
              TWO STEPS.<br />
              ONE <span className="text-blood">SMARTER</span> CLOSET.
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60 max-w-xs">
            Onboarding takes one weekend. The compounding takes a lifetime.
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/15">
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal relative bg-cocoa p-8 md:p-10 min-h-[320px] flex flex-col group hover:bg-blood transition-colors duration-500"
            >
              <div className="font-display text-7xl text-cream/20 group-hover:text-cream/40 transition-colors">
                {s.n}
              </div>
              <div className="mt-auto">
                <div className="font-display text-2xl">{s.name}</div>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
