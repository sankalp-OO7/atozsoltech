"use client";

import { Target, Users, Briefcase, Award } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const items = [
  {
    icon: "🎯",
    title: "Industry Expertise",
    description:
      "Deep knowledge across AI, Cloud, Networking, and Enterprise Infrastructure",
  },
  {
    icon: "👥",
    title: "Expert Team",
    description:
      "IIT/IIM certified specialists with 10+ years of global experience",
  },
  {
    icon: "🚀",
    title: "Strategic Approach",
    description:
      "Customized solutions aligned with your digital transformation goals",
  },
  {
    icon: "✅",
    title: "Proven Results",
    description: "50+ successful projects with 100% client satisfaction rate",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 shadow-sm mb-6">
          <Target className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Our Expertise
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            AtoZ SolTech
          </span>
        </h2>

        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          Certified technology specialists with proven expertise across
          enterprise solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <ServiceCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
