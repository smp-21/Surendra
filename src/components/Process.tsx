"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Process() {
  return (
    <section 
      id="process" 
      className="relative h-full w-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 select-none overflow-hidden"
    >
      <Link href="/process" className="pointer-events-auto block cursor-pointer group">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-charcoal/75 border border-white/[0.15] backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 w-fit max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-[24px] shadow-2xl transition-all duration-500 group-hover:border-bronze/60 group-hover:bg-charcoal/85 group-hover:shadow-[0_20px_50px_rgba(163,144,115,0.15)] text-center"
        >
          <div className="flex items-center justify-between gap-8 mb-3">
            <span className="font-mono text-xs tracking-[0.15em] text-bronze uppercase font-semibold block">
              Methodology
            </span>
            <span className="font-mono text-[9px] text-zinc-500 group-hover:text-bronze tracking-[0.15em] transition-colors duration-300 uppercase">
              Explore →
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.04em] uppercase text-white leading-[0.95] mb-3 group-hover:text-bronze transition-colors duration-300">
            Blueprint<br />to Delivery
          </h2>
          <p className="text-zinc-200 text-lg sm:text-xl font-light tracking-wide leading-relaxed">
            From raw steel to road-ready fleet —<br />every weld supervised, every axle calibrated.
          </p>
        </motion.div>
      </Link>
    </section>
  );
}
