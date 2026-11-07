import { AboutVision } from "@/components/AboutVision";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSequence } from "@/components/ServicesSequence";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        跳到主内容
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <PortfolioSection />
        <ServicesSequence />
        <AboutVision />
        <SkillsSection />
      </main>
      <SiteFooter />
    </>
  );
}
