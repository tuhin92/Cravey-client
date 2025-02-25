import HelmetWrapper from "../../components/HelmetWrapper";
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/About/Hero";
import Features from "../../components/About/Features";
import Mission from "../../components/About/Mission";
import StatsSection from "../../components/About/StatsSection";
import StorySection from "../../components/About/StorySection";
import CTASection from "../../components/About/CTASection";

const About = () => {
  return (
    <>
      <HelmetWrapper title="Cravey | About Us" />
      {/* Hero Section with Parallax Effect */}
      <Hero />
      {/* Mission Statement */}
      <Mission />
      {/* Features Grid with Animation */}
      <Features />
      {/* Stats Section with Icons */}
      <StatsSection />
      {/* Story Section with Image */}
      <StorySection />
      {/* Enhanced CTA Section */}
      <CTASection />
    </>
  );
};

export default About;