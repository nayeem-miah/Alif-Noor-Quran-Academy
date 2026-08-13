import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Curriculum from "@/components/features/Curriculum";
import Benefits from "@/components/features/Benefits";
import GlobalPresence from "@/components/features/GlobalPresence";
import Pricing from "@/components/features/Pricing";
import Testimonials from "@/components/features/Testimonials";
import FAQ from "@/components/features/FAQ";
import Contact from "@/components/features/Contact";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background-warm relative overflow-hidden w-full">
      <ScrollReveal variant="fadeIn" duration={0.8}>
        <Hero />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <About />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <Curriculum />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <Benefits />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <GlobalPresence />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <Pricing />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}



