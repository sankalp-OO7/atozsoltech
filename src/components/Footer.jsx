"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2"
            >
              {content.brand.name}
            </motion.div>
            <p className="text-slate-400 text-sm">{content.brand.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    AI & Machine Learning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    Cloud Architecture
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    Networking
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-slate-400 text-sm">
              <a
                href={`mailto:${content.contact.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {content.contact.email}
              </a>
            </p>
            <p className="text-slate-400 text-sm mt-2">
              {content.contact.address}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 {content.brand.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
