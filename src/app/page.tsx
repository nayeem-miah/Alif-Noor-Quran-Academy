import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Curriculum from "@/components/features/Curriculum";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background-warm relative overflow-x-hidden">
      <Hero />
      <About />
      <Curriculum />
    </main>
  );
}
