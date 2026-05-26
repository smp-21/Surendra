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
          ? "bg-[#070809]/85 backdrop-blur-xl border-white/[0.08] py-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          : "bg-gradient-to-b from-[#070809]/85 via-[#070809]/35 to-transparent py-7 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between w-full">
        {/* Left: Brand Logo Container - Pinned to far left */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex flex-col group select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] shrink-0 whitespace-nowrap">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-serif text-lg tracking-[0.18em] uppercase transition-colors duration-300 group-hover:text-bronze font-bold text-shadow-premium leading-none">
                SURENDRA & CO.
              </span>
            </div>
            <span className="text-[8px] font-mono text-zinc-300 tracking-[0.25em] uppercase mt-1.5 group-hover:text-white transition-colors duration-300 text-shadow-subtle font-bold leading-none">
              ESTD. 1984 // MASTER COACHBUILDERS
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation - Perfectly centered and spacious */}
        <div className="hidden lg:flex items-center justify-center gap-10 font-mono text-[9px] tracking-[0.2em] uppercase font-bold text-zinc-300 text-shadow-subtle flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-zinc-200 hover:text-white transition-colors duration-300 py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-bronze origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Right: CTA Button Container - Pinned to far right */}
        <div className="flex-1 flex justify-end">
          <a
            href="/commission"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg border border-white/20 bg-charcoal/45 backdrop-blur-sm hover:border-bronze hover:bg-bronze/10 hover:text-white text-[9px] text-white tracking-[0.25em] font-bold uppercase transition-all duration-500 shadow-xl cursor-pointer font-mono text-shadow-subtle whitespace-nowrap"
          >
            <span>Bespoke Commission</span>
            <Mail className="w-3 h-3 text-zinc-350 group-hover:text-bronze transition-colors duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white border border-white/[0.1] bg-white/[0.02] transition-all duration-300 rounded-lg cursor-pointer"
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
            className="lg:hidden absolute top-full left-0 w-full bg-[#070809]/95 backdrop-blur-2xl border-b border-white/[0.08]"
          >
            <div className="px-6 py-8 flex flex-col gap-4 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/[0.04] text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
                >
                  <span>{link.name}</span>
                  <span className="text-bronze text-[9px]">// EXPLORE</span>
                </a>
              ))}
              <a
                href="/commission"
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 border border-bronze bg-bronze/5 text-center text-[10px] font-bold tracking-[0.2em] text-white hover:bg-bronze hover:text-[#070809] transition-all duration-500 rounded-lg uppercase"
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
