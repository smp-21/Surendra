"use client";

import React, { useEffect, useRef, useState } from "react";

interface CinematicCanvasProps {
  images: HTMLImageElement[];
}

export default function CinematicCanvas({ images }: CinematicCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameIndexRef = useRef<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canvasScrollProgress, setCanvasScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !images.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Lerp state — smooth interpolation between scroll target and rendered frame
    let targetProgress = 0;
    let currentProgress = 0;
    const LERP_FACTOR = 0.045; // Lower = smoother & slower easing. 0.045 = premium cinematic glide
    const LERP_THRESHOLD = 0.0001; // Stop lerping when close enough

    // Resizing with High-DPI Support
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      
      // Force immediate redraw on resize
      lastFrameIndexRef.current = -1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Frame drawing routine
    const drawFrame = (progress: number) => {
      const totalFrames = images.length;
      if (totalFrames === 0) return;

      const frameIndex = Math.max(
        0,
        Math.min(totalFrames - 1, Math.floor(progress * totalFrames))
      );

      let img = images[frameIndex];
      let drawnFrameIndex = frameIndex;

      // Nearest-neighbor loaded frame fallback search
      if (!img || !img.complete) {
        let found = false;
        let step = 1;
        while (frameIndex - step >= 0 || frameIndex + step < totalFrames) {
          if (frameIndex - step >= 0) {
            const leftImg = images[frameIndex - step];
            if (leftImg && leftImg.complete) {
              img = leftImg;
              drawnFrameIndex = frameIndex - step;
              found = true;
              break;
            }
          }
          if (frameIndex + step < totalFrames) {
            const rightImg = images[frameIndex + step];
            if (rightImg && rightImg.complete) {
              img = rightImg;
              drawnFrameIndex = frameIndex + step;
              found = true;
              break;
            }
          }
          step++;
        }
        if (!found || !img) return; // No frames loaded at all
      }

      // Only redraw when the drawn frame actually changes
      if (drawnFrameIndex === lastFrameIndexRef.current) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Clear the canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Cover-Fit Math (draws image centered like background-size: cover)
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // "contain" image behavior (fit to width instead of height)
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        if (canvasRatio > imgRatio) {
          drawHeight = canvasWidth / imgRatio;
          offsetY = (canvasHeight - drawHeight) / 2;
        } else {
          drawWidth = canvasHeight * imgRatio;
          offsetX = (canvasWidth - drawWidth) / 2;
        }
      }

      // Premium Cinematic Zoom Effect (slowly zooms out from 1.04 to 1.00)
      const zoomScale = 1.04 - progress * 0.04;
      
      ctx.save();
      ctx.translate(canvasWidth / 2, canvasHeight / 2);
      ctx.scale(zoomScale, zoomScale);
      ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();

      lastFrameIndexRef.current = drawnFrameIndex;
    };

    // Helper to get absolute offsetTop relative to the document root
    const getAbsoluteOffsetTop = (element: HTMLElement) => {
      let top = 0;
      let el: HTMLElement | null = element;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      return top;
    };

    // requestAnimationFrame Tick — lerp-interpolated smooth frame rendering
    const tick = () => {
      const scrollContainer = canvas.parentElement?.parentElement?.parentElement as HTMLElement | null;

      if (scrollContainer) {
        const absoluteTop = getAbsoluteOffsetTop(scrollContainer);
        const containerHeight = scrollContainer.offsetHeight;
        const scrollY = window.scrollY;
        const scrollHeight = containerHeight - window.innerHeight;
        
        const scrollTop = scrollY - absoluteTop;
        
        // Delay frame progression until after scrolling past the first viewport (100vh)
        const viewportHeight = window.innerHeight;
        const startScroll = viewportHeight;
        const endScroll = scrollHeight;
        
        if (scrollTop <= startScroll) {
          targetProgress = 0;
        } else {
          targetProgress = Math.max(0, Math.min(1, (scrollTop - startScroll) / (endScroll - startScroll)));
        }
        
        // Smooth lerp: ease currentProgress toward targetProgress
        const delta = targetProgress - currentProgress;
        if (Math.abs(delta) > LERP_THRESHOLD) {
          currentProgress += delta * LERP_FACTOR;
        } else {
          currentProgress = targetProgress;
        }
        
        setScrollProgress(currentProgress);
        drawFrame(currentProgress);

        const overallProgress = Math.max(0, Math.min(1, scrollTop / (scrollHeight || 1)));
        setCanvasScrollProgress(overallProgress);
      }
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images]);

  return (
    <div className="absolute inset-0 w-full h-full bg-charcoal pointer-events-none select-none">
      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
        style={{
          width: "100%",
          height: "100%",
        }}
      />



      {/* Cinematic Dark Vignette — lightened for better video visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/25 pointer-events-none mix-blend-multiply opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30 pointer-events-none opacity-25" />



      {/* Scroll Progress Bar at the bottom of the canvas viewport */}
      <div 
        className="absolute bottom-0 left-0 w-full bg-transparent pointer-events-none z-30" 
        style={{ height: "3px" }}
      >
        <div 
          className="h-full bg-bronze/60 transition-all duration-75 ease-out" 
          style={{ width: `${canvasScrollProgress * 100}%` }}
        />
      </div>

    </div>
  );
}
