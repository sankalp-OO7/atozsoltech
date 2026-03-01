"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cloud, Database, Lock, BarChart3, Zap, Globe } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function CloudServices() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Strategy",
      desc: "Leverage AWS, Azure, GCP for optimal performance and cost",
    },
    {
      icon: Database,
      title: "Data Management",
      desc: "Secure storage, backup, and disaster recovery solutions",
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      desc: "Automatic resource adjustment based on demand",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      desc: "Advanced encryption, IAM, and compliance standards",
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      desc: "Reduce cloud spending with smart resource allocation",
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      desc: "Deploy across multiple regions for low latency",
    },
  ];

  return (
    <SectionWrapper>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 pt-32"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent">
          Cloud Solutions
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Scalable, secure, and cost-effective cloud infrastructure for your
          enterprise
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 text-white rounded-3xl p-12 mb-20"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Cloud Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Cloud Migration",
              items: [
                "Lift & shift",
                "Refactor & replatform",
                "Minimal downtime",
              ],
            },
            {
              title: "Infrastructure as Code",
              items: ["Terraform", "CloudFormation", "Automated deployment"],
            },
            {
              title: "Kubernetes & Containers",
              items: [
                "Container orchestration",
                "Service mesh",
                "Auto-healing",
              ],
            },
            {
              title: "Serverless Solutions",
              items: [
                "AWS Lambda/Azure Functions",
                "Event-driven",
                "Zero management",
              ],
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-blue-500/30 rounded-xl p-6 border border-blue-400"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeader title="Why Cloud?" subtitle="The benefits are clear" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "99.99%",
              label: "Uptime SLA",
              desc: "Enterprise-grade reliability",
            },
            {
              num: "50%",
              label: "Cost Savings",
              desc: "vs traditional infrastructure",
            },
            { num: "10x", label: "Faster", desc: "Time to market" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {item.num}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-1">
                {item.label}
              </div>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
