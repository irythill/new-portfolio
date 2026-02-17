import { Bio } from "@/components/Bio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Bio />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
