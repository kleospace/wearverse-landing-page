import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { num: "60", label: "pieces bought / year", note: "global avg per consumer" },
  { num: "20%", label: "of closet actually worn", note: "the 80/20 rule of wardrobes" },
  { num: "50%+", label: "online return rate", note: "most never re-shelved" },
];

export function Manifesto() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative bg-blood text-cream py-24 md:py-40 px-5 md:px-10 overflow-hidden grain"
    >
      <div className="absolute top-8 left-5 md:left-10 right-5 md:right-10 flex justify-between font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-70">
        <span>[002] · Manifesto</span>
        <span>WEARV3RSE / 2026</span>
      </div>

      <div className="max-w-[1600px] mx-auto pt-12">
        <h2 className="reveal font-display text-huge">
          YOU OWN <span className="inline-block reveal-clip">60 PIECES.</span><br />
          YOU WEAR <span className="inline-block reveal-clip">12.</span><br />
          YOUR CLOSET IS A <span className="italic font-light">graveyard.</span>
        </h2>

        <p className="reveal mt-12 max-w-2xl font-body text-lg md:text-xl leading-relaxed text-cream/85">
          Fashion was never meant to be disposable. We built WEARV3RSE for the people who
          want to dress better by owning less — and use what they already have, brilliantly.
        </p>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/20">
          {stats.map((s) => (
            <div key={s.label} className="reveal bg-blood p-8 md:p-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60 mb-6">
                Statistic
              </div>
              <div className="font-display text-7xl md:text-8xl leading-none">{s.num}</div>
              <div className="mt-6 font-display text-xl uppercase">{s.label}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider opacity-70">
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
