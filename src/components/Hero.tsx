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
        {/* Fine Noise Grain Overlay */}
        <div className="absolute inset-0 premium-noise pointer-events-none opacity-[0.035] mix-blend-overlay" />
        
        {/* Luxury Radial Spotlight Glow - subtle gold-bronze highlighting in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,180,159,0.12)_0%,rgba(7,8,9,0.3)_50%,transparent_100%)] pointer-events-none" />
        
        {/* Technical Blueprint Grid Lines */}
        <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.10]" />
        <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-[0.06]" />

        {/* Structural Steel Border Lines at Viewport Edges */}
        <div className="absolute top-0 left-0 w-full h-px bg-stone/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-stone/30" />
        <div className="absolute top-0 left-0 w-px h-full bg-stone/30" />
        <div className="absolute top-0 right-0 w-px h-full bg-stone/30" />

        {/* Technical Architectural Crosshairs in the Corners */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/[0.08]" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/[0.08]" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-white/[0.08]" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-white/[0.08]" />
        
        {/* Precision blueprint "+" marks */}
        <div className="absolute top-8 left-8 -translate-x-[4px] -translate-y-[4px] font-mono text-[9px] text-bronze/30 font-light pointer-events-none">+</div>
        <div className="absolute top-8 right-8 translate-x-[4px] -translate-y-[4px] font-mono text-[9px] text-bronze/30 font-light pointer-events-none">+</div>
        <div className="absolute bottom-8 left-8 -translate-x-[4px] translate-y-[4px] font-mono text-[9px] text-bronze/30 font-light pointer-events-none">+</div>
        <div className="absolute bottom-8 right-8 translate-x-[4px] translate-y-[4px] font-mono text-[9px] text-bronze/30 font-light pointer-events-none">+</div>
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
          <div className="hidden lg:flex hero-top-badge items-center gap-3 border border-white/[0.08] bg-charcoal/80 p-2 px-5 backdrop-blur-md shadow-2xl mb-5 sm:mb-6 rounded-none relative tech-hud-brackets">
            {/* Liquid Platinum active indicator LED */}
            <div className="w-1.5 h-1.5 bg-white/95 rounded-full shrink-0 animate-led-flicker" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-300 uppercase font-bold">
              MASTER COACHBUILDERS
            </span>
          </div>

          {/* Massive Centered Title - Scaled to fit perfectly on a single line on all displays */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold tracking-[0.05em] sm:tracking-[0.08em] text-white uppercase mb-2 sm:mb-3 leading-[0.9] select-text shimmer-text w-full text-center whitespace-nowrap">
            SURENDRA & CO.
          </h1>
          
          {/* Re-engineered Editorial Tagline Division - Sandblasted Titanium & Liquid Platinum */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 font-mono text-[9px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] uppercase font-bold bg-[#070809]/80 border border-white/[0.08] px-5 sm:px-8 py-2.5 sm:py-3.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] mt-3 sm:mt-4 max-w-[90vw] sm:max-w-none flex-wrap select-text rounded-none relative tech-hud-brackets">
            <span className="text-bronze">ESTD. 1984</span>
            <span className="text-white/20 font-light">|</span>
            <span className="text-white">MASTER COACHBUILDERS</span>
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
