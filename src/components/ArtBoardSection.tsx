"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Layers, 
  Sparkles, 
  Maximize2, 
  ArrowRight, 
  X, 
  Tag, 
  Eye, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Camera
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolioData";

export const ArtBoardSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = [
    "All",
    "Haute Couture",
    "Bridal & Heritage",
    "Contemporary Draping",
    "Avant-Garde & Textures",
    "Sketches & Craft",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenModal = (item: PortfolioItem) => {
    setActiveItem(item);
    setActiveImageIndex(0);
  };

  return (
    <section id="artboard" className="relative py-28 px-6 md:px-12">
      {/* Background Section Painterly Flourish */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c98b2c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#b85d43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#e2d8c6]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#b85d43] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Designer Art Board</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1715] tracking-tight">
              Curated Dress Capsules
            </h2>
            <p className="mt-3 text-[#6e675f] font-light max-w-xl text-base">
              Each garment collection features 5 curated editorial angles, highlighting close-up fabric textures, architectural draping, and full silhouettes.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <span className="font-annotation text-2xl text-[#b85d43]">
              {filteredItems.length} Couture Silhouettes &bull; 5 Angles Each
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <Filter className="w-4 h-4 text-[#6e675f] mr-1 hidden sm:block shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-serif tracking-[0.18em] uppercase transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? "bg-[#1a1715] text-[#faf7f2] border-[#1a1715] shadow-md"
                  : "bg-white/60 text-[#4a443d] border-[#e2d8c6] hover:border-[#b85d43] hover:text-[#1a1715]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Art Board Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const rotations = ["-rotate-1", "rotate-1", "-rotate-0.5", "rotate-0.5", "rotate-0"];
              const rotationClass = rotations[index % rotations.length];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`art-matte group relative cursor-pointer ${rotationClass}`}
                  onClick={() => handleOpenModal(item)}
                >
                  {/* Pin mount on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-20">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#b85d43] shadow-[0_2px_4px_rgba(0,0,0,0.3)] border-2 border-white" />
                  </div>

                  {/* Main Cover Image Frame */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-3">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1a1715]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <span className="px-4 py-2 bg-white/95 text-[#1a1715] font-serif text-xs uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View 5 Angles</span>
                      </span>
                    </div>

                    {/* Category Stamp */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#1a1715] border border-[#e2d8c6]">
                      {item.category}
                    </div>

                    {/* 5 Photos Badge */}
                    <div className="absolute top-3 right-3 bg-[#1a1715]/85 text-white backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono flex items-center gap-1.5 shadow-sm">
                      <Camera className="w-3 h-3 text-[#c98b2c]" />
                      <span>5 Angles</span>
                    </div>
                  </div>

                  {/* 5 Thumbnail Preview Strip */}
                  <div className="grid grid-cols-5 gap-1.5 mb-3 px-0.5">
                    {item.gallery.map((thumbUrl, thumbIdx) => (
                      <div
                        key={thumbIdx}
                        className="relative aspect-square overflow-hidden bg-[#e8e0d2] border border-[#e2d8c6] hover:border-[#b85d43] transition-colors"
                      >
                        <Image
                          src={thumbUrl}
                          alt={`${item.title} angle ${thumbIdx + 1}`}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Card Content & Annotations */}
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-sm font-semibold text-[#1a1715] leading-snug group-hover:text-[#b85d43] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#6e675f] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Color Swatch dots */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#f0eae0]">
                      <div className="flex items-center gap-1.5">
                        {item.palette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-3 h-3 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#b85d43]">
                        {item.collection}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal: 5-Angle Interactive Carousel & Inspection */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop - High Performance Solid Alpha (No expensive blur) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-[#1a1715]/75 cursor-pointer will-change-opacity"
            />

            {/* Modal Dialog - Lightweight smooth hardware-accelerated animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-[#ffffff] border border-[#f0e6e2] shadow-2xl overflow-y-auto z-10 p-5 sm:p-8 md:p-10 will-change-transform"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 text-[#1a1715] hover:text-[#b85d43] hover:bg-[#efe7d8] transition-all rounded-full z-20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive 5-Image Gallery */}
                <div className="md:col-span-7 space-y-4">
                  {/* Active Large Display */}
                  <div className="relative aspect-[3/4] bg-[#e8e0d2] shadow-inner art-matte overflow-hidden">
                    <Image
                      src={activeItem.gallery[activeImageIndex]}
                      alt={`${activeItem.title} - angle ${activeImageIndex + 1}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />

                    {/* Image Counter Badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm px-3 py-1 text-white text-[11px] font-mono uppercase tracking-widest">
                      ANGLE {activeImageIndex + 1} OF {activeItem.gallery.length}
                    </div>

                    {/* Navigation Arrows on image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeItem.gallery.length - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#1a1715] shadow-md transition-all"
                      aria-label="Previous angle"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev < activeItem.gallery.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#1a1715] shadow-md transition-all"
                      aria-label="Next angle"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 5 Clickable Thumbnails */}
                  <div className="grid grid-cols-5 gap-2">
                    {activeItem.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-[3/4] overflow-hidden border-2 transition-all ${
                          activeImageIndex === idx
                            ? "border-[#b85d43] scale-105 shadow-md"
                            : "border-[#e2d8c6] opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={imgUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          sizes="100px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Garment Specs & Tailoring Details */}
                <div className="md:col-span-5 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#f0eae0] text-[#b85d43] text-xs font-mono uppercase tracking-widest mb-2">
                      {activeItem.collection}
                    </span>
                    <h3 className="text-2xl font-serif text-[#1a1715] font-semibold leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="mt-2 text-xs font-mono uppercase text-[#6e675f]">
                      Category: {activeItem.category}
                    </p>
                  </div>

                  <p className="text-sm text-[#4a443d] leading-relaxed font-light">
                    {activeItem.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-[#e2d8c6]">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e675f] mb-1">
                        Silhouette & Drape Construction:
                      </span>
                      <p className="text-sm font-serif text-[#1a1715]">
                        {activeItem.silhouette}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e675f] mb-2">
                        Textiles & Embellishments:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeItem.materials.map((m, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white border border-[#e2d8c6] text-xs text-[#1a1715] font-mono"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e675f] mb-2">
                        Palette Swatches:
                      </span>
                      <div className="flex items-center gap-3">
                        {activeItem.palette.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span
                              className="w-4 h-4 rounded-full border border-black/20 shadow-sm"
                              style={{ backgroundColor: c }}
                            />
                            <span className="text-[10px] font-mono text-[#6e675f]">
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#e2d8c6] flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      onClick={() => setActiveItem(null)}
                      className="w-full text-center px-6 py-3.5 bg-[#1a1715] text-[#faf7f2] font-serif text-xs uppercase tracking-[0.2em] hover:bg-[#b85d43] transition-colors shadow-md"
                    >
                      Inquire Bespoke Commission
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
