import { Nav } from "@/components/wearverse/Nav";
import { Hero } from "@/components/wearverse/Hero";
import { Manifesto } from "@/components/wearverse/Manifesto";
import { Features } from "@/components/wearverse/Features";
import { HowItWorks } from "@/components/wearverse/HowItWorks";
import { CTA } from "@/components/wearverse/CTA";
import { Footer } from "@/components/wearverse/Footer";

export default function App() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifesto />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
