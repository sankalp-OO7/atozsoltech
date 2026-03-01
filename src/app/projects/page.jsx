"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Zap, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform Scaling",
      client: "Global Retail Co.",
      industry: "Retail",
      challenge: "Legacy system unable to handle 10M+ daily users",
      solution:
        "Multi-region cloud architecture with AI-powered recommendations",
      results: "2x revenue | 99.99% uptime | 40% faster transactions",
      tech: ["AWS", "Kubernetes", "React", "PostgreSQL", "Redis"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Healthcare Data Integration",
      client: "National Hospital Network",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems",
      solution: "HIPAA-compliant unified EHR with real-time sync",
      results: "60% faster care | 100% data security | Full compliance",
      tech: ["GCP", "HL7", "FHIR", "React", "Python"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Financial Analytics Platform",
      client: "Investment Bank",
      industry: "Finance",
      challenge: "Need for real-time market analytics and predictions",
      solution: "AI-powered analytics dashboard with ML models",
      results: "50% faster decisions | $10M+ insights generated",
      tech: ["GCP", "TensorFlow", "Apache Spark", "Next.js", "D3.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Manufacturing IoT System",
      client: "Industrial Manufacturer",
      industry: "Manufacturing",
      challenge: "Equipment downtime costing millions annually",
      solution: "IoT sensors with predictive maintenance AI",
      results: "50% downtime reduction | $5M saved | Better efficiency",
      tech: ["Azure", "IoT Hub", "ML Studio", "React", "Time-Series DB"],
      color: "from-orange-500 to-red-500",
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
          Our Projects
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Real-world transformations. Real-world results. Real impact.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="mb-20">
        <SectionHeader
          title="Featured Projects"
          subtitle="Delivered with excellence"
        />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-3 transition-opacity`}
              ></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="text-slate-600">
                        📍 {project.client}
                      </span>
                      <span className="text-slate-600">
                        🏢 {project.industry}
                      </span>
                    </div>
                  </div>
                  <Award
                    className={`w-6 h-6 text-yellow-500 flex-shrink-0 mt-2 md:mt-0`}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Challenge
                    </p>
                    <p className="text-slate-600">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Solution
                    </p>
                    <p className="text-slate-600">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-2">
                      Results
                    </p>
                    <p className="text-green-600 font-semibold">
                      {project.results}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-20 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Impact By The Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "🎯", number: "50+", label: "Projects Delivered" },
            { icon: "💰", number: "$500M+", label: "Value Created" },
            { icon: "🏢", number: "100+", label: "Happy Clients" },
            { icon: "⭐", number: "98%", label: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
