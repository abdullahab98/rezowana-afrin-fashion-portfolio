"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Eye, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Camera,
  X
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolioData";
import { TornPaperShell, WashiTape } from "@/components/MoodboardElements";

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

  const cardThemes = [
    {
      topColor: "#fff7f2",
      bottomColor: "#fae9df",
      cardBg: "bg-gradient-to-b from-[#fff7f2] via-[#faefe7] to-[#fae9df]",
      borderColor: "border-[#eac6b7]/60",
      tapeVariant: "terracotta" as const,
      tapeAngle: -4,
      tapePosition: "-top-3.5 left-8",
      specColor: "text-[#a84a30]",
    },
    {
      topColor: "#f2f8f5",
      bottomColor: "#e2efe7",
      cardBg: "bg-gradient-to-b from-[#f2f8f5] via-[#ebf4ef] to-[#e2efe7]",
      borderColor: "border-[#bedbca]/60",
      tapeVariant: "sage" as const,
      tapeAngle: 3.5,
      tapePosition: "-top-3.5 right-10",
      specColor: "text-[#24543d]",
    },
    {
      topColor: "#fdfbf2",
      bottomColor: "#f7efd6",
      cardBg: "bg-gradient-to-b from-[#fdfbf2] via-[#faf4e3] to-[#f7efd6]",
      borderColor: "border-[#e4d4a8]/60",
      tapeVariant: "ochre" as const,
      tapeAngle: -2.5,
      tapePosition: "-top-3.5 left-1/2 -translate-x-1/2",
      specColor: "text-[#8c5a0c]",
    },
    {
      topColor: "#fffdfa",
      bottomColor: "#f7efe0",
      cardBg: "bg-gradient-to-b from-[#fffdfa] via-[#fcf7ee] to-[#f7efe0]",
      borderColor: "border-[#e4d4ba]/65",
      tapeVariant: "lavender" as const,
      tapeAngle: 4.5,
      tapePosition: "-top-3.5 right-8",
      specColor: "text-[#825c31]",
    },
  ];

  return (
    <section
      id="artboard"
      className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3] overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c98b2c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#b85d43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#e2d8c6]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>INTERACTIVE DESIGNER ART BOARD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1715] tracking-tight">
              Curated Dress Capsules
            </h2>
            <p className="mt-3 text-[#524b43] font-light max-w-xl text-base">
              Each garment collection features 5 curated editorial angles, highlighting close-up fabric textures, architectural draping, and full silhouettes.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <span className="font-annotation text-2xl text-[#a84a30]">
              {filteredItems.length} Couture Silhouettes &bull; 5 Angles Each
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <Filter className="w-4 h-4 text-[#6e584f] mr-1 hidden sm:block shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-serif tracking-[0.18em] uppercase transition-all whitespace-nowrap border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1a1715] text-[#faf7f2] border-[#1a1715] shadow-xs"
                  : "bg-white/80 text-[#4a443d] border-[#decbb2] hover:border-[#a84a30] hover:text-[#1a1715]"
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
              const theme = cardThemes[index % cardThemes.length];
              const rotations = ["sm:-rotate-[1.2deg]", "sm:rotate-[1.4deg]", "sm:-rotate-[0.8deg]", "sm:rotate-[1.1deg]", "sm:-rotate-[1.4deg]", "sm:rotate-[0.9deg]"];
              const rotClass = rotations[index % rotations.length];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className={`relative cursor-pointer transition-transform duration-300 ${rotClass} hover:rotate-0 group`}
                  onClick={() => handleOpenModal(item)}
                >
                  {/* Washi Tape */}
                  <WashiTape
                    variant={theme.tapeVariant}
                    angle={theme.tapeAngle}
                    className={theme.tapePosition}
                    width="w-24 sm:w-28"
                  />

                  <TornPaperShell topColor={theme.topColor} bottomColor={theme.bottomColor}>
                    <div className={`p-5 sm:p-6 ${theme.cardBg} border-x ${theme.borderColor}`}>
                      
                      {/* Swatch Header Bar */}
                      <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-black/8">
                        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${theme.specColor}`}>
                          LOOK {String(index + 1).padStart(2, "0")} &bull; {item.collection}
                        </span>

                        {/* Color Dots */}
                        <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                          {item.palette.slice(0, 3).map((c, pIdx) => (
                            <span
                              key={pIdx}
                              className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-2xs"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Main Cover Image Frame */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-3 border border-black/5">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#1a1715]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <span className="px-4 py-2 bg-white/95 text-[#1a1715] font-serif text-xs uppercase tracking-[0.2em] flex items-center gap-2 shadow-md">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View 5 Angles</span>
                          </span>
                        </div>

                        {/* Category Stamp */}
                        <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[#1a1715] border border-[#e2d8c6]">
                          {item.category}
                        </div>

                        {/* 5 Photos Badge */}
                        <div className="absolute top-2.5 right-2.5 bg-[#1a1715]/85 text-white backdrop-blur-xs px-2 py-0.5 text-[9px] font-mono flex items-center gap-1.5 shadow-2xs border border-white/10">
                          <Camera className="w-3 h-3 text-[#dfb062]" />
                          <span>5 Angles</span>
                        </div>
                      </div>

                      {/* 5 Thumbnail Preview Strip */}
                      <div className="grid grid-cols-5 gap-1.5 mb-3 px-0.5">
                        {item.gallery.map((thumbUrl, thumbIdx) => (
                          <div
                            key={thumbIdx}
                            className="relative aspect-square overflow-hidden bg-[#e8e0d2] border border-[#decbb2] hover:border-[#a84a30] transition-colors"
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
                      <div className="space-y-1.5 px-0.5">
                        <h3 className="font-serif text-base font-bold text-[#1a1715] leading-snug group-hover:text-[#a84a30] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[#524b43] line-clamp-2 font-normal leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center justify-between border-t border-black/8 mt-2">
                          <span className="font-annotation text-base text-[#a84a30]">
                            Lisa Couture
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#6e584f]">
                            {item.silhouette.split(",")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TornPaperShell>
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
            {/* Backdrop - High Performance Solid Alpha */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-[#1a1715]/75 cursor-pointer will-change-opacity"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-gradient-to-b from-[#fffdfa] via-[#fcf8f0] to-[#f8f1e4] border border-[#decbb2] shadow-2xl overflow-y-auto z-10 p-5 sm:p-8 md:p-10 will-change-transform"
            >
              {/* Decorative Washi Tapes on Modal */}
              <WashiTape variant="terracotta" angle={-3} className="-top-3 left-12" width="w-24 sm:w-28" />
              <WashiTape variant="sage" angle={4} className="-top-3 right-16 opacity-90 hidden sm:block" width="w-24" />

              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 text-[#1a1715] hover:text-[#a84a30] hover:bg-[#efe7d8] transition-all rounded-full z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
                {/* Left: Interactive 5-Image Gallery */}
                <div className="md:col-span-7 space-y-4">
                  {/* Active Large Display */}
                  <div className="relative aspect-[3/4] bg-[#e8e0d2] shadow-inner overflow-hidden border border-[#decbb2]">
                    <Image
                      src={activeItem.gallery[activeImageIndex]}
                      alt={`${activeItem.title} - angle ${activeImageIndex + 1}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />

                    {/* Image Counter Badge */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs px-3 py-1 text-white text-[11px] font-mono uppercase tracking-widest border border-white/10">
                      ANGLE {activeImageIndex + 1} OF {activeItem.gallery.length}
                    </div>

                    {/* Navigation Arrows on image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeItem.gallery.length - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-[#1a1715] shadow-md transition-all cursor-pointer"
                      aria-label="Previous angle"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev < activeItem.gallery.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-[#1a1715] shadow-md transition-all cursor-pointer"
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
                        className={`relative aspect-[3/4] overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-[#a84a30] scale-104 shadow-md"
                            : "border-[#decbb2] opacity-75 hover:opacity-100"
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
                    <span className="inline-block px-3 py-1 bg-[#f5ede1] text-[#a84a30] text-xs font-mono uppercase tracking-widest mb-2 border border-[#decbb2]">
                      {activeItem.collection}
                    </span>
                    <h3 className="text-2xl font-serif text-[#1a1715] font-bold leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="mt-2 text-xs font-mono uppercase text-[#6e584f]">
                      Category: {activeItem.category}
                    </p>
                  </div>

                  <p className="text-sm text-[#4a443d] leading-relaxed font-normal">
                    {activeItem.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-[#decbb2]">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e584f] mb-1 font-semibold">
                        Silhouette &amp; Drape Construction:
                      </span>
                      <p className="text-sm font-serif text-[#1a1715]">
                        {activeItem.silhouette}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e584f] mb-2 font-semibold">
                        Textiles &amp; Embellishments:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeItem.materials.map((m, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white/90 border border-[#decbb2] text-xs text-[#1a1715] font-mono"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6e584f] mb-2 font-semibold">
                        Palette Swatches:
                      </span>
                      <div className="flex items-center gap-3">
                        {activeItem.palette.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span
                              className="w-4 h-4 rounded-full border border-black/20 shadow-2xs"
                              style={{ backgroundColor: c }}
                            />
                            <span className="text-[10px] font-mono text-[#6e584f]">
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#decbb2] flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      onClick={() => setActiveItem(null)}
                      className="w-full text-center px-6 py-3.5 bg-[#1a1715] text-[#faf7f2] font-serif text-xs uppercase tracking-[0.2em] hover:bg-[#a84a30] transition-colors shadow-sm font-semibold"
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
