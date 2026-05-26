"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import CinematicCanvas from "@/components/CinematicCanvas";
import Hero from "@/components/Hero";
import Origin from "@/components/Origin";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const TOTAL_FRAMES = 482;

export default function Home() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const [activeBatch, setActiveBatch] = useState(1);
  const [totalBatches, setTotalBatches] = useState(4);
  const [showFixedCta, setShowFixedCta] = useState(true);

  useEffect(() => {
    let active = true;
    const imagesArray: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const loadLevel = async (
      indices: number[],
      onProgress: (pct: number, batchIdx: number, total: number) => void
    ) => {
      const BATCH_SIZE = 20;
      let loaded = 0;
      const totalIndices = indices.length;
      const batchesCount = Math.ceil(totalIndices / BATCH_SIZE);

      for (let i = 0; i < totalIndices; i += BATCH_SIZE) {
        if (!active) return;
        const currentBatchIndex = Math.floor(i / BATCH_SIZE) + 1;
        const batch = indices.slice(i, i + BATCH_SIZE);

        await Promise.all(
          batch.map((index) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              const frameNum = String(index).padStart(3, "0");
              img.src = `/frames/frame_${frameNum}.webp`;

              img.onload = () => {
                imagesArray[index - 1] = img;
                loaded++;
                onProgress(loaded / totalIndices, currentBatchIndex, batchesCount);
                resolve();
              };

              img.onerror = () => {
                imagesArray[index - 1] = img;
                loaded++;
                onProgress(loaded / totalIndices, currentBatchIndex, batchesCount);
                resolve();
              };
            });
          })
        );
      }
    };

    const startLoading = async () => {
      // Define progressive levels
      const l1: number[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i += 8) l1.push(i);
      const l2: number[] = [];
      for (let i = 5; i <= TOTAL_FRAMES; i += 8) l2.push(i);
      const l3: number[] = [];
      for (let i = 3; i <= TOTAL_FRAMES; i += 4) l3.push(i);
      const l4: number[] = [];
      for (let i = 2; i <= TOTAL_FRAMES; i += 2) l4.push(i);

      // --- Level 1 (Preload - Block UI) ---
      setTotalBatches(Math.ceil(l1.length / 20));
      await loadLevel(l1, (pct, batchIdx, total) => {
        setPreloadProgress(pct);
        setActiveBatch(batchIdx);
      });

      if (!active) return;

      // Pass the image array reference to state, revealing the main layout
      setImages(imagesArray);
      setIsLoading(false);

      // --- Background Levels (Level 2, 3, 4 - Non-blocking UI) ---
      const backgroundLevels = [l2, l3, l4];
      for (const level of backgroundLevels) {
        if (!active) return;
        const BG_BATCH_SIZE = 15;
        for (let i = 0; i < level.length; i += BG_BATCH_SIZE) {
          if (!active) return;
          const batch = level.slice(i, i + BG_BATCH_SIZE);
          await Promise.all(
            batch.map((index) => {
              return new Promise<void>((resolve) => {
                const img = new Image();
                const frameNum = String(index).padStart(3, "0");
                img.src = `/frames/frame_${frameNum}.webp`;

                img.onload = () => {
                  imagesArray[index - 1] = img;
                  resolve();
                };

                img.onerror = () => {
                  imagesArray[index - 1] = img;
                  resolve();
                };
              });
            })
          );
          // Yield to browser main thread between batches to keep the scroll interaction ultra smooth
          await new Promise((r) => setTimeout(r, 50));
        }
      }
    };

    startLoading();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const handleScroll = () => {
      // Hide CTA when scrolling past the runway and contact form comes up
      const threshold = window.innerHeight * 5.8;
      if (window.scrollY > threshold) {
        setShowFixedCta(false);
      } else {
        setShowFixedCta(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/30 selection:text-white flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader
            key="preloader"
            progress={preloadProgress}
            activeBatch={activeBatch}
            totalBatches={totalBatches}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex flex-col"
          >
            {/* Global Navigation */}
            <Navbar />

            {/* Persistent Fixed Viewport CTA - "Start Your Build" */}
            <div 
              className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-40 transition-all duration-700 pointer-events-auto ${
                showFixedCta 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-6 scale-90 pointer-events-none"
              }`}
            >
              <a
                href="#commission"
                className="inline-flex items-center justify-center gap-3 px-8 py-4.5 border border-bronze bg-[#070809]/95 text-white hover:bg-bronze hover:text-[#070809] hover:shadow-[0_0_45px_rgba(163,144,115,0.45)] hover:scale-[1.03] active:scale-[0.97] text-xs sm:text-sm tracking-[0.22em] font-bold uppercase transition-all duration-500 rounded-full cursor-pointer group shadow-2xl relative overflow-hidden"
              >
                <span>Start Your Build</span>
                <span className="text-[10px] text-bronze group-hover:text-[#070809] transition-colors duration-500 font-mono tracking-widest font-bold">// 07 →</span>
              </a>
            </div>

            {/* Main Long-Scroll Cinematic Section */}
            <main className="flex-grow">
              
              {/* 
                Streamlined Scroll Runway = 700vh.
                Holds all B2B narrative components as cinematic overlay panels.
                Exposes the animated cinematic video sequence with absolute visual clarity.
              */}
              <div className="relative w-full h-[700vh]">
                
                {/* Pinned Sticky Canvas Background */}
                <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                  <CinematicCanvas images={images} />
                </div>

                {/* Vertical Overlay content stack */}
                <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col pointer-events-none">
                  
                  {/* Section 01: Cinematic Hero (0vh to 100vh) */}
                  <div className="h-screen w-full shrink-0 flex items-center justify-center">
                    <Hero />
                  </div>

                  {/* Section 02: Origin & Heritage (100vh to 200vh) */}
                  <div className="h-screen w-full shrink-0">
                    <Origin />
                  </div>

                  {/* Section 03: Chassis & Coach Ranges (200vh to 300vh) */}
                  <div className="h-screen w-full shrink-0">
                    <Projects />
                  </div>

                  {/* Section 04: Engineering Services (300vh to 400vh) */}
                  <div className="h-screen w-full shrink-0">
                    <Capabilities />
                  </div>

                  {/* Section 05: Blueprint-to-Delivery Process Timeline (400vh to 500vh) */}
                  <div className="h-screen w-full shrink-0">
                    <Process />
                  </div>

                  {/* Section 06: Regulatory Validation & Certifications (500vh to 600vh) */}
                  <div className="h-screen w-full shrink-0">
                    <Compliance />
                  </div>

                  {/* Section 07: Cinematic Outro Resolve Runway (600vh to 700vh) */}
                  <div className="h-screen w-full shrink-0 pointer-events-none" />

                </div>

              </div>

              {/* 
                Bespoke Commission Form (Contact)
                Renders below the visual scroll container as a standard full-screen static block.
              */}
              <div id="commission" className="relative bg-charcoal border-t border-stone/20">
                {/* Background Blueprint Grid Lines */}
                <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.12]" />
                <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-[0.08]" />
                <Contact />
              </div>

            </main>

            {/* Premium B2B Footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
