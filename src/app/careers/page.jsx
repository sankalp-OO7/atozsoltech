'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';

export default function Careers() {
  const positions = [
    {
      title: 'Senior Cloud Architect',
      location: 'New Delhi, India',
      type: 'Full-time',
      experience: '8+ years'
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years'
    },
    {
      title: 'Network Engineer (CCIE)',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '7+ years'
    },
    {
      title: 'Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      experience: '6+ years'
    },
  ];

  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Careers at AtoZ SolTech
          </h1>
          <p className="text-xl text-slate-600">
            Join our team of technology experts and drive innovation
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="WHY JOIN US"
            heading="Build Your Career With Us"
            description="We invest in talent and provide opportunities for growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📚',
                title: 'Learning & Development',
                description: 'Continuous training and certification programs'
              },
              {
                icon: '🌍',
                title: 'Global Opportunities',
                description: 'Work on diverse projects across industries and regions'
              },
              {
                icon: '💼',
                title: 'Career Growth',
                description: 'Clear pathways to leadership and specialization'
              },
              {
                icon: '🎯',
                title: 'Innovation Focus',
                description: 'Work with cutting-edge technologies and methodologies'
              },
              {
                icon: '🤝',
                title: 'Team Culture',
                description: 'Collaborative environment with experienced mentors'
              },
              {
                icon: '💰',
                title: 'Competitive Benefits',
                description: 'Attractive compensation and comprehensive benefits'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="NOW HIRING"
            heading="Open Positions"
            description="Explore career opportunities in technology and solutions"
          />

          <div className="space-y-4">
            {positions.map((position, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span>📍 {position.location}</span>
                      <span>💼 {position.type}</span>
                      <span>⏱️ {position.experience}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Ready to Join Our Team?"
            description="Send us your resume and let's discuss how you can grow with us"
            primaryText="Submit Application"
            secondaryText="Learn More About Us"
          />
        </div>
      </section>
    </main>
  );
}
