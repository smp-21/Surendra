"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home Cinematic", href: "#home" },
    { label: "Heritage Brief", href: "#origin" },
    { label: "Coach Range", href: "#range" },
    { label: "Engineering Services", href: "#services" },
    { label: "Methodology", href: "#process" },
    { label: "Certifications", href: "#compliance" },
  ];

  return (
    <footer className="relative bg-[#070809] border-t border-white/[0.08] pt-28 pb-12 overflow-hidden z-20">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.12]" />
      <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-[0.08]" />

      {/* Technical Blueprint Accent Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-6 px-5 py-1 bg-[#070809] border-x border-b border-white/[0.08] font-mono text-[8px] tracking-[0.3em] text-bronze uppercase rounded-none relative tech-hud-brackets">
        <span>HQ Z-3</span>
        <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-led-flicker" />
        <span>12.9716° N, 77.5946° E</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Core Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          
          {/* Column 1: The Cornerstone Brand Info - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline gap-2 select-none">
                <span className="text-white font-serif text-xl tracking-[0.18em] uppercase font-bold">
                  SURENDRA & CO.
                </span>
              </div>
              <p className="font-serif text-lg text-zinc-300 tracking-wide leading-relaxed font-light max-w-sm">
                Four decades of engineered precision. We forge the fleets that define industrial strength and structural reliability.
              </p>
            </div>

            <div className="mt-8 lg:mt-16 flex flex-col gap-2.5 font-mono text-[10px] text-zinc-500 tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-led-flicker" />
                <span className="text-zinc-400">CENTRAL LEDGER ACTIVE</span>
              </div>
              <span>REG. HQ // STEELWORKS ZONE 3 // IN</span>
            </div>
          </div>

          {/* Column 2: Directory - Spans 3 columns */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-mono text-[10px] text-bronze tracking-[0.25em] uppercase font-bold">
              // DIRECTORY
            </h4>
            <div className="flex flex-col gap-3 font-mono text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 py-0.5 group"
                  style={{
                    opacity: hoveredLink !== null && hoveredLink !== idx ? 0.45 : 1,
                    transition: "opacity 0.3s ease, color 0.3s ease",
                  }}
                >
                  <span className="text-[10px] text-bronze group-hover:translate-x-1 transition-transform duration-300">
                    {`0${idx + 1}`}
                  </span>
                  <span className="text-zinc-600 group-hover:text-bronze-dark transition-colors duration-300">//</span>
                  <span className="tracking-widest uppercase font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-mono text-[10px] text-bronze tracking-[0.25em] uppercase font-bold">
              // ACQUISITIONS
            </h4>
            <div className="flex flex-col gap-5 text-xs">
              <div className="flex flex-col gap-1.5 text-zinc-400">
                <span className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase">DIRECT LINE</span>
                <a href="tel:+919845551984" className="font-mono hover:text-bronze transition-colors duration-300">
                  +91 984 555 1984
                </a>
              </div>
              <div className="flex flex-col gap-1.5 text-zinc-400">
                <span className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase">SECURE MAIL</span>
                <a href="mailto:acquisitions@surendraco.com" className="font-mono hover:text-bronze transition-colors duration-300 break-all text-[11px]">
                  acquisitions@surendraco.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-mono text-[10px] text-bronze tracking-[0.25em] uppercase font-bold">
              // COMPLIANCE
            </h4>
            <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
              <a href="/privacy" className="hover:text-bronze transition-colors duration-300 uppercase tracking-wider text-[10px]">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-bronze transition-colors duration-300 uppercase tracking-wider text-[10px]">
                Cookie Directives
              </a>
              <a href="/terms" className="hover:text-bronze transition-colors duration-300 uppercase tracking-wider text-[10px]">
                Terms of Engagement
              </a>
              <a href="/compliance" className="hover:text-bronze transition-colors duration-300 uppercase tracking-wider text-[10px]">
                Regulatory Validation
              </a>
            </div>
          </div>

        </div>

        {/* Technical B2B Directory & Site Index Map */}
        <div className="mt-16 pt-12 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section 1: Commercial Hubs */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-[9px] text-bronze tracking-[0.25em] uppercase font-bold">// COMMERCIAL DIRECTIVES</h5>
            <div className="flex flex-col gap-2.5 font-mono text-[10px] text-zinc-400">
              <a href="/bus-body-builders-india" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Bus Body Builders India</a>
              <a href="/bus-hardware-manufacturers" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Bus Hardware Suppliers</a>
            </div>
          </div>

          {/* Section 2: Specialty Engineering */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-[9px] text-bronze tracking-[0.25em] uppercase font-bold">// SPECIALIZED BUILDING</h5>
            <div className="flex flex-col gap-2.5 font-mono text-[10px] text-zinc-400">
              <a href="/luxury-bus-builders" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Luxury Coach Customizers</a>
              <a href="/school-bus-manufacturers" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">High-Security School Buses</a>
            </div>
          </div>

          {/* Section 3: Tech Fabrication */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-[9px] text-bronze tracking-[0.25em] uppercase font-bold">// WORKSHOP PROCESSES</h5>
            <div className="flex flex-col gap-2.5 font-mono text-[10px] text-zinc-400">
              <a href="/bus-body-fabrication" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Bus Body Fabrication</a>
              <a href="/custom-bus-interiors" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Custom Cabin Interiors</a>
            </div>
          </div>

          {/* Section 4: Programmatic Local Hubs */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-[9px] text-bronze tracking-[0.25em] uppercase font-bold">// REGIONAL DISPATCH</h5>
            <div className="flex flex-col gap-2.5 font-mono text-[10px] text-zinc-400">
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                <a href="/bus-body-builders-in-mumbai" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Mumbai</a>
                <span className="text-zinc-700">//</span>
                <a href="/bus-body-builders-in-delhi" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Delhi NCR</a>
                <span className="text-zinc-700">//</span>
                <a href="/bus-body-builders-in-pune" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Pune</a>
                <span className="text-zinc-700">//</span>
                <a href="/bus-body-builders-in-bangalore" className="hover:text-white transition-colors duration-300 uppercase tracking-wider">Bangalore</a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Giant Watermark Outside max-w-7xl to span the entire screen width (100vw) without clipping */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-6 py-2">
        <span className="block font-serif text-[9.5vw] leading-none text-center font-bold tracking-[0.12em] text-white uppercase animate-silent-roar">
          SURENDRA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">

        {/* Bottom Metadata & Clean Copyright strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.04] text-[9px] font-mono text-zinc-500 tracking-widest">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} SURENDRA & CO.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>ALL FABRICATION PROTECTED BY ACTIVE B2B DISCLOSURE ACTS</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-zinc-600 uppercase tracking-[0.25em]">
              ESTD. 1984 &nbsp;|&nbsp; MASTER COACHBUILDERS
            </span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 px-4 py-2 border border-white/[0.08] bg-white/[0.01] hover:border-bronze hover:bg-bronze/5 hover:text-white transition-all duration-500 group select-none uppercase tracking-[0.2em] rounded-none text-[9px] cursor-pointer font-bold relative tech-hud-brackets"
            >
              <span>Return to Top</span>
              <ArrowUp className="w-3 h-3 text-zinc-400 group-hover:text-bronze transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
          
        </div>

      </div>
    </footer>
  );
}
