import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PlayableSpotlight } from "@/components/PlayableSpotlight";
import { TerminalSection } from "@/components/TerminalSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-[#0B0B0B]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <PortfolioSection />
      <PlayableSpotlight />
      <TerminalSection />
      <ExperienceSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
