"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export default function Cloud() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Cloud Solutions
          </h1>
          <p className="text-xl text-slate-600">
            AWS & Azure architecture for enterprise scale and performance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="CLOUD EXPERTISE"
            heading="Multi-Cloud Architecture"
            description="Optimize costs, performance, and reliability across AWS and Azure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon="☁️"
              title="AWS Architecture"
              description="EC2, RDS, S3, Lambda, and comprehensive AWS solutions"
              features={[
                "Infrastructure Design",
                "Cost Optimization",
                "Migration",
                "Management",
              ]}
            />
            <ServiceCard
              icon="⚙️"
              title="Azure Solutions"
              description="Azure VMs, SQL Database, Logic Apps, and enterprise integration"
              features={[
                "Cloud Migration",
                "DevOps Setup",
                "Hybrid Integration",
                "Security",
              ]}
            />
            <ServiceCard
              icon="🔗"
              title="Hybrid Cloud"
              description="Seamless integration between on-premise and cloud infrastructure"
              features={[
                "VPN Setup",
                "Load Balancing",
                "Disaster Recovery",
                "Data Sync",
              ]}
            />
            <ServiceCard
              icon="🚀"
              title="Cloud Modernization"
              description="Transform legacy applications into cloud-native microservices"
              features={[
                "Container Services",
                "Kubernetes",
                "CI/CD Pipelines",
                "Auto-scaling",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Accelerate Your Cloud Journey"
            description="Move to AWS or Azure with confidence and expert guidance"
            primaryText="Get Cloud Assessment"
            secondaryText="View Architecture Models"
          />
        </div>
      </section>
    </main>
  );
}
