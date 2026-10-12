"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Heart, 
  Eye, 
  Palette, 
  Sliders, 
  Check, 
  ArrowRight,
  X
} from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";

export const ClaymorphismDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<"soft-clay" | "rose-clay" | "gold-clay">("rose-clay");
  const [liked, setLiked] = useState(false);

  // Take the first signature dress for the demo card
  const sampleDress = PORTFOLIO_ITEMS[0];

  return (
    <>
      {/* Floating Interactive Trigger Button */}
      <aside aria-label="Claymorphism Style Lab" className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="clay-btn-accent px-5 py-3.5 flex items-center gap-2.5 shadow-xl text-xs font-serif uppercase tracking-wider cursor-pointer"
        >
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Try Claymorphism Demo</span>
        </motion.button>
      </aside>

      {/* Modal / Slide-out Demo Sandbox */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#1a1715]/40 backdrop-blur-sm"
            />

            {/* Claymorphic Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl clay-card bg-[#fffcfb] p-6 sm:p-10 z-10 my-8 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 clay-btn text-[10px] font-mono uppercase tracking-widest text-[#d6687a] mb-2.5">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Experimental Design Lab</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1715] font-bold">
                    Claymorphism Visual Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6e675f] font-light mt-1">
                    Soft, tactile, 3D clay-like inflated shapes paired with the fashion portfolio's watercolor tones.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="clay-btn p-2.5 text-[#1a1715] hover:text-[#d6687a] cursor-pointer"
                  aria-label="Close demo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Style Switcher Controls */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6e675f] mr-2">
                  Clay Tone:
                </span>

                <button
                  onClick={() => setSelectedStyle("rose-clay")}
                  className={`px-4 py-2 text-xs font-serif uppercase tracking-wider cursor-pointer ${
                    selectedStyle === "rose-clay"
                      ? "clay-btn-accent"
                      : "clay-btn text-[#1a1715]"
                  }`}
                >
                  Rose Blush Clay
                </button>

                <button
                  onClick={() => setSelectedStyle("gold-clay")}
                  className={`px-4 py-2 text-xs font-serif uppercase tracking-wider cursor-pointer ${
                    selectedStyle === "gold-clay"
                      ? "clay-btn-accent bg-gradient-to-r from-[#f5be38] to-[#e6a817]"
                      : "clay-btn text-[#1a1715]"
                  }`}
                >
                  Warm Gold Clay
                </button>

                <button
                  onClick={() => setSelectedStyle("soft-clay")}
                  className={`px-4 py-2 text-xs font-serif uppercase tracking-wider cursor-pointer ${
                    selectedStyle === "soft-clay"
                      ? "clay-btn-accent bg-[#1a1715]"
                      : "clay-btn text-[#1a1715]"
                  }`}
                >
                  Porcelain White Clay
                </button>
              </div>

              {/* Interactive Claymorphic Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: 3D Clay Dress Card */}
                <div className="md:col-span-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full max-w-sm p-6 overflow-hidden ${
                      selectedStyle === "rose-clay"
                        ? "clay-card-rose"
                        : selectedStyle === "gold-clay"
                        ? "clay-card-gold"
                        : "clay-card"
                    }`}
                  >
                    {/* Inner 3D Image Capsule */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-inner mb-5 border-2 border-white/60">
                      <Image
                        src={sampleDress.src}
                        alt={sampleDress.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 clay-btn px-3 py-1 text-[10px] font-mono tracking-widest text-[#1a1715]">
                        LOOK 01
                      </div>

                      <button
                        onClick={() => setLiked(!liked)}
                        className={`absolute top-3 right-3 clay-btn p-2 transition-colors cursor-pointer ${
                          liked ? "text-[#e27d8e]" : "text-[#6e675f]"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    {/* Dress Meta Information */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6687a]">
                          {sampleDress.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#6e675f]">
                          Atelier Signature
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#1a1715] leading-snug">
                        {sampleDress.title}
                      </h4>
                      <p className="text-xs text-[#6e675f] font-light line-clamp-2">
                        {sampleDress.description}
                      </p>

                      {/* Clay Pill Action */}
                      <div className="pt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {sampleDress.palette.map((color, idx) => (
                            <span
                              key={idx}
                              className="w-4 h-4 rounded-full shadow-inner border border-white"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <button className="clay-btn px-3.5 py-1.5 text-[11px] font-serif uppercase tracking-wider text-[#1a1715] hover:text-[#d6687a] cursor-pointer">
                          View 5 Angles
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right: Clay Elements & Comparison */}
                <div className="md:col-span-6 space-y-6">
                  {/* Clay Stat Bubble 1 */}
                  <div className="clay-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl clay-card-rose flex items-center justify-center shrink-0 text-[#d6687a]">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-bold text-[#1a1715]">
                        Dual-Depth Inner Shadows
                      </h5>
                      <p className="text-xs text-[#6e675f] font-light">
                        Combines an inner white bevel highlight with a soft colored outer drop-shadow for an inflated physical volume.
                      </p>
                    </div>
                  </div>

                  {/* Clay Stat Bubble 2 */}
                  <div className="clay-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl clay-card-gold flex items-center justify-center shrink-0 text-[#f5be38]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-bold text-[#1a1715]">
                        Organic Rounding (28px)
                      </h5>
                      <p className="text-xs text-[#6e675f] font-light">
                        Replaces sharp edges with rounded, organic pebble curves inspired by natural clay ceramics.
                      </p>
                    </div>
                  </div>

                  {/* Quick Action Pills */}
                  <div className="pt-2">
                    <p className="text-xs font-mono uppercase text-[#6e675f] mb-3">
                      Sample Clay Buttons:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="clay-btn-accent px-5 py-2.5 text-xs font-serif uppercase tracking-wider cursor-pointer">
                        Commission Dress
                      </button>
                      <button className="clay-btn px-5 py-2.5 text-xs font-serif uppercase tracking-wider text-[#1a1715] cursor-pointer">
                        Explore Lookbook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
