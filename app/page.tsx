import BrandTicker from "@/components/home/BrandTicker";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import TechStackExpertiseSection from "@/components/home/TechStackExpertiseSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <BrandTicker />
      <StatsSection />
      <FeaturedProjectsSection />
      <TechStackExpertiseSection />
      <ContactSection />
    </main>
  );
}
