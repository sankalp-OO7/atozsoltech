"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export default function Infrastructure() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            IT Infrastructure
          </h1>
          <p className="text-xl text-slate-600">
            Robust infrastructure solutions for enterprise-scale operations
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="INFRASTRUCTURE"
            heading="Complete Infrastructure Solutions"
            description="From data centers to cloud infrastructure management"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon="🏢"
              title="Data Center Solutions"
              description="Modern data center design, implementation, and management"
              features={[
                "Infrastructure Design",
                "Redundancy",
                "Cooling Systems",
                "Physical Security",
              ]}
            />
            <ServiceCard
              icon="💾"
              title="Storage Solutions"
              description="Enterprise storage systems with high availability and disaster recovery"
              features={[
                "SAN/NAS",
                "Backup Systems",
                "Replication",
                "Archive Solutions",
              ]}
            />
            <ServiceCard
              icon="🔧"
              title="Virtualization"
              description="VMware and Hyper-V infrastructure for enterprise consolidation"
              features={[
                "Virtual Machines",
                "High Availability",
                "Disaster Recovery",
                "Management",
              ]}
            />
            <ServiceCard
              icon="📊"
              title="Database Solutions"
              description="Enterprise database architecture and optimization"
              features={[
                "Database Design",
                "Performance Tuning",
                "HA Setup",
                "Backup Strategy",
              ]}
            />
            <ServiceCard
              icon="🎯"
              title="ERP & SAP"
              description="Comprehensive ERP implementation and SAP HANA solutions"
              features={[
                "Implementation",
                "Customization",
                "Integration",
                "Optimization",
              ]}
            />
            <ServiceCard
              icon="🛡️"
              title="Backup & DR"
              description="Disaster recovery planning and business continuity"
              features={[
                "DR Planning",
                "Backup Setup",
                "Recovery Testing",
                "Compliance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Modernize Your Infrastructure"
            description="Build reliable, scalable infrastructure for future growth"
            primaryText="Get Infrastructure Audit"
            secondaryText="View Case Studies"
          />
        </div>
      </section>
    </main>
  );
}
