import { Nav } from "@/components/wearverse/Nav";
import { Hero } from "@/components/wearverse/Hero";
import { Manifesto } from "@/components/wearverse/Manifesto";
import { Agents } from "@/components/wearverse/Agents";
import { HowItWorks } from "@/components/wearverse/HowItWorks";
import { CTA } from "@/components/wearverse/CTA";
import { Footer } from "@/components/wearverse/Footer";

export default function App() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifesto />
      <Agents />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
