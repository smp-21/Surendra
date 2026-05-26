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
          {/* Bronze Technical Node Badge - Hidden on small screen heights & mobile to prevent vertical collision */}
          <div className="hidden lg:flex hero-top-badge items-center gap-2 sm:gap-3 border border-stone/30 bg-charcoal/85 p-2 sm:p-3 px-4 sm:px-5 backdrop-blur-md shadow-2xl mb-4 sm:mb-6">
            {/* Bronze square node block mimicking the brand marker */}
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-bronze shrink-0 animate-led-flicker" />
            <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.15em] text-steel-light uppercase font-bold">
              MASTER COACHBUILDERS
            </span>
          </div>

          {/* Massive Centered Title - Scaled to fit perfectly on a single line on all displays */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold tracking-[0.05em] sm:tracking-[0.08em] text-white uppercase mb-2 sm:mb-3 leading-[0.9] select-text shimmer-text w-full text-center whitespace-nowrap">
            SURENDRA & CO.
          </h1>
          
          {/* Sub-Tagline matching the exact image text - Elevated for 100% Visibility */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono text-[9px] sm:text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase font-bold bg-charcoal/45 border border-stone/40 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.85)] mt-2 sm:mt-3 max-w-[90vw] sm:max-w-none flex-wrap select-text rounded-lg">
            <span className="text-bronze">ESTD. 1984</span>
            <span className="text-stone/50">/</span>
            <span className="text-ivory">MASTER COACHBUILDERS</span>
          </div>
          
        </motion.div>
      </div>

      {/* Lower Margins: Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10 pointer-events-none">
        <div className="flex flex-col items-start gap-1.5 sm:gap-2">
          <span className="font-mono text-[7px] sm:text-[8px] tracking-[0.25em] text-steel/60 uppercase">
            Scroll to Commence
          </span>
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-4 sm:h-6 bg-bronze/70"
          />
        </div>
      </div>
    </section>
  );
}
