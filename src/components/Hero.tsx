"use client";

import React from "react";
import { motion } from "framer-motion";
import { HERO_COPY } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center p-8 md:p-16 select-none overflow-hidden"
    >
      {/* Centered Brand Mark - Elite B2B Identity */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl"
        >
          {/* Bronze Technical Node Badge */}
          <div className="flex items-center gap-3 border border-stone/30 bg-charcoal/85 p-3 px-5 backdrop-blur-md shadow-2xl mb-8">
            {/* Bronze square node block mimicking the brand marker */}
            <div className="w-2.5 h-2.5 bg-bronze shrink-0 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.15em] text-steel-light uppercase font-bold">
              MASTER COACHBUILDERS
            </span>
          </div>

          {/* Massive Centered Title */}
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.08em] text-white uppercase mb-4 leading-[0.9] select-text shimmer-text">
            SURENDRA & CO.
          </h1>
          
          {/* Sub-Tagline matching the exact image text - Elevated for 100% Visibility */}
          <div className="flex items-center justify-center gap-4 font-mono text-xs sm:text-sm tracking-[0.15em] uppercase font-bold bg-charcoal/75 border border-stone/40 px-6 py-3 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.85)] mt-4 select-text">
            <span className="text-bronze">ESTD. 1984</span>
            <span className="text-stone/50">/</span>
            <span className="text-ivory">MASTER COACHBUILDERS</span>
          </div>
          
          <p className="max-w-lg text-steel-light text-xs tracking-[0.12em] font-mono uppercase mt-8 leading-relaxed text-shadow-subtle">
            PREMIUM SCROLL-CINEMATIC INDUSTRIAL EXPERIENCE
          </p>
        </motion.div>
      </div>

      {/* Lower Margins: Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-10 pointer-events-none">
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[8px] tracking-[0.25em] text-steel/60 uppercase">
            Scroll to Commence
          </span>
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-6 bg-bronze/70"
          />
        </div>
      </div>
    </section>
  );
}
