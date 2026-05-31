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
      {/* Premium Rich Texture Solid Background for First Screen */}
      <div 
        className="absolute inset-0 z-0 bg-charcoal pointer-events-none select-none overflow-hidden"
      >

        
        {/* Luxury Radial Spotlight Glow - subtle gold-bronze highlighting in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,111,78,0.08)_0%,rgba(245,243,240,0.3)_50%,transparent_100%)] pointer-events-none" />
        





      </div>

      {/* Centered Brand Mark - Elite B2B Identity */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl"
        >
          {/* Premium Titanium Technical Badge - High Precision HUD */}
          <div className="hidden lg:flex hero-top-badge items-center gap-3 border border-black/[0.04] bg-white/75 p-2 px-5 backdrop-blur-md shadow-lg mb-5 sm:mb-6 rounded-lg">
            {/* Liquid Platinum active indicator LED */}
            <div className="w-1 h-1 bg-bronze/50 rounded-full shrink-0" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.12em] text-slate-400 uppercase font-medium">
              MASTER COACHBUILDERS
            </span>
          </div>

          {/* Massive Centered Title - Scaled to fit perfectly on a single line on all displays */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold tracking-[0.03em] sm:tracking-[0.06em] text-ivory uppercase mb-2 sm:mb-3 leading-[0.9] select-text shimmer-text w-full text-center whitespace-nowrap">
            SURENDRA & CO.
          </h1>
          
          {/* Re-engineered Editorial Tagline Division - Sandblasted Titanium & Liquid Platinum */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.14em] uppercase font-medium bg-white/85 border border-black/[0.04] px-5 sm:px-8 py-2.5 sm:py-3.5 backdrop-blur-xl shadow-md mt-3 sm:mt-4 max-w-[90vw] sm:max-w-none flex-wrap select-text rounded-lg">
            <span className="text-bronze">ESTD. 1984</span>
            <span className="text-ivory/20 font-light">|</span>
            <span className="text-ivory">MASTER COACHBUILDERS</span>
          </div>
          
        </motion.div>
      </div>

      {/* Lower Margins: Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10 pointer-events-none">
        <div className="flex flex-col items-start gap-1.5 sm:gap-2">
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] text-steel/40 uppercase">
            Scroll to Commence
          </span>
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-4 sm:h-6 bg-bronze/40"
          />
        </div>
      </div>
    </section>
  );
}
