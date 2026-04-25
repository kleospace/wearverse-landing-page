import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wearverse/Nav";
import { Hero } from "@/components/wearverse/Hero";
import { Manifesto } from "@/components/wearverse/Manifesto";
import { Features } from "@/components/wearverse/Features";
import { WardrobeGrid } from "@/components/wearverse/WardrobeGrid";
import { HowItWorks } from "@/components/wearverse/HowItWorks";
import { CTA } from "@/components/wearverse/CTA";
import { Footer } from "@/components/wearverse/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WEARV3RSE — The AI that knows what you already own" },
      {
        name: "description",
        content:
          "WEARV3RSE is the AI-powered wardrobe operating system. Catalogue your closet, get three daily outfits, block duplicate purchases, and match runway trends to what you already own. Berlin, 2026.",
      },
      { property: "og:title", content: "WEARV3RSE — Wear less. Mean more." },
      {
        property: "og:description",
        content:
          "An AI styling app for the people who want to dress better by owning less. Join the Berlin waitlist.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifesto />
      <Features />
      <WardrobeGrid />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
