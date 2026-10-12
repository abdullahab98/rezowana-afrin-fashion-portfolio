"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Compass, Play, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { WashiTape, TornEdgeBottom, TornPaperShell } from "@/components/MoodboardElements";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 overflow-hidden w-full max-w-full"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient Moodboard Atmospheric Lighting */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-[#fad7cc]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#d4eadb]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Atelier Sketch Lines & Corner Marks */}
      <div className="absolute top-24 sm:top-28 left-4 sm:left-8 md:left-16 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#6e675f]/60 select-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#a84a30]/60 inline-block" />
        <span>FIG. 01 — HAUTE COUTURE ATELIER &bull; ARCHIVE</span>
      </div>
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 md:right-16 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#6e675f]/60 select-none hidden md:flex items-center gap-2">
        <span>DHAKA &bull; DINAJPUR &bull; 23°48&apos;N 90°24&apos;E</span>
        <span className="w-2 h-2 rounded-full bg-[#24543d]/60 inline-block" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Heading & Designer Statement */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] mb-5 shadow-xs max-w-full overflow-hidden"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a84a30] shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-serif tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#1a1715] truncate">
              Haute Couture &bull; Textile Sculpture
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#1a1715] leading-[0.98] tracking-tight mb-5"
          >
            Rezowana <br />
            <span className="italic font-light text-[#a84a30] relative inline-block">
              Afrin
              {/* Subtle painterly underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-[#c98b2c]/60"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8 C 50 2, 150 12, 198 4"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#4a443d] max-w-xl font-light leading-relaxed mb-6"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Torn Sketchbook Statement Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xl mb-6 sm:mb-8 transition-transform duration-300 sm:rotate-[0.8deg] hover:rotate-0"
          >
            <WashiTape variant="kraft" angle={-5} className="-top-3 left-6" width="w-24 sm:w-28" />

            <TornPaperShell topColor="#fffdfa" bottomColor="#f7efe0">
              <div className="p-5 md:p-6 bg-gradient-to-b from-[#fffdfa] via-[#fcf7ee] to-[#f7efe0] border-x border-[#e4d4ba]/70">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e8dcc8]/70 text-[9px] font-mono tracking-widest text-[#947d63] uppercase">
                  <span>ATELIER MANIFESTO STATEMENT</span>
                  <span>LISA &bull; ATELIER DIR</span>
                </div>
                <p className="font-annotation text-xl sm:text-2xl text-[#a84a30] leading-snug">
                  &ldquo;{PERSONAL_INFO.statement}&rdquo;
                </p>
                <span className="block mt-2.5 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.2em] text-[#5e4b3c] font-semibold">
                  — Lisa, Creative Director
                </span>
              </div>
            </TornPaperShell>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 w-full"
          >
            <a
              href="#artboard"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#1a1715] text-[#faf7f2] font-serif text-xs tracking-[0.2em] uppercase hover:bg-[#a84a30] transition-colors shadow-md"
            >
              <span>Explore Art Board</span>
              <Compass className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.videoShowreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/80 hover:bg-white text-[#1a1715] border border-[#d8cfbe] font-serif text-xs tracking-[0.18em] uppercase hover:border-[#a84a30] transition-all shadow-2xs"
            >
              <Play className="w-3.5 h-3.5 text-[#a84a30] fill-current" />
              <span>Watch Reel</span>
            </a>

            <a
              href={PERSONAL_INFO.driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 text-xs font-serif tracking-[0.16em] uppercase text-[#6e675f] hover:text-[#1a1715] underline underline-offset-4 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Drive Vault</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Layered Art Board Collage Hero Visual */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[380px] sm:min-h-[460px] md:min-h-[560px] w-full max-w-full overflow-hidden sm:overflow-visible py-4">
          {/* Background Painterly Splash */}
          <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-[#b85d43]/15 via-[#c98b2c]/15 to-transparent blur-3xl pointer-events-none" />

          {/* Secondary Layered Frame - Behind */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-2 left-2 sm:left-4 w-44 sm:w-64 md:w-72 z-10 transition-transform duration-300 hover:rotate-0"
          >
            {/* Washi masking tape */}
            <WashiTape variant="sage" angle={-4} className="-top-3 left-1/2 -translate-x-1/2" width="w-20 sm:w-24" />

            <div className="bg-[#fcf8f0] p-2.5 sm:p-3 pb-3 border-x border-t border-[#e2d5bf] shadow-[0_8px_20px_rgba(40,30,20,0.08)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-2 border border-black/5">
                <Image
                  src="/portfolio/MHP00149.jpg"
                  alt="Rezowana Afrin Royal Bridal Drape"
                  fill
                  sizes="(max-width: 768px) 200px, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <span className="font-annotation text-sm sm:text-lg text-[#6e675f]">
                  Nocturne Crimson Study No. 11
                </span>
              </div>
            </div>
            <TornEdgeBottom fill="#fcf8f0" />
          </motion.div>

          {/* Primary Layered Frame - Front Featured */}
          <motion.div
            initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-52 sm:w-72 md:w-80 z-20 ml-16 sm:ml-20 mt-8 sm:mt-12 transition-transform duration-300 hover:rotate-0"
          >
            {/* Top Washi Tapes */}
            <WashiTape variant="terracotta" angle={4} className="-top-3.5 right-6" width="w-24 sm:w-28" />
            <WashiTape variant="kraft" angle={-8} className="-bottom-2.5 left-4 opacity-80 hidden sm:block" width="w-16" />

            <div className="bg-[#fffdfa] p-3 sm:p-3.5 pb-3 border-x border-t border-[#e8dcc8] shadow-[0_12px_30px_rgba(40,30,20,0.12)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] border border-black/5">
                <Image
                  src="/portfolio/MHP00075.jpg"
                  alt="Rezowana Afrin Haute Couture Velvet Gown"
                  fill
                  priority
                  sizes="(max-width: 768px) 250px, 350px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1a1715]/85 backdrop-blur-xs px-2.5 py-0.5 text-[9px] sm:text-[10px] tracking-widest text-[#faf7f2] font-mono uppercase border border-white/10">
                  COUTURE ARCHIVE
                </div>
              </div>
              <div className="pt-2 px-1 flex justify-between items-end border-t border-[#f0eae0] mt-2">
                <div>
                  <p className="font-serif text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1a1715]">
                    Alabaster Plissé Gown
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#6e675f] font-mono tracking-tight">
                    Hand-draped Silhouette
                  </p>
                </div>
                <span className="font-annotation text-base sm:text-xl text-[#a84a30]">Look 01</span>
              </div>
            </div>
            <TornEdgeBottom fill="#fffdfa" />
          </motion.div>

          {/* Third Accent Polaroid - Small Sketch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-6 -left-2 sm:left-2 w-40 sm:w-48 z-30 hidden sm:block transition-transform duration-300 hover:rotate-0"
          >
            <WashiTape variant="lavender" angle={-3} className="-top-2.5 left-6" width="w-16 sm:w-20" />

            <div className="bg-[#faf5eb] p-2 sm:p-2.5 pb-2.5 border-x border-t border-[#dfd2bc] shadow-[0_8px_20px_rgba(40,30,20,0.08)]">
              <div className="relative aspect-square overflow-hidden bg-[#e8e0d2] border border-black/5">
                <Image
                  src="/portfolio/MHP00090.jpg"
                  alt="Baroque Filigree Study"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div className="pt-1.5 text-center">
                <span className="font-annotation text-base text-[#1a1715]">
                  Corsetry Filigree Study
                </span>
              </div>
            </div>
            <TornEdgeBottom fill="#faf5eb" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 sm:mt-24 flex flex-col items-center gap-2 relative z-10"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#6e675f]">
          Scroll to explore atelier
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#a84a30]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
