import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import PortfolioCardSection from "../components/CardSection/PortfioCardSection";
import HeroSection from "../components/HeroSection";
export default function portfolio() {
    return (
      <>
        <Navigation />
        <main className="pt-20">
          <HeroSection
          title="Empowering a Sustainable Future"
          description="Discover our mission, vision, and the team driving innovation in funding and planning."
          ctaText="Schedule Your Eligibility Interview"
          backgroundImage="/collab.webp"
          />
          <PortfolioCardSection />
        </main>
        <Footer />
      </>
    );
  }
