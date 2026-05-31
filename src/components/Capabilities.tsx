"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Capabilities() {
  return (
    <section 
      id="services" 
      className="relative h-full w-full select-none overflow-hidden"
    >
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex h-full w-full items-center justify-center md:justify-start px-4 md:px-16 lg:px-20 py-8 lg:py-12">
        <Link href="/services" className="pointer-events-auto block cursor-pointer group">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white/80 border border-black/[0.05] backdrop-blur-xl p-6 sm:p-10 lg:p-12 w-fit max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl shadow-lg transition-all duration-500 group-hover:border-bronze/40 group-hover:bg-white/85 group-hover:shadow-lg relative"
          >
            <div className="flex items-center justify-between gap-8 mb-4">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-wider text-bronze uppercase font-bold block">
                Expertise
              </span>
              <span className="font-sans text-[10px] text-slate-400 group-hover:text-bronze tracking-wider transition-colors duration-300 uppercase">
                Explore →
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.04em] uppercase text-ivory leading-[0.95] mb-3 sm:mb-4 group-hover:text-bronze transition-colors duration-300">
              Engineering<br />Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
              Heavy-duty fabrication, stress testing,<br />and precision sheet metalwork.
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Mobile Split Layout (Top: Heading, Bottom: Details) */}
      <div className="flex md:hidden h-full w-full flex-col justify-between py-8 px-6 relative">


        <Link href="/services" className="pointer-events-auto block cursor-pointer group w-full h-full flex flex-col justify-between">
          
          {/* Top: Eyebrow + Heading */}
          <div className="flex-1 flex flex-col justify-center items-center px-2">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.8 }}
              className="w-full bg-white/60 border border-black/[0.06] p-5 backdrop-blur-md rounded-xl relative shadow-lg group-hover:border-bronze/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-2 mb-3">
                <span className="font-sans text-[10px] tracking-wider text-bronze uppercase font-bold">
                  Expertise
                </span>
                <span className="font-sans text-[8px] text-slate-400 tracking-wider">
                  SECTION // 04
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light tracking-[0.06em] uppercase text-ivory leading-none group-hover:text-bronze transition-colors duration-300">
                Engineering Services
              </h2>
            </motion.div>
          </div>

          {/* Middle Container (Framing overlay around contained canvas frames) */}
          <div className="w-full aspect-video relative shrink-0 my-4 pointer-events-none flex items-center justify-center">
          </div>

          {/* Bottom: Description + Link */}
          <div className="flex-1 flex flex-col justify-center items-center px-2">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-5%" }}
              transition={{ duration: 0.8 }}
              className="w-full bg-white/60 border border-black/[0.06] p-5 backdrop-blur-md rounded-xl relative shadow-lg group-hover:border-bronze/40 transition-all duration-300"
            >
              <p className="text-slate-600 text-sm font-light tracking-wide leading-relaxed mb-4 text-center">
                Heavy-duty fabrication, stress testing, and precision sheet metalwork.
              </p>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 font-sans text-[10px] tracking-wider text-ivory bg-bronze/15 border border-bronze/40 hover:bg-bronze hover:text-white px-5 py-2.5 transition-all duration-300 uppercase font-bold">
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
