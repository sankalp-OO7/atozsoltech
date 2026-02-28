'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { StatsCard } from '@/components/StatsCard';
import { AnimatedText } from '@/components/AnimatedText';
import { CTASection } from '@/components/CTASection';
import content from '@/data/content.json';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100">
              <span className="text-xs font-bold uppercase text-blue-600">
                {content.hero.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              <AnimatedText text={content.hero.heading} delay={100} />
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {content.hero.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-1 transition-all">
                {content.hero.cta}
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 text-slate-900 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                {content.hero.cta_secondary}
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {content.hero.stats.map((stat, idx) => (
              <StatsCard key={idx} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

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
