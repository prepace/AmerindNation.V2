import ServicesCardSection from "../../components/CardSection/ServicesCardSection";
import HeroSection from "../../components/HeroSection";
export default function portfolio() {
    return (
      <>
          <HeroSection
          title="Empowering a Sustainable Future"
          description="Discover our mission, vision, and the team driving innovation in funding and planning."
          ctaText="Schedule Your Eligibility Interview"
          backgroundImage="/collab.webp"
          />
          <ServicesCardSection />
      </>
    );
  }
