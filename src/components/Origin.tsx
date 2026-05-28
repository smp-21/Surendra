"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Origin() {
  return (
    <section 
      id="origin" 
      className="relative h-full w-full select-none overflow-hidden"
    >
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex h-full w-full items-center md:items-end justify-center md:justify-start px-4 md:px-16 lg:px-20 py-8 lg:py-12">
        <Link href="/heritage" className="pointer-events-auto block cursor-pointer group">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-charcoal/65 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 lg:p-12 w-fit max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-[4px] shadow-2xl transition-all duration-500 group-hover:border-bronze/40 group-hover:bg-[#070809]/80 group-hover:shadow-[0_20px_50px_rgba(197,180,159,0.05)] relative tech-hud-brackets"
          >
            <div className="flex items-center justify-between gap-8 mb-4">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-bronze uppercase font-bold block">
                Est. 1984
              </span>
              <span className="font-mono text-[9px] text-zinc-500 group-hover:text-bronze tracking-[0.2em] transition-colors duration-300 uppercase">
                Explore →
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.04em] uppercase text-white leading-[0.95] mb-3 sm:mb-4 group-hover:text-bronze transition-colors duration-300">
              Heritage
            </h2>
            <p className="text-zinc-200 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
              Four decades of engineered precision<br />and structural trust.
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Mobile Split Layout (Top: Heading, Bottom: Details) */}
      <div className="flex md:hidden h-full w-full flex-col justify-between py-8 px-6 relative">
        {/* Left & Right HUD margin lines */}
        <div className="absolute top-0 left-4 bottom-0 w-px bg-white/[0.03] pointer-events-none" />
        <div className="absolute top-0 right-4 bottom-0 w-px bg-white/[0.03] pointer-events-none" />

        <Link href="/heritage" className="pointer-events-auto block cursor-pointer group w-full h-full flex flex-col justify-between">
          
          {/* Top: Eyebrow + Heading */}
          <div className="flex-1 flex flex-col justify-center items-center px-2">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.8 }}
              className="w-full bg-[#070809]/45 border border-white/[0.06] p-5 backdrop-blur-md rounded-none relative tech-hud-brackets shadow-[0_10px_35px_rgba(0,0,0,0.6)] group-hover:border-bronze/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
                <span className="font-mono text-[9px] tracking-[0.2em] text-bronze uppercase font-bold">
                  Est. 1984
                </span>
                <span className="font-mono text-[7px] text-zinc-500 tracking-wider">
                  SECTION // 02
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light tracking-[0.06em] uppercase text-white leading-none group-hover:text-bronze transition-colors duration-300">
                Heritage
              </h2>
            </motion.div>
          </div>

          {/* Middle Container (Framing overlay around contained canvas frames) */}
          <div className="w-full aspect-video relative shrink-0 my-4 pointer-events-none flex items-center justify-center">
            {/* Corner Crosshairs */}
            <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t border-l border-bronze/35" />
            <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-bronze/35" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-bronze/35" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b border-r border-bronze/35" />

            {/* Target Reticle Crosshair */}
            <div className="absolute w-6 h-6 border border-dashed border-white/[0.04] rounded-full" />
            
            {/* Subtle technical dashed container framing */}
            <div className="absolute inset-0 border border-dashed border-bronze/10" />
            
            {/* HUD Status labels */}
            <div className="absolute top-2 left-3 font-mono text-[7px] text-bronze/35 tracking-wider uppercase">HUD_SYS // COMMENCE</div>
            <div className="absolute bottom-2 right-3 font-mono text-[7px] text-bronze/35 tracking-wider uppercase font-bold">CAM // 02</div>
          </div>

          {/* Bottom: Description + Link */}
          <div className="flex-1 flex flex-col justify-center items-center px-2">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.8 }}
              className="w-full bg-[#070809]/45 border border-white/[0.06] p-5 backdrop-blur-md rounded-none relative tech-hud-brackets shadow-[0_10px_35px_rgba(0,0,0,0.6)] group-hover:border-bronze/40 transition-all duration-300"
            >
              <p className="text-zinc-200 text-[13px] font-light tracking-wide leading-relaxed mb-4 text-center">
                Four decades of engineered precision and structural trust.
              </p>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-white bg-bronze/15 border border-bronze/40 hover:bg-bronze hover:text-charcoal px-5 py-2.5 transition-all duration-300 uppercase font-bold">
                  Explore Section <span className="text-bronze group-hover:text-current font-sans font-bold">→</span>
                </span>
              </div>
            </motion.div>
          </div>

        </Link>
      </div>
    </section>
  );
}
