import PartnersCardSection from "@/components/CardSection/PartnersCardSection";
import HeroSection from "@/components/HeroSection";

export default function Partners() {
  return (
    <>
        <HeroSection
          title="Empowering a Sustainable Future"
          description="Discover our mission, vision, and the team driving innovation in funding and planning."
          ctaText="Become a Partner"
          backgroundImage="/collab.webp"
        />
        <PartnersCardSection />
    </>
  );
}
