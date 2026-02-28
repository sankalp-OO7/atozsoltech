'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Ready to start your digital transformation journey?
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">
                  <a href="mailto:info@atozsoltech.com" className="text-blue-600 hover:underline">
                    info@atozsoltech.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-600">
                  Global Headquarters<br />
                  Technology Park<br />
                  New Delhi, India
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Response Time</h3>
                <p className="text-slate-600">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your project"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="FREQUENTLY ASKED"
            heading="Common Questions"
            description="Find answers to questions about our services"
          />

          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope. Small implementations take 4-12 weeks, while enterprise transformations typically take 6-18 months.'
              },
              {
                q: 'Do you offer post-implementation support?',
                a: 'Yes, we provide ongoing support packages ranging from 6 months to multi-year managed services agreements.'
              },
              {
                q: 'What industries do you serve?',
                a: 'We have expertise across banking, healthcare, manufacturing, retail, and government sectors.'
              },
              {
                q: 'Can you work with our existing teams?',
                a: 'Absolutely. We work collaboratively with your internal teams and can train them on new technologies.'
              },
            ].map((item, idx) => (
              <details key={idx} className="p-6 rounded-lg border border-slate-200 hover:border-blue-200 transition-all">
                <summary className="font-bold text-slate-900 cursor-pointer">
                  {item.q}
                </summary>
                <p className="text-slate-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Let's Talk About Your Project"
            description="Schedule a free consultation with our technology experts"
            primaryText="Schedule Call"
            secondaryText="Chat with Us"
          />
        </div>
      </section>
    </main>
  );
}
