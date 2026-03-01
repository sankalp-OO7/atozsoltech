"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsCard } from "@/components/StatsCard";
import { AnimatedText } from "@/components/AnimatedText";
import { CTASection } from "@/components/CTASection";
import content from "@/data/content.json";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="OUR EXPERTISE"
            heading="Why Choose AtoZ SolTech"
            description="Certified technology specialists with proven expertise across enterprise solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Industry Expertise',
                description: 'Deep knowledge across AI, Cloud, Networking, and Enterprise Infrastructure',
              },
              {
                icon: '👥',
                title: 'Expert Team',
                description: 'IIT/IIM certified specialists with 10+ years of global experience',
              },
              {
                icon: '🚀',
                title: 'Strategic Approach',
                description: 'Customized solutions aligned with your digital transformation goals',
              },
              {
                icon: '✅',
                title: 'Proven Results',
                description: '50+ successful projects with 100% client satisfaction rate',
              },
            ].map((item, idx) => (
              <ServiceCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="SERVICES"
            heading="Our Technology Services"
            description="Complete enterprise solutions for digital transformation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

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
