import AboutCardSection from "../components/CardSection/AboutCardSection";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection"; 
export default function About() {
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
        <AboutCardSection />
      </main>
      <Footer />
    </>
  );
}
