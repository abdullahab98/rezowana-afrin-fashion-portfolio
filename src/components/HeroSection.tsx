"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Compass, Play, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative Atelier Sketch Lines & Corner Marks */}
      <div className="absolute top-28 left-8 md:left-16 text-[11px] font-mono tracking-widest text-[#6e675f]/50 select-none">
        FIG. 01 — HAUTE COUTURE ATELIER &bull; ARCHIVE
      </div>
      <div className="absolute top-28 right-8 md:right-16 text-[11px] font-mono tracking-widest text-[#6e675f]/50 select-none hidden sm:block">
        DHAKA &bull; DINAJPUR &bull; 23°48'N 90°24'E
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Heading & Designer Statement */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#f3ede2] border border-[#e2d8c6] mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b85d43]" />
            <span className="text-[11px] font-serif tracking-[0.25em] uppercase text-[#1a1715]">
              Haute Couture &bull; Textile Sculpture &bull; Art Board
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#1a1715] leading-[0.98] tracking-tight mb-6"
          >
            Rezowana <br />
            <span className="italic font-light text-[#b85d43] relative inline-block">
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
            className="text-lg md:text-xl text-[#4a443d] max-w-xl font-light leading-relaxed mb-4"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-4 md:p-5 bg-white/70 backdrop-blur-sm border-l-2 border-[#b85d43] border-y border-r border-[#e8e0d2] max-w-xl mb-8 shadow-[0_4px_20px_rgba(26,23,21,0.03)]"
          >
            <p className="font-annotation text-2xl text-[#b85d43] leading-snug">
              "{PERSONAL_INFO.statement}"
            </p>
            <span className="block mt-2 text-[11px] font-serif uppercase tracking-[0.2em] text-[#6e675f]">
              — Lisa Afrin, Creative Director
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#artboard"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#1a1715] text-[#faf7f2] font-serif text-xs tracking-[0.25em] uppercase hover:bg-[#b85d43] transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Explore Art Board</span>
              <Compass className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.videoShowreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/80 hover:bg-white text-[#1a1715] border border-[#d8cfbe] font-serif text-xs tracking-[0.2em] uppercase hover:border-[#b85d43] transition-all"
            >
              <Play className="w-3.5 h-3.5 text-[#b85d43] fill-current" />
              <span>Watch Video Reel</span>
            </a>

            <a
              href={PERSONAL_INFO.driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-serif tracking-[0.18em] uppercase text-[#6e675f] hover:text-[#1a1715] underline underline-offset-4 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Google Drive Archive</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Layered Art Board Collage Hero Visual */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[460px] md:min-h-[560px]">
          {/* Background Painterly Splash */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#b85d43]/20 via-[#c98b2c]/20 to-transparent blur-3xl pointer-events-none" />

          {/* Secondary Layered Frame - Behind */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -5, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-4 -left-4 sm:left-4 w-56 sm:w-64 md:w-72 art-matte z-10"
          >
            {/* Washi masking tape effect */}
            <div className="masking-tape -top-3 left-1/2 -translate-x-1/2" />
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2]">
              <Image
                src="/portfolio/MHP00149.jpg"
                alt="Rezowana Afrin Royal Bridal Drape"
                fill
                sizes="(max-width: 768px) 250px, 300px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pt-2 text-center">
              <span className="font-annotation text-lg text-[#6e675f]">
                Nocturne Crimson Study No. 11
              </span>
            </div>
          </motion.div>

          {/* Primary Layered Frame - Front Featured */}
          <motion.div
            initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-64 sm:w-72 md:w-80 art-matte z-20 shadow-2xl ml-12 sm:ml-20 mt-12"
          >
            {/* Top Washi Tape */}
            <div className="masking-tape -top-3 right-6 rotate-3" />
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2]">
              <Image
                src="/portfolio/MHP00075.jpg"
                alt="Rezowana Afrin Haute Couture Velvet Gown"
                fill
                priority
                sizes="(max-width: 768px) 300px, 350px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#1a1715]/80 backdrop-blur-md px-2.5 py-1 text-[10px] tracking-widest text-[#faf7f2] font-mono uppercase">
                COUTURE ARCHIVE
              </div>
            </div>
            <div className="pt-3 px-1 flex justify-between items-end border-t border-[#f0eae0] mt-2">
              <div>
                <p className="font-serif text-xs font-semibold uppercase tracking-wider text-[#1a1715]">
                  Velvet Midnight Plissé
                </p>
                <p className="text-[10px] text-[#6e675f] font-mono tracking-tight">
                  Hand-draped Silk Velvet
                </p>
              </div>
              <span className="font-annotation text-xl text-[#b85d43]">Look 01</span>
            </div>
          </motion.div>

          {/* Third Accent Polaroid - Small Sketch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-6 -left-2 sm:left-2 w-40 sm:w-48 art-matte z-30 shadow-xl hidden sm:block"
          >
            <div className="relative aspect-square overflow-hidden bg-[#e8e0d2]">
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 sm:mt-24 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#6e675f]">
          Scroll to explore atelier
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#b85d43]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

