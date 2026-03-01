"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  ShoppingCart,
  Zap,
  Briefcase,
  Cpu,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Transformation",
      industry: "Enterprise",
      description:
        "Complete digital transformation for large organizations seeking modernization.",
      challenges: [
        "Legacy system integration",
        "Scaling infrastructure",
        "Team upskilling",
      ],
      benefits: [
        "30% cost reduction",
        "3x faster deployment",
        "Better team productivity",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Solutions",
      industry: "Healthcare",
      description:
        "HIPAA-compliant solutions for healthcare providers and organizations.",
      challenges: ["Data security", "Patient privacy", "System reliability"],
      benefits: ["100% uptime", "Secure data handling", "Faster patient care"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      industry: "Retail",
      description:
        "Scalable e-commerce infrastructure handling millions of transactions.",
      challenges: [
        "High traffic management",
        "Payment security",
        "Inventory sync",
      ],
      benefits: [
        "99.9% availability",
        "Instant transactions",
        "Real-time inventory",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      industry: "Finance",
      description:
        "Secure, compliant solutions for fintech and banking institutions.",
      challenges: [
        "Regulatory compliance",
        "Fraud detection",
        "Data protection",
      ],
      benefits: ["Full compliance", "Real-time analytics", "Enhanced security"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Manufacturing",
      industry: "Manufacturing",
      description:
        "IoT and AI solutions for smart manufacturing and Industry 4.0.",
      challenges: [
        "Equipment monitoring",
        "Production optimization",
        "Supply chain",
      ],
      benefits: [
        "50% waste reduction",
        "Predictive maintenance",
        "Better efficiency",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Cpu,
      title: "SaaS Platforms",
      industry: "Software",
      description:
        "Build and scale SaaS applications with enterprise-grade infrastructure.",
      challenges: ["Multi-tenancy", "Auto-scaling", "User management"],
      benefits: ["Easy scaling", "99.99% uptime", "Fast onboarding"],
      color: "from-indigo-500 to-blue-500",
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
          Industry Solutions
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Tailored solutions for your industry's unique challenges and
          opportunities
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {solutions.map((solution, idx) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="relative group bg-white border border-slate-200 rounded-2xl p-8 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>

              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 relative z-10`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              <p
                className={`text-sm font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-2`}
              >
                {solution.industry}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-slate-600 mb-6">{solution.description}</p>

              <div className="mb-6 relative z-10">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Key Benefits:
                </p>
                <ul className="space-y-1">
                  {solution.benefits.map((benefit, bidx) => (
                    <li
                      key={bidx}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <span
                        className={`w-1 h-1 rounded-full bg-gradient-to-r ${solution.color}`}
                      ></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Case Studies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeader
          title="Success Stories"
          subtitle="Real results from real clients"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              company: "Global Retail Corp",
              challenge: "E-commerce platform handling 10M+ daily users",
              solution:
                "Multi-region cloud architecture with AI recommendations",
              results: [
                "2x revenue increase",
                "99.99% uptime",
                "40% faster checkout",
              ],
            },
            {
              company: "Healthcare Networks",
              challenge: "Legacy EHR system causing patient care delays",
              solution: "Cloud migration with real-time data sync",
              results: [
                "60% faster patient processing",
                "HIPAA compliance",
                "100% data security",
              ],
            },
          ].map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
            >
              <p className="text-sm font-bold text-blue-600 mb-2">CASE STUDY</p>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {study.company}
              </h4>

              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Challenge:
                </p>
                <p className="text-slate-600 mb-4">{study.challenge}</p>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Solution:
                </p>
                <p className="text-slate-600">{study.solution}</p>
              </div>

              <div className="border-t border-blue-200 pt-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  Results:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, ridx) => (
                    <div key={ridx} className="text-center">
                      <p className="text-sm font-bold text-blue-600">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
