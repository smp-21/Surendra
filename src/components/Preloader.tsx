"use client";

import React from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  progress: number;
  activeBatch: number;
  totalBatches: number;
}

export default function Preloader({ progress, activeBatch, totalBatches }: PreloaderProps) {
  const percentage = Math.round(progress * 100);

  return (
    <motion.div
      key="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal text-ivory select-none overflow-hidden"
    >
      {/* Soft radial warmth from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,144,112,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* Central Brand Reveal */}
      <div className="flex flex-col items-center text-center relative z-10 gap-5">
        
        {/* Eyebrow — "ESTD. 1984" */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-normal"
        >
          ESTD. 1984
        </motion.span>

        {/* Main Title — cinematic fade and rise */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.06em] text-white leading-none"
        >
          SURENDRA & CO.
        </motion.h1>

        {/* Sub-label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze/40 font-normal"
        >
          MASTER COACHBUILDERS
        </motion.span>

        {/* Minimal horizontal progress line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="w-48 sm:w-64 mt-6"
        >
          {/* Track */}
          <div className="w-full h-[1px] bg-white/[0.06] rounded-full overflow-hidden">
            {/* Fill */}
            <motion.div
              className="h-full bg-bronze/40 rounded-full"
              style={{ width: `${percentage}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </div>
          {/* Percentage — tiny, beneath the line */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block text-center font-sans text-[9px] text-zinc-600 tracking-wider mt-3 font-normal"
          >
            {percentage}%
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom copyright — extremely subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.4, ease: "easeOut" }}
        className="absolute bottom-8 left-0 right-0 text-center text-[9px] font-sans text-zinc-700 tracking-wider"
      >
        © {new Date().getFullYear()} Surendra & Co.
      </motion.div>
    </motion.div>
  );
}
