"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home Cinematic", href: "/" },
    { label: "Heritage Brief", href: "/heritage" },
    { label: "Coach Range", href: "/range" },
    { label: "Engineering Services", href: "/services" },
    { label: "Methodology", href: "/process" },
    { label: "Certifications", href: "/compliance" },
  ];

  return (
    <footer className="relative bg-[#0B0F19] pt-14 pb-8 overflow-hidden z-20">

      {/* Accent Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
      <div className="hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-6 px-5 py-1 bg-stone border-x border-b border-black/[0.08] font-sans text-[8px] tracking-[0.3em] text-bronze uppercase rounded-b-lg relative">
          <span>HQ Z-3</span>
          <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
          <span>12.9716° N, 77.5946° E</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Core Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Column 1: Brand Info - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-12">
            <div className="flex flex-col gap-5">
              <div className="flex items-baseline gap-2 select-none">
                <span className="text-white font-serif text-3xl tracking-[0.06em] uppercase font-semibold">
                  SURENDRA & CO.
                </span>
              </div>
              <p className="font-serif text-xl text-slate-400 tracking-wide leading-relaxed font-light max-w-md">
                Four decades of engineered precision. We forge the fleets that define industrial strength and structural reliability.
              </p>
            </div>

            <div className="hidden">
              <div className="mt-8 lg:mt-16 flex flex-col gap-2.5 font-sans text-[10px] text-slate-400 tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-400">CENTRAL LEDGER ACTIVE</span>
                </div>
                <span>REG. HQ // STEELWORKS ZONE 3 // IN</span>
              </div>
            </div>
          </div>

          {/* Column 2: Directory - Spans 3 columns */}
          <div className="lg:col-span-3 flex flex-col gap-5 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-serif text-base text-bronze/80 tracking-[0.04em] normal-case font-medium">
              Directory
            </h4>
            <div className="flex flex-col gap-3.5 font-sans text-sm">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-300 py-0.5 group"
                  style={{
                    opacity: hoveredLink !== null && hoveredLink !== idx ? 0.45 : 1,
                    transition: "opacity 0.3s ease, color 0.3s ease",
                  }}
                >
                  <span className="text-xs text-bronze/40 group-hover:translate-x-1 transition-transform duration-300">
                    {`0${idx + 1}`}
                  </span>
                  <span className="text-bronze/15 group-hover:text-bronze-dark transition-colors duration-300">//</span>
                  <span className="tracking-wide normal-case font-normal">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-serif text-base text-bronze/80 tracking-[0.04em] normal-case font-medium">
              Acquisitions
            </h4>
            <div className="flex flex-col gap-6 text-sm">
              <div className="flex flex-col gap-1.5 text-slate-400">
                <span className="text-xs font-sans tracking-wide text-slate-500 normal-case">DIRECT LINE</span>
                <a href="tel:+919845551984" className="font-sans text-slate-300 hover:text-bronze transition-colors duration-300">
                  +91 984 555 1984
                </a>
              </div>
              <div className="flex flex-col gap-1.5 text-slate-400">
                <span className="text-xs font-sans tracking-wide text-slate-500 normal-case">SECURE MAIL</span>
                <a href="mailto:acquisitions@surendraco.com" className="font-sans text-slate-300 hover:text-bronze transition-colors duration-300 break-all text-[13px]">
                  acquisitions@surendraco.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:border-l lg:border-white/[0.06] lg:pl-8">
            <h4 className="font-serif text-base text-bronze/80 tracking-[0.04em] normal-case font-medium">
              Compliance
            </h4>
            <div className="flex flex-col gap-3.5 font-sans text-sm text-slate-400">
              <a href="/privacy" className="hover:text-bronze transition-colors duration-300 tracking-wide normal-case">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-bronze transition-colors duration-300 tracking-wide normal-case">
                Terms of Engagement
              </a>
              <a href="/compliance" className="hover:text-bronze transition-colors duration-300 tracking-wide normal-case">
                Regulatory Validation
              </a>
            </div>
          </div>

        </div>

        {/* B2B Directory & Site Index Map */}
        <div className="mt-10 pt-10 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Section 1: Commercial Hubs */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm text-bronze/70 tracking-[0.04em] normal-case font-medium">Commercial Directives</h5>
            <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
              <a href="/bus-body-builders-india" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">Bus Body Builders India</a>
              <a href="/bus-hardware-manufacturers" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">Bus Hardware Suppliers</a>
            </div>
          </div>

          {/* Section 2: Specialty Engineering */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm text-bronze/70 tracking-[0.04em] normal-case font-medium">Specialized Building</h5>
            <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
              <a href="/luxury-bus-builders" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">Luxury Coach Customizers</a>
              <a href="/school-bus-manufacturers" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">High-Security School Buses</a>
            </div>
          </div>

          {/* Section 3: Fabrication */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm text-bronze/70 tracking-[0.04em] normal-case font-medium">Workshop Processes</h5>
            <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
              <a href="/bus-body-fabrication" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">Bus Body Fabrication</a>
              <a href="/custom-bus-interiors" className="hover:text-white transition-colors duration-300 normal-case tracking-wide">Custom Cabin Interiors</a>
            </div>
          </div>

          {/* Section 4: Regional */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm text-bronze/70 tracking-[0.04em] normal-case font-medium">Regional Dispatch</h5>
            <div className="flex flex-col gap-3 font-sans text-sm text-slate-400">
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                <span className="normal-case tracking-wide text-slate-400">Mumbai</span>
                <span className="text-bronze/20">•</span>
                <span className="normal-case tracking-wide text-slate-400">Delhi NCR</span>
                <span className="text-bronze/20">•</span>
                <span className="normal-case tracking-wide text-slate-400">Pune</span>
                <span className="text-bronze/20">•</span>
                <span className="normal-case tracking-wide text-slate-400">Bangalore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-white/[0.04] text-xs font-sans text-slate-500 tracking-wide relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} SURENDRA & CO.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>ALL FABRICATION PROTECTED BY ACTIVE B2B DISCLOSURE ACTS</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-slate-400 uppercase tracking-wider text-xs">
              ESTD. 1984 &nbsp;|&nbsp; MASTER COACHBUILDERS
            </span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] bg-white/[0.02] hover:border-bronze hover:bg-bronze/5 hover:text-white transition-all duration-500 group select-none uppercase tracking-wide rounded-lg text-xs cursor-pointer font-medium relative"
            >
              <span>Return to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-bronze transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
          
        </div>

      </div>

      {/* Giant Watermark - Absolutely positioned in background to prevent height displacement */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none z-0">
        <span className="block font-serif text-[9.5vw] leading-none text-center font-bold tracking-[0.12em] text-white/[0.012] uppercase animate-silent-roar translate-y-3">
          SURENDRA
        </span>
      </div>
    </footer>
  );
}
