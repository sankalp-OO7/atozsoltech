"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export default function RootLayoutClient({ children }) {
  const [showLoading, setShowLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setShowLoading(false);
      setIsFirstLoad(false);
    } else {
      const timer = setTimeout(() => {
        setShowLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <LoadingOverlay isLoading={showLoading} />
      <Navbar />
      <main className="relative overflow-hidden text-slate-900 bg-[#EEF2FF]">
        <div className="absolute top-[-120px] left-0 w-full h-[1075px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[100px] -left-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-blue-300/60 blur-[120px]" />
          <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-indigo-300/60 blur-[120px]" />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-cyan-200/50 blur-[100px]" />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
