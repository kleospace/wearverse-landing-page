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

  // Doors open to 83° by 60% scroll
  const doorAngle = Math.min(1, progress / 0.6) * 83;
  // Outfits appear from 45% scroll onwards
  const outfitP = Math.max(0, (progress - 0.45) / 0.55);

  return (
    <section ref={sectionRef} style={{ height: "300vh" }} className="relative bg-ink">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{ overflow: "hidden" }}
      >
        {/* Scroll hint */}
        <div
          className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40 mb-10"
          style={{ opacity: Math.max(0, 1 - progress * 6) }}
        >
          ↓ scroll to open
        </div>

        {/* Wardrobe wrapper — perspective lives here */}
        <div
          style={{
            position: "relative",
            width: "min(520px, 80vw)",
            height: "min(640px, 72vh)",
            perspective: "1400px",
          }}
        >
          {/* ── Interior (in DOM first = renders behind doors) ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#140C06",
              border: "3px solid rgba(232,223,208,0.1)",
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

            {/* Three outfits — fade + slide up as wardrobe opens */}
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
                transform: `translateY(${(1 - outfitP) * 40}px)`,
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
                  }}
                >
                  {/* Hanger wire */}
                  <div
                    style={{
                      width: "1px",
                      height: "18px",
                      background: "rgba(232,223,208,0.3)",
                    }}
                  />
                  {/* Hanger crossbar */}
                  <div
                    style={{
                      width: "38%",
                      height: "1px",
                      background: "rgba(232,223,208,0.3)",
                    }}
                  />
                  {/* Outfit image */}
                  <div
                    style={{
                      width: "100%",
                      flex: 1,
                      overflow: "hidden",
                      marginTop: "4px",
                    }}
                  >
                    <img
                      src={src}
                      alt={label}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
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

          {/* ── Left door (hinged on left, in DOM after interior = renders on top) ── */}
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
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "20px 18px",
                border: "1px solid rgba(26,15,8,0.08)",
              }}
            />
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
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "20px 18px",
                border: "1px solid rgba(26,15,8,0.08)",
              }}
            />
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

          {/* Cornice top */}
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "-14px",
              right: "-14px",
              height: "18px",
              background: "#E8DFD0",
              zIndex: 3,
            }}
          />
          {/* Feet */}
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "28px",
              width: "20px",
              height: "14px",
              background: "#E8DFD0",
              zIndex: 3,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              right: "28px",
              width: "20px",
              height: "14px",
              background: "#E8DFD0",
              zIndex: 3,
            }}
          />
        </div>

        {/* Tagline once open */}
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
