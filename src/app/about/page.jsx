'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { StatsCard } from '@/components/StatsCard';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import content from '@/data/content.json';

export default function About() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            About AtoZ SolTech
          </h1>
          <p className="text-xl text-slate-600">
            Highly experienced global technology consultants with 10+ years of proven expertise
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="OUR STORY"
            heading="Driving Digital Excellence"
            description="Built on expertise, trusted by enterprises worldwide"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To empower enterprises with cutting-edge technology solutions that drive innovation, 
                operational efficiency, and sustainable growth through strategic digital transformation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To be the trusted technology partner of choice for enterprises seeking AI-driven, 
                cloud-first solutions and digital modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 md:px-12 bg-white/30 backdrop-blur-sm rounded-3xl mx-6 md:mx-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="PROVEN TRACK RECORD"
            heading="By The Numbers"
            description="Demonstrating our commitment to excellence and client success"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard value="10+" label="Years Experience" />
            <StatsCard value="50+" label="Projects Delivered" />
            <StatsCard value="100%" label="Satisfaction Rate" />
            <StatsCard value="200+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="OUR VALUES"
            heading="What Drives Us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon="🎓"
              title="Continuous Learning"
              description="IIT/IIM certified experts staying ahead of technology trends"
            />
            <ServiceCard
              icon="🤝"
              title="Client Partnership"
              description="Long-term relationships built on trust and delivered results"
            />
            <ServiceCard
              icon="⚡"
              title="Innovation"
              description="Pioneering AI and cloud solutions for enterprise challenges"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Let's Work Together"
            description="Discover how our expertise can accelerate your digital transformation"
            primaryText="Get In Touch"
            secondaryText="Learn More"
          />
        </div>
      </section>
    </main>
  );
}
