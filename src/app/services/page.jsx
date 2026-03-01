"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Network,
  Zap,
  Database,
  Shield,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable, secure, and cost-effective cloud infrastructure tailored to your needs.",
      features: [
        "Multi-cloud strategy",
        "Migration & optimization",
        "Serverless architecture",
        "24/7 monitoring",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that automate processes and unlock insights from your data.",
      features: [
        "Predictive analytics",
        "NLP solutions",
        "Computer vision",
        "Custom AI models",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description:
        "Robust, secure, and scalable network infrastructure for modern enterprises.",
      features: [
        "Network design",
        "Security protocols",
        "Load balancing",
        "Network monitoring",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Comprehensive data solutions from collection to insights and optimization.",
      features: [
        "Data warehousing",
        "ETL pipelines",
        "Big data analytics",
        "Data governance",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description:
        "Streamlined deployment, monitoring, and continuous improvement of your systems.",
      features: [
        "CI/CD pipelines",
        "Infrastructure as code",
        "Container orchestration",
        "Automated testing",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your assets with advanced security measures and threat detection.",
      features: [
        "Threat detection",
        "Penetration testing",
        "Security audits",
        "Compliance management",
      ],
      color: "from-red-500 to-rose-500",
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
          Our Services
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to transform your business
          and accelerate growth
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, shadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              className="relative group bg-white border border-slate-200 rounded-2xl p-8 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 relative z-10`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 relative z-10">
                {service.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-center gap-2 text-slate-600 text-sm"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors relative z-10"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-slate-50 rounded-3xl p-12 mb-20"
      >
        <SectionHeader
          title="Our Process"
          subtitle="How we deliver excellence"
        />

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Understanding your needs and challenges",
            },
            {
              step: "02",
              title: "Strategy",
              desc: "Developing a comprehensive solution plan",
            },
            {
              step: "03",
              title: "Implementation",
              desc: "Building and deploying your solution",
            },
            {
              step: "04",
              title: "Optimization",
              desc: "Continuous monitoring and improvement",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-blue-100 mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600">{item.desc}</p>
              {idx < 3 && (
                <div className="hidden md:block absolute top-12 right-0 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeader
          title="Why Partner With Us?"
          subtitle="What sets us apart"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: "✓",
              title: "Expert Team",
              desc: "Certified professionals with years of experience",
            },
            {
              icon: "✓",
              title: "Latest Tech",
              desc: "We use cutting-edge tools and frameworks",
            },
            {
              icon: "✓",
              title: "Proven Results",
              desc: "50+ successful projects across industries",
            },
            {
              icon: "✓",
              title: "Full Support",
              desc: "24/7 support and maintenance included",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="text-3xl text-blue-600 font-bold">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
