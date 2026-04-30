import { useEffect, useRef, useState } from "react";
import outfit1 from "@/assets/fashion-4.jpg";
import outfit2 from "@/assets/fashion-5.jpg";
import outfit3 from "@/assets/fashion-6.jpg";

const OUTFITS = [
  { src: outfit1, label: "LOOK 01" },
  { src: outfit2, label: "LOOK 02" },
  { src: outfit3, label: "LOOK 03" },
];

export function WardrobeScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, -top / scrollable)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Doors open fully at 60% scroll progress
  const doorAngle = Math.min(1, progress / 0.6) * 83;
  // Outfits appear from 45% onwards
  const outfitP = Math.max(0, (progress - 0.45) / 0.55);

  return (
    <section ref={sectionRef} style={{ height: "300vh" }} className="relative bg-ink">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Scroll hint */}
        <div
          className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40 mb-10 transition-none"
          style={{ opacity: Math.max(0, 1 - progress * 5) }}
        >
          ↓ scroll to open
        </div>

        {/* Wardrobe outer — sets perspective */}
        <div
          style={{
            position: "relative",
            width: "min(520px, 80vw)",
            height: "min(640px, 72vh)",
            perspective: "1400px",
          }}
        >
          {/* 3D scene — all children share one 3D space */}
          <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>

            {/* ── Interior (pushed 2px behind doors) ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#140C06",
                border: "3px solid rgba(232,223,208,0.1)",
                transform: "translateZ(-2px)",
                overflow: "hidden",
              }}
            >
              {/* Clothes rod */}
              <div
                style={{
                  position: "absolute",
                  top: "52px",
                  left: "8%",
                  right: "8%",
                  height: "2px",
                  background: "rgba(232,223,208,0.22)",
                }}
              />

              {/* Three hanging outfits */}
              <div
                style={{
                  position: "absolute",
                  top: "54px",
                  left: "8%",
                  right: "8%",
                  bottom: "24px",
                  display: "flex",
                  gap: "8px",
                  opacity: outfitP,
                  transform: `translateY(${(1 - outfitP) * 48}px)`,
                }}
              >
                {OUTFITS.map(({ src, label }, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    {/* Hanger wire */}
                    <div style={{ width: "1px", height: "18px", background: "rgba(232,223,208,0.28)" }} />
                    {/* Hanger crossbar */}
                    <div style={{ width: "40%", height: "1px", background: "rgba(232,223,208,0.28)" }} />
                    {/* Outfit image */}
                    <div style={{ width: "100%", flex: 1, overflow: "hidden", marginTop: "4px" }}>
                      <img
                        src={src}
                        alt={label}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                      />
                    </div>
                    {/* Label */}
                    <div
                      style={{
                        marginTop: "6px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "rgba(232,223,208,0.4)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Left door (hinged on left) ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                bottom: 0,
                background: "#E8DFD0",
                transformOrigin: "left center",
                transform: `rotateY(-${doorAngle}deg)`,
                backfaceVisibility: "hidden",
                borderRight: "1px solid rgba(26,15,8,0.08)",
              }}
            >
              <div style={{ position: "absolute", inset: "20px 18px", border: "1px solid rgba(26,15,8,0.08)" }} />
              <div style={{ position: "absolute", inset: "20px 18px 50% 18px", borderBottom: "none", borderTop: "none" }} />
              {/* Handle */}
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "5px",
                  height: "30px",
                  background: "rgba(26,15,8,0.15)",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* ── Right door (hinged on right) ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50%",
                bottom: 0,
                background: "#E8DFD0",
                transformOrigin: "right center",
                transform: `rotateY(${doorAngle}deg)`,
                backfaceVisibility: "hidden",
                borderLeft: "1px solid rgba(26,15,8,0.08)",
              }}
            >
              <div style={{ position: "absolute", inset: "20px 18px", border: "1px solid rgba(26,15,8,0.08)" }} />
              <div style={{ position: "absolute", inset: "20px 18px 50% 18px", borderBottom: "none", borderTop: "none" }} />
              {/* Handle */}
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "5px",
                  height: "30px",
                  background: "rgba(26,15,8,0.15)",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>

          {/* Cornice top */}
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "-14px",
              right: "-14px",
              height: "18px",
              background: "#E8DFD0",
            }}
          />
          {/* Feet */}
          <div style={{ position: "absolute", bottom: "-14px", left: "28px", width: "20px", height: "14px", background: "#E8DFD0" }} />
          <div style={{ position: "absolute", bottom: "-14px", right: "28px", width: "20px", height: "14px", background: "#E8DFD0" }} />
        </div>

        {/* Tagline that fades in once wardrobe is open */}
        <div
          className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40 mt-10"
          style={{ opacity: Math.min(1, outfitP * 2) }}
        >
          Three looks. Already yours.
        </div>
      </div>
    </section>
  );
}
