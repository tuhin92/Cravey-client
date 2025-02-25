import React from 'react';

// Components
import HelmetWrapper from "../../components/HelmetWrapper";
import Hero from "../../components/About/Hero";
import Mission from "../../components/About/Mission";
import Features from "../../components/About/Features";
import StatsSection from "../../components/About/StatsSection";
import StorySection from "../../components/About/StorySection";
import CTASection from "../../components/About/CTASection";

/**
 * About Page Component
 * Displays company information, mission, features, stats, story and call-to-action
 */
const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* SEO */}
      <HelmetWrapper title="Cravey | About Us" />

      {/* Main Content Sections */}
      <Hero />
      
      <div className="space-y-16">
        <Mission />
        <Features />
        <StatsSection />
        <StorySection />
        <CTASection />
      </div>
    </main>
  );
};

export default About;