"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA({
  heading,
  description,
  buttonText,
  buttonHref = "/contact",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl overflow-hidden"
    >
      <div className="relative p-12 md:p-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <Link href={buttonHref}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:shadow-2xl transition-shadow"
            >
              {buttonText}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
