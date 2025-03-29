import PartnersCardSection from "../components/CardSection/PartnersCardSection";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";

export default function Partners() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection
          title="Empowering a Sustainable Future"
          description="Discover our mission, vision, and the team driving innovation in funding and planning."
          ctaText="Become a Partner"
          backgroundImage="/partners.webp"
        />
        <PartnersCardSection />
      </main>
      <Footer />
    </>
  );
}
