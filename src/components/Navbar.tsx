"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Heritage", href: "/heritage" },
    { name: "Coach Range", href: "/range" },
    { name: "Services", href: "/services" },
    { name: "Rigour", href: "/process" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#0B0F19]/95 backdrop-blur-xl border-white/[0.08] py-4 shadow-[0_10px_35px_rgba(0,0,0,0.2)]"
          : "bg-gradient-to-b from-charcoal/90 via-charcoal/20 to-transparent py-7 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between w-full">
        {/* Left: Brand Logo Container - Pinned to far left */}
        <div className="flex-1 flex justify-start min-w-0">
          <a href="/" className="flex flex-col group select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] shrink-0 whitespace-nowrap">
            <div className="flex items-baseline gap-2">
              <span className={`font-serif text-sm sm:text-base md:text-lg tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-bronze font-bold leading-none ${
                scrolled ? "text-white" : "text-ivory"
              }`}>
                SURENDRA & CO.
              </span>
            </div>
            <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-sans tracking-[0.08em] sm:tracking-[0.1em] uppercase mt-1.5 transition-colors duration-300 font-medium leading-none ${
              scrolled ? "text-slate-400 group-hover:text-white" : "text-slate-400 group-hover:text-ivory"
            }`}>
              ESTD. 1984 &nbsp;|&nbsp; MASTER COACHBUILDERS
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation - Perfectly centered and spacious */}
        <div className="hidden lg:flex items-center justify-center lg:gap-7 xl:gap-14 font-sans text-[11px] lg:text-[12px] tracking-[0.12em] uppercase font-medium flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-colors duration-300 py-1 group ${
                scrolled ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-ivory"
              }`}
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-bronze origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Right: CTA Button Container - Pinned to far right */}
        <div className="hidden sm:flex flex-1 justify-end">
          <a
            href="/commission"
            className={`inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg border backdrop-blur-sm hover:border-bronze hover:bg-bronze/5 transition-all duration-500 shadow-xl cursor-pointer font-sans whitespace-nowrap text-xs font-medium uppercase ${
              scrolled
                ? "border-white/[0.12] bg-white/[0.04] text-white hover:text-white"
                : "border-black/[0.12] bg-black/[0.04] text-ivory hover:text-ivory"
            }`}
          >
            <span>Bespoke Commission</span>
            <Mail className="w-3 h-3 text-zinc-350 group-hover:text-bronze transition-colors duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-all duration-300 rounded-lg cursor-pointer border ${
            scrolled
              ? "text-slate-300 hover:text-white border-white/[0.10] bg-white/[0.02]"
              : "text-slate-400 hover:text-ivory border-black/[0.10] bg-black/[0.02]"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/[0.08]"
          >
            <div className="px-6 sm:px-8 py-6 flex flex-col gap-2 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-white/[0.04] text-slate-300 hover:text-white active:text-bronze transition-all duration-300 uppercase tracking-[0.08em] text-lg"
                >
                  <span>{link.name}</span>
                  <span className="text-bronze/50 text-[10px] tracking-wider">// EXPLORE</span>
                </a>
              ))}
              <a
                href="/commission"
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full flex items-center justify-center gap-2.5 py-4 border border-bronze bg-bronze/5 text-center text-base font-medium tracking-wider text-white hover:bg-bronze hover:text-white active:scale-[0.98] transition-all duration-500 rounded-lg uppercase"
              >
                <span>Bespoke Commission</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
