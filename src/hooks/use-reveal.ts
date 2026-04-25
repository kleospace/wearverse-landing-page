import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    // also descendants with .reveal class
    el.querySelectorAll(".reveal, .reveal-clip").forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
