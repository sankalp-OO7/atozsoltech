'use client';

export function CTASection({ heading, description, primaryText, secondaryText }) {
  return (
    <div className="relative py-20 px-6 md:px-12 rounded-3xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          {heading}
        </h2>
        {description && (
          <p className="text-lg text-slate-600 mb-8">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-1 transition-all">
            {primaryText || 'Get Started'}
          </button>
          {secondaryText && (
            <button className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 text-slate-900 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              {secondaryText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
