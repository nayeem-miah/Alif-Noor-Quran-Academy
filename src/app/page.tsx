import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Curriculum from "@/components/features/Curriculum";
import Benefits from "@/components/features/Benefits";
import GlobalPresence from "@/components/features/GlobalPresence";
import Pricing from "@/components/features/Pricing";
import Testimonials from "@/components/features/Testimonials";
import FAQ from "@/components/features/FAQ";
import Contact from "@/components/features/Contact";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background-warm relative overflow-x-hidden">
      <Hero />
      <About />
      <Curriculum />
      <Benefits />
      <GlobalPresence />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}



