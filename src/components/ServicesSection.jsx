"use client";

import { Layers } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import content from "@/data/content.json";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 shadow-sm mb-6">
          <Layers className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Technology Services
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mt-4">
          Complete enterprise solutions for digital transformation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}
