'use client';

export function AuroraBackground() {
  return (
    <div className="absolute top-[-120px] left-0 w-full h-[1075px] overflow-hidden -z-10 pointer-events-none bg-[#EEF2FF]">
      <div className="absolute -top-[100px] -left-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-blue-300/60 blur-[120px]" />
      <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-indigo-300/60 blur-[120px]" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-cyan-200/50 blur-[100px]" />
    </div>
  );
}
