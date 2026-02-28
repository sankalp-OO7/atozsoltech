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

export default function ProjectsPage() {
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
              Our Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400"
            >
              Real-world case studies of AI transformation
            </motion.p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Projects Grid */}
      <SectionWrapper className="bg-slate-900/50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 gap-8">
            {content.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-indigo-400 font-semibold">
                      {project.industry} • {project.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">
                      Award-Winning Solution
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">
                      Challenge
                    </h3>
                    <p className="text-slate-300">{project.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                      Solution
                    </h3>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                      Results
                    </h3>
                    <p className="text-slate-300 font-semibold">
                      {project.results}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-slate-950">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-4"
            >
              Track Record
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "$500M+", label: "Value Created" },
              { number: "50+", label: "Enterprise Clients" },
              { number: "98%", label: "Client Retention" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="pb-20">
        <CTA
          heading="Ready to Be Our Next Success Story?"
          description="Let's work together to transform your business with AI"
          buttonText="Start Your Project"
          buttonHref="/contact"
        />
      </SectionWrapper>
    </>
  );
}
