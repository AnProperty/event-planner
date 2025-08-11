"use client";

import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import CTASection from "@/components/cta-section";
import ProcessSection from "@/components/home/process-sections";
import CapabilitiesSection from "@/components/home/capabilities-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CapabilitiesSection />
      <CTASection />
    </>
  );
};

export default Home;
