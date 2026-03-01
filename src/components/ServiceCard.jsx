"use client";

export function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
        <span className="group-hover:brightness-200 transition-all duration-300">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 font-medium leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
