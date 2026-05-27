"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section 
      id="range" 
      className="relative h-full w-full flex items-center justify-center sm:justify-end px-4 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-8 lg:py-12 select-none overflow-hidden"
    >
      <Link href="/range" className="pointer-events-auto block cursor-pointer group">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-charcoal/65 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 lg:p-12 w-fit max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-[4px] shadow-2xl transition-all duration-500 group-hover:border-bronze/40 group-hover:bg-[#070809]/80 group-hover:shadow-[0_20px_50px_rgba(197,180,159,0.05)] text-right relative tech-hud-brackets"
        >
          <div className="flex items-center justify-between gap-8 mb-4">
            <span className="font-mono text-[9px] text-zinc-500 group-hover:text-bronze tracking-[0.2em] transition-colors duration-300 uppercase">
              Explore →
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-bronze uppercase font-bold block">
              Product Lineup
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.04em] uppercase text-white leading-[0.95] mb-3 sm:mb-4 group-hover:text-bronze transition-colors duration-300">
            Coach<br />Range
          </h2>
          <p className="text-zinc-200 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
            Custom heavy coaches built on<br />certified Volvo chassis platforms.
          </p>
        </motion.div>
      </Link>
    </section>
  );
}
