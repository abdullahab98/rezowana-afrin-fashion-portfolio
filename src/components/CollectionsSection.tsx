"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Layers } from "lucide-react";
import { COLLECTIONS } from "@/data/portfolioData";

export const CollectionsSection: React.FC = () => {
  return (
    <section id="collections" className="relative py-28 px-6 md:px-12 bg-[#f4eee3]/60 border-y border-[#e6dfd3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#e2d8c6] text-[11px] font-mono uppercase tracking-[0.25em] text-[#b85d43] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Seasonal Capsules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            Curated Collections & Narratives
          </h2>
          <p className="mt-3 text-[#6e675f] text-base font-light">
            Each collection explores a distinct emotional and material dialogue—from rich nocturnal velvets to whispered botanical organzas.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {COLLECTIONS.map((col, idx) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="art-matte group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with tape flourish */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e0d2] mb-6">
                  <div className="masking-tape -top-2 left-8 rotate-[-2deg]" />
                  <Image
                    src={col.coverImage}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200">
                        {col.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                        {col.title}
                      </h3>
                    </div>
                    <span className="font-annotation text-2xl text-amber-100">
                      Capsule 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#4a443d] font-light leading-relaxed mb-6 px-1">
                  {col.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#f0eae0] flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e675f]">
                  Atelier Couture Archive
                </span>
                <a
                  href="#artboard"
                  className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-[0.2em] text-[#b85d43] hover:text-[#1a1715] transition-colors"
                >
                  <span>View Looks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

