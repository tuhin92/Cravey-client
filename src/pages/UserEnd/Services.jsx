import React from "react";
import HelmetWrapper from "../../components/HelmetWrapper";
import HeroSection from "../../components/Services/HeroSection";
import ServiceGrid from "../../components/Services/ServiceGrid";
import CallToAction from "../../components/Services/CallToAction";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HelmetWrapper title="Cravey | Services" />
      <HeroSection />
      <ServiceGrid />
      <CallToAction />
    </div>
  );
};

export default Services;
