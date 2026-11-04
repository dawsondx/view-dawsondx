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
      <a href="#top" className="skip-link">
        跳到主内容
      </a>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <SiteHeader />
      <main id="top" tabIndex={-1} className="relative z-[1] outline-none">
        <HeroSection />
        <AboutVision />
        <PortfolioSection />
        <ServicesSequence />
        <SkillsSection />
      </main>
      <SiteFooter />
    </>
  );
}
