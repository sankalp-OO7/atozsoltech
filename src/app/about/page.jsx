"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Zap, Target, Award, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that drive real transformation.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Fast execution without compromising quality. We deliver results that matter, when they matter.",
    },
    {
      icon: Heart,
      title: "Client Success",
      description:
        "Your success is our success. We're deeply invested in helping you achieve your business goals.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "World-class engineers and strategists dedicated to solving your toughest challenges.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <SectionWrapper>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 pt-32"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent">
          About AtoZ SolTech
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're a team of passionate innovators transforming businesses through
          intelligent technology solutions.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 mb-20 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Our Mission
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            At AtoZ SolTech, we believe technology should empower businesses,
            not complicate them. Our mission is to provide comprehensive,
            intelligent solutions that transform how organizations operate.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            From cloud infrastructure to AI-driven analytics, from robust
            networking to seamless integration—we're your complete technology
            partner.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20"></div>
          <motion.div
            animate={{ float: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              50+
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeader title="Our Values" subtitle="What drives us forward" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all shadow-md"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-20 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeader
          title="Our Expert Team"
          subtitle="Industry veterans dedicated to excellence"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Aman Patel",
              role: "Chief Technology Officer",
              bio: "10+ years in cloud infrastructure and DevOps",
            },
            {
              name: "Priya Sharma",
              role: "Director of AI & Solutions",
              bio: "Expert in machine learning and data science",
            },
            {
              name: "Rajesh Kumar",
              role: "Head of Operations",
              bio: "Specialized in enterprise networking solutions",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-slate-50 rounded-3xl p-12 mb-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Why Choose AtoZ SolTech?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "End-to-End Solutions: From strategy to implementation, we handle it all",
            "Proven Track Record: 50+ successful projects across diverse industries",
            "Cutting-Edge Technology: We stay ahead of industry trends and innovations",
            "Dedicated Support: Your success is our priority with 24/7 support",
            "Cost-Effective: Premium quality without breaking your budget",
            "Transparent Communication: Regular updates and honest discussions",
          ].map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-1 bg-blue-600 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <p className="text-slate-700 font-medium">{reason}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
