"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import CinematicCanvas from "@/components/CinematicCanvas";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import Origin from "@/components/Origin";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const TOTAL_FRAMES = 482;

export default function HomeClient() {
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
      const l0: number[] = [1, 2, 3, 4, 5]; // Blocker preloader frames - extremely fast!
      const l1_rest: number[] = [];
      for (let i = 9; i <= TOTAL_FRAMES; i += 8) l1_rest.push(i);
      const l2: number[] = [];
      for (let i = 5; i <= TOTAL_FRAMES; i += 8) l2.push(i);
      const l3: number[] = [];
      for (let i = 3; i <= TOTAL_FRAMES; i += 4) l3.push(i);
      const l4: number[] = [];
      for (let i = 2; i <= TOTAL_FRAMES; i += 2) l4.push(i);

      // --- Level 0 (Preload - Block UI with snappier 400ms duration) ---
      setTotalBatches(1);
      
      let actualPct = 0;
      let currentVisual = 0;
      const startTime = Date.now();
      const minDuration = 400; // Snappier preload for better FCP/LCP

      // Start actual load in the background
      const loadPromise = loadLevel(l0, (pct, batchIdx, total) => {
        actualPct = pct;
        setActiveBatch(batchIdx);
      });

      // Concurrently run a smooth, rate-limited visual progress loop
      while (active) {
        const elapsed = Date.now() - startTime;
        const timeRatio = Math.min(elapsed / minDuration, 1);
        
        // Progress visual target is capped by the current actual preloaded asset percent
        const target = Math.min(timeRatio, actualPct);
        
        if (target > currentVisual) {
          // Premium kinetic eased interpolation
          currentVisual += (target - currentVisual) * 0.12;
          if (target - currentVisual < 0.001) {
            currentVisual = target;
          }
          setPreloadProgress(currentVisual);
        }

        // Break once actual assets are 100% loaded, min duration elapsed, and visual meter has fully completed
        if (actualPct >= 1 && elapsed >= minDuration && currentVisual >= 0.999) {
          setPreloadProgress(1);
          break;
        }

        await new Promise((r) => setTimeout(r, 20));
      }

      await loadPromise;

      if (!active) return;

      // Pass the image array reference to state, revealing the main layout
      setImages(imagesArray);
      setIsLoading(false);

      // Delay background loading by 1.5 seconds to let the Hero component render and animate smoothly
      await new Promise((r) => setTimeout(r, 1500));

      // --- Background Levels (Level 1 Rest, Level 2, 3, 4 - Non-blocking UI) ---
      const backgroundLevels = [l1_rest, l2, l3, l4];
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
          // Yield to browser main thread between batches to keep the scroll interaction ultra smooth (increased to 120ms to reduce TBT)
          await new Promise((r) => setTimeout(r, 120));
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
      const threshold = window.innerHeight * 6.8;
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
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/20 selection:text-ivory flex flex-col justify-between">
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
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4.5 border border-bronze/60 bg-white/95 text-ivory hover:bg-bronze hover:text-white hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm tracking-[0.08em] font-medium uppercase transition-all duration-500 rounded-full cursor-pointer group shadow-lg relative overflow-hidden backdrop-blur-lg"
              >
                <span>Start Your Build</span>
                <span className="text-[10px] text-bronze group-hover:text-white transition-colors duration-500 font-sans tracking-wide font-medium">→</span>
              </a>
            </div>

            {/* Main Long-Scroll Cinematic Section */}
            <main className="flex-grow">
              
              {/* 
                Streamlined Scroll Runway = 700vh.
                Holds all B2B narrative components as cinematic overlay panels.
                Exposes the animated cinematic video sequence with absolute visual clarity.
              */}
              <div className="relative w-full h-[800vh]">
                
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

                  {/* Section 01.5: Trust Metrics (100vh to 200vh) */}
                  <div className="h-screen w-full shrink-0">
                    <TrustMetrics />
                  </div>

                  {/* Section 02: Origin & Heritage (200vh to 300vh) */}
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
              <div id="commission" className="relative bg-charcoal border-t border-black/[0.06]">
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
