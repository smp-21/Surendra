"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, HardHat, Cpu } from "lucide-react";

interface PreloaderProps {
  onComplete: (images: HTMLImageElement[]) => void;
}

const TOTAL_FRAMES = 482;
const BATCH_SIZE = 40;

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [activeBatch, setActiveBatch] = useState(1);
  const totalBatches = Math.ceil(TOTAL_FRAMES / BATCH_SIZE);

  useEffect(() => {
    let active = true;

    const loadFrames = async () => {
      const imagesArray: HTMLImageElement[] = new Array(TOTAL_FRAMES);
      let loadedCount = 0;

      const indices = Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1);

      for (let i = 0; i < indices.length; i += BATCH_SIZE) {
        if (!active) return;
        const currentBatchIndex = Math.floor(i / BATCH_SIZE) + 1;
        setActiveBatch(currentBatchIndex);

        const batch = indices.slice(i, i + BATCH_SIZE);

        await Promise.all(
          batch.map((index) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              const frameNum = String(index).padStart(3, "0");
              img.src = `/frames/frame_${frameNum}.webp`;
              
              img.onload = () => {
                imagesArray[index - 1] = img;
                loadedCount++;
                setProgress(Math.min(loadedCount / TOTAL_FRAMES, 1));
                resolve();
              };

              img.onerror = () => {
                imagesArray[index - 1] = img;
                loadedCount++;
                setProgress(Math.min(loadedCount / TOTAL_FRAMES, 1));
                resolve();
              };
            });
          })
        );
      }

      if (active) {
        setTimeout(() => {
          onComplete(imagesArray);
        }, 800);
      }
    };

    loadFrames();

    return () => {
      active = false;
    };
  }, [onComplete]);

  const percentage = Math.round(progress * 100);

  const getLoadingPhase = (pct: number) => {
    if (pct < 15) return "ESTABLISHING ACQUISITIONS CHANNEL";
    if (pct < 35) return "INSPECTING CHASSIS MOUNT POINTS";
    if (pct < 55) return "FABRICATING PASSENGER GRID STRUCTURE";
    if (pct < 75) return "CALIBRATING VOLVO AXLE DYNAMICS";
    if (pct < 95) return "SECURING ACCREDITED REGULATORY LEDGER";
    return "CALIBRATION COMPLETE // CACHE LOCK SECURED";
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#070809] text-ivory p-8 md:p-16 select-none overflow-hidden">
      {/* Dynamic Laser Coordinate Scanner Line */}
      <motion.div 
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-bronze/40 to-transparent pointer-events-none z-20 shadow-[0_0_8px_#a39073]"
      />

      {/* Structural Tech Grid Lines */}
      <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-40" />
      <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none" />

      {/* Top Header Row */}
      <div className="w-full max-w-7xl flex items-center justify-between border-b border-white/[0.08] pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-bronze animate-pulse rounded-full" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-bold">
            SURENDRA & CO. // INITIALIZING FABRICATION RUNWAY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] p-1 px-2.5 rounded-full">
            <Cpu className="w-3 h-3 text-bronze" />
            <span>GPU_ACCEL: TRUE</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] p-1 px-2.5 rounded-full">
            <ShieldCheck className="w-3 h-3 text-bronze" />
            <span>ESTD. 1984</span>
          </div>
        </div>
      </div>

      {/* Centerpiece: Dynamic Circular Technical Dial & Shimmer Branding */}
      <div className="flex flex-col items-center text-center max-w-2xl my-auto relative z-10 gap-6">
        
        {/* Dynamic Circular Dashboard Progress Dial */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-2 flex items-center justify-center">
          
          {/* Inner Frosted Glass Orb */}
          <div className="absolute inset-2 bg-stone/60 rounded-full border border-white/[0.12] backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl transition-all duration-300">
            <motion.span 
              key={percentage}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-serif text-5xl md:text-6xl font-light tracking-[0.02em] text-white"
            >
              {percentage}%
            </motion.span>
            <span className="font-mono text-[7px] md:text-[8px] text-bronze tracking-[0.25em] uppercase font-bold mt-1.5">
              {percentage === 100 ? "COMPLETE" : "CACHING"}
            </span>
          </div>
          
          {/* Premium Circular Progress SVG - mathematically scaled using viewBox to prevent clipping */}
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Background static circle track */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-white/[0.04]"
              strokeWidth="2"
              fill="transparent"
            />
            {/* Active animated stroke progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-bronze"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray="283"
              animate={{ strokeDashoffset: 283 - (283 * progress) }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </svg>
        </div>

        <div className="flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-[9px] tracking-[0.35em] uppercase text-bronze mb-3 font-semibold"
          >
            MASTER COACHBUILDERS
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.18em] text-white leading-none shimmer-text select-text"
          >
            SURENDRA & CO.
          </motion.h1>
        </div>

        {/* Dynamic Fabrication Pipeline Checkoffs */}
        <div className="w-80 sm:w-96 flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between font-mono text-[9px] border-b border-white/[0.06] pb-1.5">
            <span className="text-zinc-400 uppercase tracking-widest">
              ACTIVE_PHASE:
            </span>
            <motion.span 
              key={percentage}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-bronze font-bold tracking-widest text-right"
            >
              {getLoadingPhase(percentage)}
            </motion.span>
          </div>
          <div className="flex justify-between font-mono text-[8px] text-zinc-500 tracking-wider">
            <span>MEM_LOCK: CACHED</span>
            <span>BATCH_{activeBatch}/{totalBatches}</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Status */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.08] pt-6 relative z-10 text-[9px] font-mono text-zinc-400">
        <div className="flex items-center gap-3.5 mb-3 sm:mb-0">
          <Terminal className="w-3.5 h-3.5 text-bronze" />
          <span className="tracking-widest">
            {percentage < 100 
              ? `STREAMING_FABRICATOR_WEBP: frame_${String(Math.floor(progress * TOTAL_FRAMES)).padStart(3, "0")}.webp`
              : "ALL STRUCTURAL ASSETS CACHED"
            }
          </span>
        </div>
        <span className="tracking-[0.2em] text-zinc-500">
          © {new Date().getFullYear()} SURENDRA & CO. // REGISTERED LEDGER B2B
        </span>
      </div>
    </div>
  );
}
