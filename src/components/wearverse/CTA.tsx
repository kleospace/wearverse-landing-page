import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function CTA() {
  const ref = useReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section
      ref={ref}
      id="join"
      className="relative bg-blood text-cream py-32 md:py-48 px-5 md:px-10 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] bg-ink/40 rounded-full blur-[120px] animate-drift" />
        <div className="absolute -bottom-40 -right-40 w-[55vw] h-[55vw] bg-cocoa/60 rounded-full blur-[120px] animate-drift-slow" />
      </div>

      <div className="relative max-w-[1600px] mx-auto text-center">
        <div className="reveal font-mono text-xs uppercase tracking-[0.3em] opacity-80">
          [WAITLIST] · OPENING Q3 2026 · BERLIN FIRST
        </div>
        <h2 className="reveal mt-8 font-display text-massive leading-[0.85]">
          JOIN THE<br />
          V<span className="text-ink">3</span>RSE.
        </h2>

        <form
          onSubmit={submit}
          className="reveal mt-16 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={sent}
            className="flex-1 bg-cream text-ink font-mono text-base uppercase tracking-wider px-6 py-5 placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-ink/30"
          />
          <button
            type="submit"
            disabled={sent}
            className="bg-ink text-cream font-mono text-sm uppercase tracking-[0.25em] px-8 py-5 hover:bg-cocoa transition-colors disabled:opacity-70"
          >
            {sent ? "✓ On the list" : "Request Access →"}
          </button>
        </form>

        <div className="reveal mt-10 font-mono text-xs uppercase tracking-[0.25em] opacity-70">
          No spam. One letter per month. Unsubscribe with one click.
        </div>
      </div>
    </section>
  );
}
