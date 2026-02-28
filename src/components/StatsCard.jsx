'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function StatsCard({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numValue = parseInt(value);
    if (isNaN(numValue)) {
      setDisplayValue(value);
      return;
    }

    let current = 0;
    const increment = Math.ceil(numValue / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayValue(numValue);
        clearInterval(interval);
      } else {
        setDisplayValue(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 text-center hover:bg-white/80 transition-all"
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {displayValue}
        {typeof value === 'string' && value.includes('%') ? '%' : value.includes('+') ? '+' : ''}
      </div>
      <p className="text-sm text-slate-600 mt-2">{label}</p>
    </div>
  );
}
