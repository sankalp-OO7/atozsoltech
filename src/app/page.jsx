"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

import { CTASection } from "@/components/CTASection";
import content from "@/data/content.json";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Grid Section */}
      <ServicesSection />

      {/* Final CTA Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Ready for Digital Transformation?"
            description="Let's discuss how AtoZ SolTech can accelerate your technology journey"
            primaryText="Schedule Consultation"
            secondaryText="View Case Studies"
          />
        </div>
      </section>
    </main>
  );
}
