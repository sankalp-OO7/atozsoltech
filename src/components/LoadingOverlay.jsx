"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ANIMATION VARIANTS ---
const loadingOverlayVariants = {
  initial: {
    opacity: 1,
    background:
      "linear-gradient(135deg, #EEF2FF 0%, #F9FBFF 50%, #EEF2FF 100%)",
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(10px)",
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const dataParticleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i) => ({
    opacity: [0, 0.8, 0.3, 0],
    scale: [0.5, 1, 0.8, 0.5],
    x: [0, Math.cos(i) * 30, Math.sin(i) * 20, 0],
    y: [0, Math.sin(i) * 30, Math.cos(i) * 20, 0],
    transition: {
      duration: 4 + (i % 3) * 0.5,
      repeat: Infinity,
      ease: "linear",
      delay: (i % 4) * 0.5,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// COOL ANIMATIONS FOR THE "A" LOGO
const letterAVariants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    rotateY: 180,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 1.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotateY: -180,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

const outerRingVariants = {
  initial: { rotate: 0, scale: 0.8, opacity: 0 },
  animate: {
    rotate: 360,
    scale: 1,
    opacity: 1,
    transition: {
      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
      scale: { duration: 1, ease: "easeOut" },
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5 },
  },
};

const innerRingVariants = {
  initial: { rotate: 0, scale: 0.6, opacity: 0 },
  animate: {
    rotate: -360,
    scale: 1,
    opacity: 1,
    transition: {
      rotate: { duration: 5, repeat: Infinity, ease: "linear" },
      scale: { duration: 1, ease: "easeOut", delay: 0.1 },
      opacity: { duration: 1, ease: "easeOut", delay: 0.1 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5 },
  },
};

const glowPulseVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: [0, 0.8, 0.3, 0.8, 0],
    scale: [0.5, 1.5, 1, 1.5, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  },
};

const dataPulseVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1.2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const coreSystemVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotateX: 90,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
      duration: 1.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    rotateX: -30,
    filter: "blur(20px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const textContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.0,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.9],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
    },
  },
};

const progressVariants = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: {
      duration: 3.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const cardRightVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particleStyles, setParticleStyles] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const [binaryDigits, setBinaryDigits] = useState([]);

  const dataStreams = [
    { label: "System Load", value: 45, unit: "%", color: "#3b82f6" },
    { label: "Memory Usage", value: 62, unit: "%", color: "#8b5cf6" },
    { label: "Network Speed", value: 850, unit: "Mbps", color: "#06b6d4" },
    { label: "Active Users", value: 1250, unit: "", color: "#10b981" },
    { label: "API Calls", value: "2.4k", unit: "/s", color: "#f59e0b" },
    { label: "Data Processed", value: "1.2", unit: "TB", color: "#ef4444" },
  ];

  useEffect(() => {
    // Generate particle styles only once on the client
    const generateParticles = () => {
      const newParticleStyles = [...Array(30)].map((_, i) => ({
        left: `${(i * 3.33) % 100}%`,
        top: `${(i * 7) % 100}%`,
      }));
      setParticleStyles(newParticleStyles);

      const newDataPoints = [...Array(20)].map((_, i) => ({
        height: 30 + ((i * 2) % 50),
        color: `hsl(${200 + i * 5}, 70%, 60%)`,
      }));
      setDataPoints(newDataPoints);

      const newBinaryDigits = [...Array(20)].map((_, i) => ({
        digit: i % 2 === 0 ? "1" : "0",
        left: `${i * 5}%`,
        delay: i * 0.2,
      }));
      setBinaryDigits(newBinaryDigits);
    };

    generateParticles();

    // Always hide scrollbar when loading
    document.body.style.overflow = "hidden";

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden h-screen w-screen pointer-events-auto"
            variants={loadingOverlayVariants}
            initial="initial"
            exit="exit"
          >
            {/* Full Height Aurora Mesh Background */}
            <div className="absolute inset-0 pointer-events-none h-full w-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[#EEF2FF]">
                <div className="absolute -top-[100px] -left-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-blue-300/60 blur-[120px]" />
                <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-indigo-300/60 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-cyan-200/50 blur-[100px]" />
              </div>
            </div>

            {/* Animated Data Particles */}
            <div className="absolute inset-0 h-full w-full">
              {particleStyles.map((style, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]"
                  style={{ left: style.left, top: style.top }}
                  custom={i}
                  variants={dataParticleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              ))}
            </div>

            {/* Data Visualization Layer */}
            <div className="absolute inset-0 pointer-events-none h-full w-full">
              {/* Left Data Cards */}
              <div className="hidden sm:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 space-y-3 z-20">
                {dataStreams.slice(0, 3).map((data, i) => (
                  <motion.div
                    key={data.label}
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-blue-100 min-w-[140px] md:min-w-[160px]"
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="text-xs md:text-sm text-slate-500 font-medium">
                      {data.label}
                    </div>
                    <div
                      className="text-lg md:text-xl lg:text-2xl font-bold"
                      style={{ color: data.color }}
                    >
                      {data.value}
                      {data.unit}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Data Cards */}
              <div className="hidden sm:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 space-y-3 z-20">
                {dataStreams.slice(3, 6).map((data, i) => (
                  <motion.div
                    key={data.label}
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-indigo-100 min-w-[140px] md:min-w-[160px]"
                    variants={cardRightVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 1.1 + i * 0.1 }}
                  >
                    <div className="text-xs md:text-sm text-slate-500 font-medium">
                      {data.label}
                    </div>
                    <div
                      className="text-lg md:text-xl lg:text-2xl font-bold"
                      style={{ color: data.color }}
                    >
                      {data.value}
                      {data.unit}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Bar Chart */}
              <div className="absolute bottom-16 md:bottom-24 left-0 right-0">
                <div className="flex justify-center items-end gap-0.5 md:gap-1 h-12 md:h-16 px-2 md:px-4">
                  {dataPoints.slice(0, 15).map((point, i) => (
                    <motion.div
                      key={i}
                      className="w-2 md:w-4 rounded-t-sm"
                      style={{
                        height: point.height * 0.6,
                        backgroundColor: point.color,
                        boxShadow: `0 0 10px ${point.color}`,
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Binary Rain Effect */}
              <div className="absolute inset-0 overflow-hidden opacity-3 sm:opacity-5">
                {binaryDigits.map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-[8px] sm:text-xs font-mono text-blue-600"
                    style={{ left: item.left }}
                    initial={{ y: -100 }}
                    animate={{ y: "100vh" }}
                    exit={{ y: "100vh", opacity: 0 }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "linear",
                    }}
                  >
                    {item.digit}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/80 pointer-events-none" />

            {/* Camera Lens Style Borders */}
            <div className="absolute inset-2 sm:inset-4 md:inset-6 lg:inset-8 pointer-events-none">
              <div className="relative w-full h-full">
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-blue-600 to-indigo-600" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-blue-600 to-indigo-600" />
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-blue-600 to-indigo-600" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-blue-600 to-indigo-600" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-blue-600 to-indigo-600" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-blue-600 to-indigo-600" />
                </div>
              </div>
            </div>

            {/* Main Content - Centered with bigger fonts */}
            <div className="relative flex flex-col items-center justify-center min-h-screen h-full w-full px-4">
              <div className="text-center max-w-4xl mx-auto z-10">
                {/* Logo Animation with COOL effects for the "A" */}
                <motion.div
                  className="relative mb-6 sm:mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto"
                  variants={coreSystemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Outer Ring with glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                    variants={outerRingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Rotating glow points */}
                    <motion.div
                      className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_#3b82f6]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_#8b5cf6]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>

                  {/* Inner Ring with reverse rotation */}
                  <motion.div
                    className="absolute inset-4 rounded-full border-2 border-indigo-500/40"
                    variants={innerRingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {/* Data pulse effect */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={dataPulseVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <div className="w-1/2 h-1/2 border border-cyan-400/50 rounded-full" />
                    </motion.div>
                  </motion.div>

                  {/* Glow orbs around the A */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-xl"
                    variants={glowPulseVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  />

                  {/* The "A" with cool animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    variants={letterAVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="relative">
                      {/* Main A with gradient */}
                      <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl relative z-10">
                        A
                      </span>

                      {/* Animated underline/scan line */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Corner accents */}
                      <motion.div
                        className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Floating particles around the A */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      style={{
                        left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 60}%`,
                        top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 60}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Text Animation with bigger fonts */}
                <motion.div
                  variants={textContainerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-2 sm:space-y-3"
                >
                  <motion.div variants={wordVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight">
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        AtoZ SolTech
                      </span>
                    </h1>
                  </motion.div>

                  <motion.div variants={wordVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
                      ATOZ SOLTECH
                    </h2>
                  </motion.div>

                  <motion.div variants={wordVariants}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-500 font-medium">
                      Powering Your Digital Transformation
                    </p>
                  </motion.div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  className="mt-8 sm:mt-10 md:mt-12 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto w-full px-4"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-2.5 sm:h-3 md:h-4 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-full"
                      variants={progressVariants}
                      initial="initial"
                      animate="animate"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-3 sm:mt-4">
                    <p className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                      Loading AtoZ SolTech Platform...
                    </p>
                    <p className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                      {Math.round(progress)}%
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Status Indicators with bigger fonts */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 z-30">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                SYSTEM: READY
              </span>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-30">
              <span className="text-xs sm:text-sm md:text-base font-medium text-slate-400">
                DATA TRANSFER: {Math.round(progress * 2.5)} MB/s
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
