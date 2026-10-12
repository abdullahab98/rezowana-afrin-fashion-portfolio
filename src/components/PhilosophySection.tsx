"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Feather, Scissors, HeartHandshake, Sparkles, Pin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

import { TornEdgeTop, TornEdgeBottom, WashiTape, TornPaperShell } from "@/components/MoodboardElements";

/* Moodboard Pillar Swatch Configurations */
const PILLAR_CONFIGS = [
  {
    themeName: "TERRACOTTA & HAND EMBROIDERY",
    badgeLabel: "SWATCH • 01",
    palette: [
      { color: "#b85d43", name: "Madder Red" },
      { color: "#e28c74", name: "Terracotta" },
      { color: "#fad7cc", name: "Rose Clay" },
    ],
    paperTopColor: "#fff7f2",
    paperBottomColor: "#fae9df",
    cardBg: "bg-gradient-to-b from-[#fff7f2] via-[#fcf0e7] to-[#fae9df]",
    borderColor: "border-[#e8c6b7]/60",
    iconBg: "bg-[#f5ded5] text-[#a84a30] border border-[#e8c2b4]",
    iconHoverBg: "group-hover:bg-[#a84a30] group-hover:text-white",
    numColor: "text-[#a84a30]",
    dividerColor: "bg-[#deb1a0]",
    titleColor: "text-[#2b1913]",
    descColor: "text-[#5e433a]",
    tapes: [
      { variant: "sage" as const, angle: -4, className: "-top-3.5 left-10", width: "w-24 sm:w-28" },
      { variant: "kraft" as const, angle: 9, className: "-top-2 right-10 opacity-75 hidden sm:block", width: "w-16 sm:w-20" },
    ],
    rotation: "sm:-rotate-[1.4deg]",
    hoverRotation: "hover:rotate-0",
  },
  {
    themeName: "ATELIER SAGE & SCULPTURAL DRAPING",
    badgeLabel: "SWATCH • 02",
    palette: [
      { color: "#2d6349", name: "Spruce Forest" },
      { color: "#5ea07e", name: "Atelier Sage" },
      { color: "#cfe5d8", name: "Celadon Wash" },
    ],
    paperTopColor: "#f3f8f5",
    paperBottomColor: "#e3efe7",
    cardBg: "bg-gradient-to-b from-[#f3f8f5] via-[#ebf4ee] to-[#e3efe7]",
    borderColor: "border-[#bedbca]/60",
    iconBg: "bg-[#d8ebdffe] text-[#24543d] border border-[#b8d8c6]",
    iconHoverBg: "group-hover:bg-[#24543d] group-hover:text-white",
    numColor: "text-[#24543d]",
    dividerColor: "bg-[#9ccbb0]",
    titleColor: "text-[#14261b]",
    descColor: "text-[#395646]",
    tapes: [
      { variant: "terracotta" as const, angle: 3.5, className: "-top-3.5 right-12", width: "w-24 sm:w-28" },
      { variant: "kraft" as const, angle: -7, className: "-bottom-2.5 left-8 opacity-75 hidden sm:block", width: "w-16 sm:w-20" },
    ],
    rotation: "sm:rotate-[1.6deg]",
    hoverRotation: "hover:rotate-0",
  },
  {
    themeName: "RAW HONEY & HEIRLOOM TEXTILES",
    badgeLabel: "SWATCH • 03",
    palette: [
      { color: "#9e6b18", name: "Raw Umber" },
      { color: "#d9a138", name: "Saffron Ochre" },
      { color: "#faecc6", name: "Honey Flax" },
    ],
    paperTopColor: "#fdfbf2",
    paperBottomColor: "#f7efd6",
    cardBg: "bg-gradient-to-b from-[#fdfbf2] via-[#faf4e3] to-[#f7efd6]",
    borderColor: "border-[#e4d4a8]/60",
    iconBg: "bg-[#faedd0] text-[#8c5a0c] border border-[#ebd8a2]",
    iconHoverBg: "group-hover:bg-[#8c5a0c] group-hover:text-white",
    numColor: "text-[#8c5a0c]",
    dividerColor: "bg-[#d8c07e]",
    titleColor: "text-[#2b1f0c]",
    descColor: "text-[#594626]",
    tapes: [
      { variant: "lavender" as const, angle: -2.5, className: "-top-3.5 left-1/2 -translate-x-1/2", width: "w-24 sm:w-28" },
      { variant: "ochre" as const, angle: 6, className: "-bottom-2.5 right-10 opacity-75 hidden sm:block", width: "w-16 sm:w-20" },
    ],
    rotation: "sm:-rotate-[1.2deg]",
    hoverRotation: "hover:rotate-0",
  },
];

export const PhilosophySection: React.FC = () => {
  const { designPhilosophy } = PERSONAL_INFO;
  const icons = [Scissors, Feather, HeartHandshake];

  return (
    <section
      id="philosophy"
      className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3] overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient Moodboard Atmospheric Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#fad7cc]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d4eadb]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Conceptual Manifesto & Torn Sketchpad Note */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* Swatch Tag Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] shadow-xs text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] relative">
              <Compass className="w-3.5 h-3.5" />
              <span>COUTURE MANIFESTO • ATELIER SWATCH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1715] tracking-tight leading-[1.08]">
              {designPhilosophy.headline}
            </h2>

            <p className="text-base text-[#524b43] font-light leading-relaxed">
              {designPhilosophy.subheadline}. Every collection originates on a tactile physical moodboard—swatching unbleached muslins, experimenting with mineral earth washes, and mapping the kinetic drape of fabrics against the human anatomy.
            </p>

            {/* Torn Sketchpad Quote Note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pt-2 transition-transform duration-300 sm:rotate-[1.2deg] hover:rotate-0 group"
            >
              {/* Tapes on the Quote Note */}
              <WashiTape variant="kraft" angle={-6} className="-top-3 left-6" width="w-24 sm:w-28" />
              <WashiTape variant="terracotta" angle={8} className="-bottom-2.5 right-6 opacity-85 hidden sm:block" width="w-20" />

              {/* Seamless Torn Paper Shell with Ragged Drop Shadow */}
              <div className="[filter:drop-shadow(0_8px_18px_rgba(40,30,20,0.08))_drop-shadow(0_2px_4px_rgba(40,30,20,0.05))]">
                {/* Torn Top Edge */}
                <TornEdgeTop fill="#fffdfa" />

                {/* Main Note Body */}
                <div className="p-7 sm:p-8 bg-gradient-to-b from-[#fffdfa] via-[#fcf7ee] to-[#f7efe0] border-x border-[#e4d4ba]/70 relative">
                  
                  {/* Sketch Grid Lines / Moodboard subtle detail */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e8dcc8]/80 text-[10px] font-mono tracking-widest text-[#947d63] uppercase">
                    <span>DESIGNER&apos;S SKETCHPAD NOTE</span>
                    <span>ATELIER SPEC 01</span>
                  </div>

                  <p className="font-annotation text-2xl sm:text-3xl text-[#a84a30] leading-snug">
                    &ldquo;We do not design garments to conceal; we sculpt silhouettes to liberate expression and elevate traditional heritage into modern eternity.&rdquo;
                  </p>

                  <div className="mt-5 pt-3 border-t border-[#e8dcc8]/80 flex items-center justify-between">
                    <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#5e4b3c] font-semibold">
                      — Rezowana Afrin (Lisa)
                    </span>

                    {/* Faint Red Couture Seal Stamp */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 border border-dashed border-[#a84a30]/35 rounded-full text-[9px] font-mono tracking-widest text-[#a84a30]/70 uppercase rotate-[-3deg]">
                      <Sparkles className="w-2.5 h-2.5 text-[#a84a30]/70" />
                      <span>AUTHENTIC COUTURE</span>
                    </div>
                  </div>
                </div>

                {/* Torn Bottom Edge */}
                <TornEdgeBottom fill="#f7efe0" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three Tactile Colorful Torn Paper Swatches */}
          <div className="lg:col-span-7 space-y-7">
            {designPhilosophy.pillars.map((pillar, idx) => {
              const IconComp = icons[idx % icons.length];
              const cfg = PILLAR_CONFIGS[idx % PILLAR_CONFIGS.length];

              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative transition-all duration-300 ${cfg.rotation} ${cfg.hoverRotation} group`}
                >
                  {/* Washi Tapes holding this paper */}
                  {cfg.tapes.map((t, tIdx) => (
                    <WashiTape
                      key={tIdx}
                      variant={t.variant}
                      angle={t.angle}
                      className={t.className}
                      width={t.width}
                    />
                  ))}

                  {/* Seamless Torn Paper Shell with Ragged Drop Shadow */}
                  <div className="[filter:drop-shadow(0_10px_22px_rgba(40,30,20,0.08))_drop-shadow(0_2px_4px_rgba(40,30,20,0.04))] group-hover:[filter:drop-shadow(0_14px_30px_rgba(40,30,20,0.12))] transition-[filter] duration-300">
                    {/* Torn Top Edge */}
                    <TornEdgeTop fill={cfg.paperTopColor} />

                    {/* Main Torn Paper Card Body */}
                    <div
                      className={`p-7 sm:p-8 ${cfg.cardBg} border-x ${cfg.borderColor} relative`}
                    >
                    {/* Header swatch bar on each torn paper note */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/8">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-semibold ${cfg.numColor}`}>
                          {cfg.badgeLabel}
                        </span>
                        <span className="text-[10px] font-mono text-[#827464] tracking-wider uppercase hidden sm:inline">
                          • {cfg.themeName}
                        </span>
                      </div>

                      {/* Mini Textile Palette Swatches (Colorful Dots) */}
                      <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                        {cfg.palette.map((p, pIdx) => (
                          <span
                            key={pIdx}
                            title={p.name}
                            className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-2xs"
                            style={{ backgroundColor: p.color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-5 sm:gap-6">
                      {/* Stylized Icon Chip */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xs ${cfg.iconBg} ${cfg.iconHoverBg} flex items-center justify-center transition-colors duration-300 shadow-xs`}
                      >
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs ${cfg.numColor} tracking-widest font-bold`}>
                            PILLAR {pillar.number}
                          </span>
                          <span className={`h-[1px] w-6 ${cfg.dividerColor}`} />
                          <h3 className={`font-serif text-xl sm:text-2xl font-bold ${cfg.titleColor}`}>
                            {pillar.title}
                          </h3>
                        </div>
                        <p className={`text-sm sm:text-[15px] ${cfg.descColor} font-normal leading-relaxed`}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Torn Bottom Edge */}
                  <TornEdgeBottom fill={cfg.paperBottomColor} />
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


