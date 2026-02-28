'use client';

export function SectionHeader({ badge, heading, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignClass}`}>
      {badge && (
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100">
          <span className="text-xs font-bold uppercase text-blue-600">{badge}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
