"use client";

import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { AnimatedText } from "@/components/AnimatedText";
import content from "@/data/content.json";

export function HeroSection() {
  const heroRef = useRef(null);

  return (
    <section
      className="mx-auto max-w-7xl min-h-[80vh] flex flex-col justify-center text-center pt-10 mb-16 mt-16"
      ref={heroRef}
    >
      <div className="relative z-10 max-w-5xl mx-auto mt-6 pb-2">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100 px-5 py-2 shadow-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {content.hero.badge}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance   ">
          <AnimatedText text={content.hero.heading} delay={100} />
        </h1>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-600 leading-[1.1] mb-6 text-balance   ">
          <AnimatedText text={content.hero.heading2} delay={100} />
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-normal">
          {content.hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href={content.hero.cta_link ?? "#"}>
            <button className="cursor-pointer px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 flex items-center gap-2">
              {content.hero.cta} <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2">
            <Play className="w-5 h-5 fill-slate-700" />{" "}
            {content.hero.cta_secondary}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-slate-200/60 pt-10">
          {content.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
