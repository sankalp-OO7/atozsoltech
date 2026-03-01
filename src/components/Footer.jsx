"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2"
            >
              {content.brand.name}
            </motion.div>
            <p className="text-slate-400 text-sm">{content.brand.tagline}</p>
          </div>

          {/* Main Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cloud"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/networking"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-transition"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  AI & Transition
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
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
