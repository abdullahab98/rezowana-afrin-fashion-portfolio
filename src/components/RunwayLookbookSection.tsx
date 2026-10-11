"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";

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

  return (
    <section id="lookbook" className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#b85d43] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Horizontal Runway Reel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            The Runway Scroll Experience
          </h2>
          <p className="mt-2 text-[#6e675f] text-sm font-light max-w-lg">
            Slide through high-resolution editorial compositions—each silhouette balanced against fine artisanal textures.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 border border-[#d8cfbe] bg-white/70 hover:bg-[#1a1715] hover:text-white transition-all text-[#1a1715] shadow-sm"
            aria-label="Previous looks"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 border border-[#d8cfbe] bg-white/70 hover:bg-[#1a1715] hover:text-white transition-all text-[#1a1715] shadow-sm"
            aria-label="Next looks"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Filmstrip Reel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 pt-4 scroll-smooth scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {PORTFOLIO_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] art-matte snap-center group select-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#1a1715]/80 text-[#faf7f2] font-mono text-[10px] uppercase px-2 py-0.5 tracking-widest">
                LOOK {String(idx + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="space-y-1.5 px-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b85d43]">
                  {item.category}
                </span>
                <span className="font-mono text-[10px] uppercase text-[#6e675f]">
                  Atelier
                </span>
              </div>
              <h3 className="font-serif text-sm font-semibold text-[#1a1715] truncate">
                {item.title}
              </h3>
              <p className="text-xs text-[#6e675f] font-light truncate">
                {item.silhouette}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

