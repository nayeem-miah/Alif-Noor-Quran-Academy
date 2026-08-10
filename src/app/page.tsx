import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Curriculum from "@/components/features/Curriculum";
import GlobalPresence from "@/components/features/GlobalPresence";
import Contact from "@/components/features/Contact";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background-warm relative overflow-x-hidden">
      <Hero />
      <About />
      <Curriculum />
      <GlobalPresence />
      <Contact />
    </main>
  );
}

