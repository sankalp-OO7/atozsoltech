"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import CTA from "@/components/CTA";
import content from "@/data/content.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <SectionWrapper className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold text-white mb-4"
            >
              Industry Solutions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400"
            >
              AI strategies proven across every sector
            </motion.p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Solutions Grid */}
      <SectionWrapper className="bg-slate-900/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 gap-8">
            {content.solutions.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{solution.icon}</div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                      {solution.industry}
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-red-400 mb-2">
                          Challenge
                        </h3>
                        <p className="text-slate-300">{solution.problem}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                          Our Solution
                        </h3>
                        <p className="text-slate-300">{solution.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                          Results
                        </h3>
                        <p className="text-slate-300 font-semibold">
                          {solution.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-slate-950 pb-20">
        <CTA
          heading="Find Your Industry Solution"
          description="Let's discuss how we can solve your specific business challenges with AI"
          buttonText="Get In Touch"
          buttonHref="/contact"
        />
      </SectionWrapper>
    </>
  );
}
