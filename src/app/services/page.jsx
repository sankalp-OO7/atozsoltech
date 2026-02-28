'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import content from '@/data/content.json';

export default function Services() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600">
            Comprehensive technology solutions for enterprise digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="EXPERTISE AREAS"
            heading="Complete Technology Solutions"
            description="Expert services across all enterprise technology domains"
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

      {/* Service Delivery */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="OUR APPROACH"
            heading="How We Deliver Value"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assess',
                description: 'Deep analysis of your current infrastructure and requirements'
              },
              {
                step: '02',
                title: 'Plan',
                description: 'Strategic roadmap aligned with business objectives'
              },
              {
                step: '03',
                title: 'Implement',
                description: 'Agile deployment with minimal disruption'
              },
              {
                step: '04',
                title: 'Optimize',
                description: 'Continuous monitoring and improvement'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Ready to Transform Your Enterprise?"
            description="Let's discuss how our services can drive your digital success"
            primaryText="Schedule Consultation"
            secondaryText="Download Services Guide"
          />
        </div>
      </section>
    </main>
  );
}
