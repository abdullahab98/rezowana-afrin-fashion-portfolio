"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";
import { WashiTape, TornEdgeBottom } from "@/components/MoodboardElements";

export const RunwayLookbookSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const tapeVariants = ["terracotta", "sage", "ochre", "lavender", "blush", "sky"] as const;
  const rotations = ["sm:-rotate-[1.2deg]", "sm:rotate-[1.4deg]", "sm:-rotate-[0.8deg]", "sm:rotate-[1deg]", "sm:-rotate-[1.4deg]", "sm:rotate-[0.6deg]"];

  return (
    <section
      id="lookbook"
      className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3] overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c98b2c]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RUNWAY FILMSTRIP &bull; MOODBOARD REEL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            The Runway Scroll Experience
          </h2>
          <p className="mt-2 text-[#524b43] text-sm font-light max-w-lg">
            Slide through high-resolution editorial compositions—each silhouette balanced against fine artisanal textures.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 border border-[#decbb2] bg-white/90 hover:bg-[#1a1715] hover:text-white transition-all text-[#1a1715] shadow-xs cursor-pointer"
            aria-label="Previous looks"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 border border-[#decbb2] bg-white/90 hover:bg-[#1a1715] hover:text-white transition-all text-[#1a1715] shadow-xs cursor-pointer"
            aria-label="Next looks"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Filmstrip Reel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-10 pt-6 px-2 scroll-smooth scrollbar-none snap-x snap-mandatory relative z-10"
        style={{ scrollbarWidth: "none" }}
      >
        {PORTFOLIO_ITEMS.map((item, idx) => {
          const tapeVar = tapeVariants[idx % tapeVariants.length];
          const rot = rotations[idx % rotations.length];

          return (
            <div
              key={item.id}
              className={`shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-center group select-none relative transition-transform duration-300 ${rot} hover:rotate-0`}
            >
              {/* Washi Tape */}
              <WashiTape
                variant={tapeVar}
                angle={idx % 2 === 0 ? -4 : 4}
                className="-top-3.5 left-10"
                width="w-24 sm:w-28"
              />

              <div className="[filter:drop-shadow(0_8px_20px_rgba(40,30,20,0.08))_drop-shadow(0_2px_4px_rgba(40,30,20,0.04))] group-hover:[filter:drop-shadow(0_12px_28px_rgba(40,30,20,0.12))] transition-[filter] duration-300">
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#fffdfa] via-[#fcf8f0] to-[#f8f1e4] border-x border-t border-[#e2d5bf]">
                  
                  {/* Swatch Header Bar */}
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#a84a30]">
                      LOOK {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Color Dots */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      {item.palette.slice(0, 3).map((col, pIdx) => (
                        <span
                          key={pIdx}
                          className="w-2 h-2 rounded-full border border-black/10"
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-3 border border-black/5">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#1a1715]/85 text-[#faf7f2] font-mono text-[9px] uppercase px-2 py-0.5 tracking-widest border border-white/10">
                      EDITORIAL
                    </div>
                  </div>

                  <div className="space-y-1 px-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#a84a30] font-semibold">
                        {item.category}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-[#6e584f]">
                        Atelier Spec
                      </span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#1a1715] truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#524b43] font-normal truncate">
                      {item.silhouette}
                    </p>
                  </div>
                </div>

                <TornEdgeBottom fill="#f8f1e4" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
