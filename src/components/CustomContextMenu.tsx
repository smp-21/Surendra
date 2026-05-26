"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, ArrowUp, HardHat, Info, ExternalLink } from "lucide-react";

interface MenuItem {
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CustomContextMenu() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showHUD, setShowHUD] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close context menu on left click or Escape
  useEffect(() => {
    const handleClose = () => setVisible(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };

    document.addEventListener("click", handleClose);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClose);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle right click trigger
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setVisible(true);

      // Viewport collision checking
      const menuWidth = 240;
      const menuHeight = 310;
      const clickX = e.clientX;
      const clickY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let x = clickX;
      let y = clickY;

      // Adjust if clipping right
      if (clickX + menuWidth > windowWidth) {
        x = windowWidth - menuWidth - 8;
      }
      // Adjust if clipping bottom
      if (clickY + menuHeight > windowHeight) {
        y = windowHeight - menuHeight - 8;
      }

      setPosition({ x, y });
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const navigateToSection = (selector: string, fallbackPath: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = fallbackPath;
    }
  };

  const menuItems: MenuItem[] = [
    {
      label: "Zenith Alignment",
      subLabel: "RETURN TO TOP",
      icon: <ArrowUp className="w-3.5 h-3.5 text-bronze" />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      label: "Inquire Commission",
      subLabel: "SUBMIT CHASSIS BRIEF",
      icon: <Terminal className="w-3.5 h-3.5 text-bronze" />,
      action: () => navigateToSection("#commission", "/#commission"),
    },
    {
      label: "Coach Ranges",
      subLabel: "PROJECT DIRECTORY",
      icon: <HardHat className="w-3.5 h-3.5 text-bronze" />,
      action: () => navigateToSection("#range", "/range"),
    },
    {
      label: "Accredited Schemas",
      subLabel: "B2B VALIDATION LOGS",
      icon: <Shield className="w-3.5 h-3.5 text-bronze" />,
      action: () => {
        window.location.href = "/compliance";
      },
    },
    {
      label: "System HUD State",
      subLabel: "DIAGNOSTIC METADATA",
      icon: <Info className="w-3.5 h-3.5 text-bronze" />,
      action: () => {
        setShowHUD(true);
        setVisible(false);
      },
    },
  ];

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ top: position.y, left: position.x }}
            className="fixed z-[999] w-60 bg-[#070809]/95 border border-white/[0.12] rounded-xl backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden font-mono p-1 select-none pointer-events-auto"
          >
            {/* Technical Header */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] text-[8px] tracking-[0.25em] text-zinc-500 uppercase font-bold">
              <span>LEDGER CONTEXT // HQ Z-3</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-led-flicker" />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-0.5 mt-1">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    item.action();
                  }}
                  className="w-full flex items-center justify-between text-left p-2.5 px-3 rounded-lg hover:bg-white/[0.03] active:bg-white/[0.05] transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-zinc-300 font-bold tracking-wider group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[7px] text-zinc-500 tracking-[0.2em] uppercase">
                      {item.subLabel}
                    </span>
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>

            {/* Technical Footer */}
            <div className="mt-1 flex items-center justify-between px-3.5 py-1.5 border-t border-white/[0.08] text-[7px] text-zinc-600 tracking-wider">
              <span>VER // 16.2.6-TURBO</span>
              <span>© SURENDRA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Technical Diagnostic HUD Panel */}
      <AnimatePresence>
        {showHUD && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm select-none pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md bg-[#070809] border border-bronze/35 p-6 rounded-2xl shadow-2xl overflow-hidden text-ivory font-mono"
            >
              {/* Background technical lines */}
              <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.06]" />

              {/* Title */}
              <div className="flex items-center gap-2.5 mb-5 border-b border-white/[0.08] pb-3">
                <Terminal className="w-4 h-4 text-bronze animate-led-flicker" />
                <h3 className="text-xs font-bold tracking-[0.25em] text-white uppercase">
                  PLATFORM DIAGNOSTIC HUD
                </h3>
              </div>

              {/* Diagnostics Grid */}
              <div className="space-y-3.5 text-[10px] text-zinc-300">
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">DEVICE_STATUS:</span>
                  <span className="text-bronze font-bold">CALIBRATED // SECURE</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">NEXT_RENDER:</span>
                  <span className="text-white font-bold">16.2.6 APP (TURBOPACK)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">TELEMETRY_LOGS:</span>
                  <span className="text-white font-bold">VERCEL ANALYTICS ENABLED</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">CLIENT_SYSTEM:</span>
                  <span className="text-white font-bold uppercase truncate max-w-[200px]">
                    {typeof window !== "undefined" ? navigator.platform : "SERVER_ENV"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">RESOLUTION:</span>
                  <span className="text-white font-bold">
                    {typeof window !== "undefined" ? `${window.screen.width} x ${window.screen.height}` : "0 x 0"}
                  </span>
                </div>
                <div className="flex justify-between pb-1.5">
                  <span className="text-zinc-500 uppercase tracking-widest">LEDGER_ENCRYPTION:</span>
                  <span className="text-green-500/80 font-bold">ACTIVE (SSL/AES-256)</span>
                </div>
              </div>

              {/* HUD Close Action */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[8px] text-zinc-500 tracking-widest">LEDGER LOG OUT // HQ Z-3</span>
                <button
                  onClick={() => setShowHUD(false)}
                  className="flex items-center gap-1.5 px-4 py-2 border border-bronze bg-bronze/5 hover:bg-bronze hover:text-[#070809] font-mono text-[9px] tracking-widest font-bold uppercase rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <span>CLOSE STATUS</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
