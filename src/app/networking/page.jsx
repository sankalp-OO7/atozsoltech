"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";

export default function Page() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 pt-32"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-green-600 to-slate-900 bg-clip-text text-transparent">
          Networking Solutions
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive solutions and insights for your business transformation
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-green-50 rounded-3xl p-12 mb-20 border border-green-200"
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Coming Soon</h2>
        <p className="text-slate-600 text-lg">
          We're working on bringing you the best content in this area. Check
          back soon!
        </p>
      </motion.div>

      <CTASection />
    </SectionWrapper>
  );
}
