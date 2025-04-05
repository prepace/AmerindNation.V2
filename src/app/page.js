import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HomeCardSection from "../components/CardSection/HomeCardSection";
import Navigation from "../components/Navigation/Navigation";
export default function Home() {
  return (
    <>
    <HeroSection
      title="Funding and Planning Specialists"
      description="Empowering sustainable energy projects with strategic funding and comprehensive planning solutions."
      ctaText="Schedule Your Eligibility Interview"
      backgroundImage='/solarFarm.jpeg' // ✅ Correct dynamic image reference
    />
    <HomeCardSection />

    </>
  );
}
