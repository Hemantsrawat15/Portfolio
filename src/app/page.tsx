import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <AboutMe />
      <Projects/>
      <TechStack/>
    </main>
  )
}
