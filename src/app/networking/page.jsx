"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";

export default function Networking() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Networking & CCIE
          </h1>
          <p className="text-xl text-slate-600">
            Enterprise-grade networking infrastructure with Cisco expertise
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="NETWORK EXPERTISE"
            heading="Enterprise Networking Solutions"
            description="Design, implement, and manage robust network infrastructure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon="🌐"
              title="Routing & Switching"
              description="Enterprise-grade routing, switching, and network design"
              features={[
                "Network Design",
                "Configuration",
                "Optimization",
                "Troubleshooting",
              ]}
            />
            <ServiceCard
              icon="📡"
              title="Wireless Networks"
              description="Secure and reliable wireless solutions for enterprises"
              features={[
                "WLAN Design",
                "Security Setup",
                "Mobility Solutions",
                "Coverage Planning",
              ]}
            />
            <ServiceCard
              icon="🔒"
              title="Network Security"
              description="Firewalls, VPNs, and comprehensive security architecture"
              features={[
                "Firewall Setup",
                "VPN Configuration",
                "DLP Implementation",
                "Compliance",
              ]}
            />
            <ServiceCard
              icon="⚡"
              title="Performance Tuning"
              description="Optimize network performance and ensure reliability"
              features={[
                "Bandwidth Management",
                "QoS Configuration",
                "Monitoring",
                "Analytics",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <CTASection
            heading="Build Enterprise-Grade Networks"
            description="Expert Cisco and network architecture services for maximum uptime"
            primaryText="Get Network Assessment"
            secondaryText="View Design Portfolio"
          />
        </div>
      </section>
    </main>
  );
}
