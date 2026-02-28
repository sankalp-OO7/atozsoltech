'use client';

export function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-slate-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
