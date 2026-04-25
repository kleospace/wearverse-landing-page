import { useEffect, useState } from "react";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Berlin",
      });
      setTime(t);
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-cream grain">
      {/* abstract drifting patches */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[55vw] h-[55vw] bg-ink/90 rounded-full blur-[80px] animate-drift" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-cocoa/70 rounded-full blur-[90px] animate-drift-slow" />
        <div className="absolute top-[35%] right-[15%] w-[20vw] h-[20vw] bg-blood/30 rounded-full blur-[60px] animate-drift" />
      </div>

      {/* top meta bar */}
      <div className="absolute top-24 md:top-28 left-0 right-0 z-10 px-5 md:px-10">
        <div className="flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-ink/70">
          <span>52.5200°N · 13.4050°E</span>
          <span className="hidden sm:inline">BERLIN / LIVE</span>
          <span>{time} <span className="animate-blink">_</span></span>
        </div>
      </div>

      {/* massive headline */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-5 md:px-10 pt-32 pb-20">
        <h1 className="font-display text-massive text-blood select-none">
          WEARV<span className="text-ink">3</span>RSE
        </h1>

        <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <p className="font-display text-big text-ink leading-[0.95]">
              THE AI THAT KNOWS<br />
              WHAT YOU <span className="text-blood">ALREADY</span> OWN.
            </p>
          </div>
          <div className="md:col-span-5 md:pl-10 md:border-l border-ink/20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70 mb-4">
              [001] · An anti-overconsumption operating system for your wardrobe.
            </p>
            <a
              href="#join"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] bg-ink text-cream px-6 py-4 hover:bg-blood transition-colors"
            >
              Join the waitlist
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-5 md:px-10 flex items-end justify-between font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-ink/60">
        <span>Scroll ↓</span>
        <span>WEAR LESS · MEAN MORE</span>
      </div>
    </section>
  );
}
