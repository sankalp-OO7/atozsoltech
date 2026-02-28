'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';

export default function Blog() {
  const articles = [
    {
      title: 'The Future of AI in Enterprise',
      date: 'Feb 28, 2026',
      category: 'AI & ML',
      excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and decision-making.',
      icon: '🤖'
    },
    {
      title: 'Cloud Migration: Best Practices',
      date: 'Feb 25, 2026',
      category: 'Cloud',
      excerpt: 'A comprehensive guide to successful cloud migration with minimal downtime and maximum ROI.',
      icon: '☁️'
    },
    {
      title: 'Zero Trust Security Model',
      date: 'Feb 20, 2026',
      category: 'Security',
      excerpt: 'Understanding zero trust architecture and its importance in modern cybersecurity strategies.',
      icon: '🔒'
    },
    {
      title: 'Network Optimization Strategies',
      date: 'Feb 15, 2026',
      category: 'Networking',
      excerpt: 'Proven techniques to enhance network performance and reliability at enterprise scale.',
      icon: '🌐'
    },
  ];

  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Insights & Articles
          </h1>
          <p className="text-xl text-slate-600">
            Latest trends, best practices, and technology insights
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="BLOG"
            heading="Latest Articles"
            description="Stay informed with our technology insights and industry expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, idx) => (
              <div key={idx} className="group p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all cursor-pointer">
                <div className="flex gap-4 mb-4">
                  <div className="text-3xl">{article.icon}</div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-bold text-blue-600 bg-blue-100 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4">{article.excerpt}</p>
                <p className="text-sm text-slate-500">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Subscribe to Our Newsletter"
            description="Get the latest technology insights delivered to your inbox"
            primaryText="Subscribe"
            secondaryText="Follow on LinkedIn"
          />
        </div>
      </section>
    </main>
  );
}
