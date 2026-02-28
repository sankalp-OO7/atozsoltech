'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';

export default function AITransition() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            AI Transition Framework
          </h1>
          <p className="text-xl text-slate-600">
            Your roadmap from legacy systems to AI-powered intelligence
          </p>
        </div>
      </section>

      {/* The 5-Step Journey */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="OUR FRAMEWORK"
            heading="5-Step AI Transition Journey"
            description="A proven methodology for successful AI adoption"
          />

          <div className="space-y-6">
            {[
              {
                step: 1,
                icon: '📊',
                title: 'Assessment & AI Readiness',
                description: 'Comprehensive evaluation of your current infrastructure, data maturity, and AI readiness. We identify gaps and opportunities specific to your organization.',
                highlights: ['Data Audit', 'Infrastructure Review', 'Skill Assessment', 'Opportunity Mapping']
              },
              {
                step: 2,
                icon: '🗺️',
                title: 'Custom AI Roadmap',
                description: 'Strategic planning tailored to your business goals. We define phases, timelines, resource requirements, and success metrics.',
                highlights: ['Priority Setting', 'Timeline Planning', 'Budget Allocation', 'Risk Management']
              },
              {
                step: 3,
                icon: '🔄',
                title: 'Data Transformation & Migration',
                description: 'Prepare your data for AI by cleaning, organizing, and migrating to cloud or on-premise AI platforms with minimal disruption.',
                highlights: ['Data Cleaning', 'Integration', 'Migration', 'Validation']
              },
              {
                step: 4,
                icon: '⚙️',
                title: 'Intelligent Automation',
                description: 'Implement AI models and automation workflows that deliver immediate ROI through process optimization and intelligence.',
                highlights: ['Model Development', 'Deployment', 'Integration', 'Monitoring']
              },
              {
                step: 5,
                icon: '👥',
                title: 'Workforce Enablement',
                description: 'Train your team to work effectively with AI systems. Build new skills and create a culture of continuous learning.',
                highlights: ['Training Programs', 'Documentation', 'Support', 'Certification']
              },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                        Step {item.step}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, h_idx) => (
                        <span key={h_idx} className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
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
            heading="Ready to Transition from Legacy to AI?"
            description="Start your AI journey with proven expertise and methodology"
            primaryText="Get AI Readiness Assessment"
            secondaryText="Download Framework PDF"
          />
        </div>
      </section>
    </main>
  );
}
