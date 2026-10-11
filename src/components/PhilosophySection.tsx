"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Feather, Scissors, HeartHandshake, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const PhilosophySection: React.FC = () => {
  const { designPhilosophy } = PERSONAL_INFO;

  const icons = [Scissors, Feather, HeartHandshake];

  return (
    <section id="philosophy" className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Conceptual Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efe7d8] border border-[#ded3c0] text-[11px] font-mono uppercase tracking-[0.25em] text-[#b85d43]">
              <Compass className="w-3.5 h-3.5" />
              <span>Couture Manifesto</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1715] tracking-tight leading-[1.08]">
              {designPhilosophy.headline}
            </h2>

            <p className="text-base text-[#524b43] font-light leading-relaxed">
              {designPhilosophy.subheadline}. Every collection originates on a tactile physical moodboard—swatching unbleached muslins, experimenting with mineral earth washes, and mapping the kinetic drape of fabrics against the human anatomy.
            </p>

            <div className="p-6 bg-white border border-[#e2d8c6] shadow-sm relative">
              <div className="masking-tape -top-3 left-6" />
              <p className="font-annotation text-2xl text-[#b85d43] leading-snug">
                "We do not design garments to conceal; we sculpt silhouettes to liberate expression and elevate traditional heritage into modern eternity."
              </p>
              <span className="block mt-3 text-xs font-serif uppercase tracking-[0.2em] text-[#6e675f]">
                — Rezowana Afrin (Lisa)
              </span>
            </div>
          </div>

          {/* Right Column: Three Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {designPhilosophy.pillars.map((pillar, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-8 bg-white/80 border border-[#e2d8c6] hover:border-[#b85d43] transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 shrink-0 bg-[#f7f2e7] border border-[#e4d9c5] flex items-center justify-center text-[#b85d43] group-hover:bg-[#b85d43] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#b85d43] tracking-widest font-semibold">
                          PILLAR {pillar.number}
                        </span>
                        <span className="h-[1px] w-6 bg-[#dcd0bc]" />
                        <h3 className="font-serif text-xl font-bold text-[#1a1715]">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#6e675f] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

