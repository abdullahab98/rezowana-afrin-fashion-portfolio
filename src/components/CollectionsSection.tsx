"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/data/portfolioData";
import { TornPaperShell, WashiTape } from "@/components/MoodboardElements";

export const CollectionsSection: React.FC = () => {
  const collectionThemes = [
    {
      topColor: "#fff7f2",
      bottomColor: "#fae9df",
      cardBg: "bg-gradient-to-b from-[#fff7f2] via-[#faefe7] to-[#fae9df]",
      borderColor: "border-[#eac6b7]/60",
      tapeVariant: "terracotta" as const,
      tapeAngle: -4,
      tapePosition: "-top-3.5 left-10",
      rotation: "sm:-rotate-[1.2deg]",
      palette: ["#b85d43", "#e28c74", "#fad7cc"],
      specLabel: "CAPSULE SPEC 01 • ATELIER SIGNATURE",
    },
    {
      topColor: "#f2f8f5",
      bottomColor: "#e2efe7",
      cardBg: "bg-gradient-to-b from-[#f2f8f5] via-[#ebf4ef] to-[#e2efe7]",
      borderColor: "border-[#bedbca]/60",
      tapeVariant: "sage" as const,
      tapeAngle: 3.5,
      tapePosition: "-top-3.5 right-12",
      rotation: "sm:rotate-[1.4deg]",
      palette: ["#24543d", "#5ea07e", "#cfe5d8"],
      specLabel: "CAPSULE SPEC 02 • FESTIVE & BRIDAL",
    },
  ];

  return (
    <section
      id="collections"
      className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3] overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-[#fad7cc]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-[#d4eadb]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEASONAL CAPSULES &bull; MOODBOARD SWATCHES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            Curated Collections &amp; Narratives
          </h2>
          <p className="mt-3 text-[#524b43] text-base font-light">
            Each collection explores a distinct emotional and material dialogue—from rich nocturnal velvets to whispered botanical organzas.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {COLLECTIONS.map((col, idx) => {
            const theme = collectionThemes[idx % collectionThemes.length];

            return (
              <motion.div
                key={col.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative transition-transform duration-300 ${theme.rotation} hover:rotate-0 group`}
              >
                {/* Washi Tapes */}
                <WashiTape
                  variant={theme.tapeVariant}
                  angle={theme.tapeAngle}
                  className={theme.tapePosition}
                  width="w-24 sm:w-28"
                />

                <TornPaperShell topColor={theme.topColor} bottomColor={theme.bottomColor}>
                  <div className={`p-6 sm:p-7 ${theme.cardBg} border-x ${theme.borderColor} flex flex-col justify-between`}>
                    <div>
                      {/* Swatch Header Bar */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-black/8">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#825c31]">
                          {theme.specLabel}
                        </span>

                        {/* Color Chips */}
                        <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                          {theme.palette.map((color, pIdx) => (
                            <span
                              key={pIdx}
                              className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-2xs"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e0d2] mb-5 border border-black/5">
                        <Image
                          src={col.coverImage}
                          alt={col.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-85" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200 block mb-0.5">
                              {col.subtitle}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                              {col.title}
                            </h3>
                          </div>
                          <span className="font-annotation text-2xl text-amber-100">
                            Capsule 0{idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#4a443d] font-normal leading-relaxed mb-5 px-1">
                        {col.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="pt-4 border-t border-black/8 flex items-center justify-between px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e584f]">
                        Atelier Couture Archive
                      </span>
                      <a
                        href="#artboard"
                        className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-[0.2em] text-[#a84a30] hover:text-[#1a1715] transition-colors font-semibold"
                      >
                        <span>View Looks</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </TornPaperShell>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
