'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedText({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const characters = text.split('');

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isInView ? `${delay + index * 30}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
