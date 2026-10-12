"use client";

import React from "react";
import { FashionLogo } from "./FashionLogo";
import { ArrowUp, FolderGit2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TornEdgeTop, WashiTape } from "@/components/MoodboardElements";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1a1715] text-[#faf7f2] pt-12 pb-16 px-6 md:px-12">
      {/* Torn Paper Top Transition into Footer */}
      <div className="absolute -top-3 left-0 w-full overflow-hidden pointer-events-none z-10">
        <TornEdgeTop fill="#1a1715" className="h-3 sm:h-4" />
      </div>

      {/* Decorative Washi Tape on the footer border */}
      <WashiTape variant="terracotta" angle={-3} className="-top-3 left-16 opacity-85" width="w-24 sm:w-28" />
      <WashiTape variant="sage" angle={4} className="-top-3 right-20 opacity-80 hidden sm:block" width="w-24 sm:w-28" />

      <div className="max-w-7xl mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#332f2c] items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <FashionLogo size="md" theme="dark" />
            <p className="text-sm text-[#a69e96] font-light max-w-sm leading-relaxed">
              Haute couture atelier shaping emotion through fine South Asian embroidery, architectural draping, and contemporary heirloom craft.
            </p>
            <p className="font-annotation text-2xl text-[#dfb062]">
              &ldquo;Every seam holds a memory.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-[0.25em] text-[#dfb062] font-semibold">
              Exhibits &amp; Navigation
            </h4>
            <ul className="space-y-2 text-xs font-serif uppercase tracking-wider text-[#a69e96]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Atelier Welcome
                </a>
              </li>
              <li>
                <a href="#artboard" className="hover:text-white transition-colors">
                  Interactive Art Board
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Capsule Collections
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Runway Lookbook
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Design Philosophy
                </a>
              </li>
              <li>
                <a href="#bio" className="hover:text-white transition-colors">
                  Dossier &amp; Bio
                </a>
              </li>
            </ul>
          </div>

          {/* Atelier Direct */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-[0.25em] text-[#dfb062] font-semibold">
              Contact Coordinates
            </h4>
            <p className="text-xs text-[#a69e96] leading-relaxed">
              {PERSONAL_INFO.presentAddress}
            </p>
            <p className="text-xs font-mono text-white">
              {PERSONAL_INFO.email}
            </p>
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#dfb062] hover:text-white transition-colors underline underline-offset-4"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Google Drive Digital Vault</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8278]">
          <p>
            &copy; 2026 Rezowana Afrin (Lisa). All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-[#443e38] text-white hover:border-[#dfb062] hover:text-[#dfb062] transition-all font-serif uppercase tracking-wider text-[11px] cursor-pointer"
          >
            <span>Top of Board</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
