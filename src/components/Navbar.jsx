"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-6 font-sans">
      <div className="mx-auto max-w-7xl">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-2xl transition-all duration-500 ease-in-out px-2 ${
            scrolled
              ? "bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-xl shadow-blue-900/5 py-2"
              : "bg-transparent border-transparent shadow-none py-4"
          }`}
        >
          <div className="relative flex items-center justify-between px-4">
            {/* LOGO SECTION */}
            <Link
              href="/"
              onClick={() => setActiveItem("/")}
              className="flex items-center gap-3 font-black text-xl text-slate-900 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {content.brand.name}
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex items-center gap-1 text-sm font-semibold">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveItem(item.href)}
                      className={`relative px-4 py-2 rounded-lg transition-all cursor-pointer ${
                        activeItem === item.href
                          ? "text-blue-600 bg-blue-50/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-4 cursor-pointer px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm transition-all hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden rounded-xl p-2.5 transition-colors cursor-pointer ${
                scrolled
                  ? "bg-slate-100 text-slate-900"
                  : "bg-white/40 text-slate-900 hover:bg-white/60"
              }`}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* MOBILE MENU (Dropdown) */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              open ? "max-h-[85vh] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-2xl space-y-2 overflow-y-auto max-h-[80vh]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveItem(item.href);
                  }}
                  className={`block px-5 py-3 rounded-xl font-medium transition-all cursor-pointer ${
                    activeItem === item.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 pb-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer w-full mt-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg flex justify-center items-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
