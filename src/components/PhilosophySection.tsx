"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Feather, Scissors, HeartHandshake, Sparkles, Pin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

/* Realistic Torn Paper Jagged Edges */
const TORN_PATH_TOP = "M0,10 L1200,10 L1200,5 L1200,5.0 L1185,3.4 L1170,5.7 L1155,4.0 L1140,5.1 L1125,3.6 L1110,6.2 L1095,4.6 L1080,3.0 L1065,5.9 L1050,4.3 L1035,5.4 L1020,3.9 L1005,6.1 L990,4.7 L975,3.2 L960,5.6 L945,3.8 L930,6.3 L915,4.1 L900,5.2 L885,3.5 L870,6.0 L855,4.9 L840,2.8 L825,5.5 L810,3.7 L795,4.4 L780,6.2 L765,3.1 L750,5.8 L735,4.2 L720,5.0 L705,3.3 L690,6.4 L675,4.8 L660,2.9 L645,5.7 L630,3.6 L615,6.1 L600,4.0 L585,5.3 L570,3.4 L555,6.3 L540,4.7 L525,3.0 L510,5.6 L495,3.9 L480,4.3 L465,6.0 L450,2.8 L435,5.1 L420,3.5 L405,6.5 L390,4.8 L375,3.3 L360,5.7 L345,4.1 L330,6.2 L315,3.8 L300,5.4 L285,2.7 L270,4.5 L255,6.0 L240,3.2 L225,5.9 L210,3.6 L195,4.2 L180,6.3 L165,2.9 L150,5.0 L135,3.7 L120,6.4 L105,4.9 L90,3.1 L75,5.8 L60,4.0 L45,6.1 L30,2.8 L15,5.2 L0,3.5 Z";
const TORN_PATH_BOTTOM = "M0,0 L1200,0 L1200,5.0 L1200,5.0 L1185,6.6 L1170,4.3 L1155,6.0 L1140,4.9 L1125,6.4 L1110,3.8 L1095,5.4 L1080,7.0 L1065,4.1 L1050,5.7 L1035,4.6 L1020,6.1 L1005,3.9 L990,5.3 L975,6.8 L960,4.4 L945,6.2 L930,3.7 L915,5.9 L900,4.8 L885,6.5 L870,4.0 L855,5.1 L840,7.2 L825,4.5 L810,6.3 L795,5.6 L780,3.8 L765,6.9 L750,4.2 L735,5.8 L720,5.0 L705,6.7 L690,3.6 L675,5.2 L660,7.1 L645,4.3 L630,6.4 L615,3.9 L600,6.0 L585,4.7 L570,6.6 L555,3.7 L540,5.3 L525,7.0 L510,4.4 L495,6.1 L480,5.7 L465,4.0 L450,7.2 L435,4.9 L420,6.5 L405,3.5 L390,5.2 L375,6.7 L360,4.3 L345,5.9 L330,3.8 L315,6.2 L300,4.6 L285,7.3 L270,5.5 L255,4.0 L240,6.8 L225,4.1 L210,6.4 L195,5.8 L180,3.7 L165,7.1 L150,5.0 L135,6.3 L120,3.6 L105,5.1 L90,6.9 L75,4.2 L60,6.0 L45,3.9 L30,7.2 L15,4.8 L0,6.5 Z";

function TornEdgeTop({ fill, className = "" }: { fill: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 10"
      preserveAspectRatio="none"
      className={`w-full h-2.5 sm:h-3 block -mb-[1px] ${className}`}
      fill={fill}
    >
      <path d={TORN_PATH_TOP} />
    </svg>
  );
}

function TornEdgeBottom({ fill, className = "" }: { fill: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 10"
      preserveAspectRatio="none"
      className={`w-full h-2.5 sm:h-3 block -mt-[1px] ${className}`}
      fill={fill}
    >
      <path d={TORN_PATH_BOTTOM} />
    </svg>
  );
}

/* Authentic Translucent Washi Tape with Jagged Ends */
interface WashiTapeProps {
  className?: string;
  variant?: "terracotta" | "sage" | "ochre" | "lavender" | "kraft" | "blush";
  angle?: number;
  width?: string;
}

const TAPE_VARIANTS = {
  kraft: {
    bg: "from-[#f5e6d0]/92 via-[#eedcc4]/85 to-[#f7e9d5]/92",
    border: "border-[#d8be98]/60",
    shadow: "shadow-[0_2px_6px_rgba(80,50,20,0.14)]",
  },
  terracotta: {
    bg: "from-[#fcd5c9]/92 via-[#f5baa9]/85 to-[#fcd5c9]/92",
    border: "border-[#d88974]/60",
    shadow: "shadow-[0_2px_6px_rgba(180,60,40,0.15)]",
  },
  sage: {
    bg: "from-[#d4eadb]/92 via-[#bfdeca]/85 to-[#d4eadb]/92",
    border: "border-[#8cb89d]/60",
    shadow: "shadow-[0_2px_6px_rgba(40,100,60,0.14)]",
  },
  ochre: {
    bg: "from-[#fae9bc]/92 via-[#f3da99]/85 to-[#fae9bc]/92",
    border: "border-[#d4a84d]/60",
    shadow: "shadow-[0_2px_6px_rgba(160,110,20,0.14)]",
  },
  lavender: {
    bg: "from-[#e5ddf2]/92 via-[#d4c6e8]/85 to-[#e5ddf2]/92",
    border: "border-[#af98cc]/60",
    shadow: "shadow-[0_2px_6px_rgba(100,70,140,0.14)]",
  },
  blush: {
    bg: "from-[#fad7dc]/92 via-[#f2bcc5]/85 to-[#fad7dc]/92",
    border: "border-[#d992a0]/60",
    shadow: "shadow-[0_2px_6px_rgba(180,70,100,0.14)]",
  },
};

const WashiTape: React.FC<WashiTapeProps> = ({
  className = "",
  variant = "kraft",
  angle = -3,
  width = "w-24 sm:w-28",
}) => {
  const conf = TAPE_VARIANTS[variant] || TAPE_VARIANTS.kraft;
  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`absolute h-6 sm:h-7 ${width} bg-gradient-to-r ${conf.bg} ${conf.shadow} border-y ${conf.border} backdrop-blur-[1px] z-20 pointer-events-none transition-transform duration-300 ${className}`}
    >
      {/* Sawtooth / jagged ripped ends */}
      <div className="absolute inset-y-0 -left-1.5 w-2 bg-inherit [clip-path:polygon(100%_0,0_25%,100%_50%,0_75%,100%_100%)]" />
      <div className="absolute inset-y-0 -right-1.5 w-2 bg-inherit [clip-path:polygon(0_0,100%_25%,0_50%,100%_75%,0_100%)]" />
      {/* Glossy tape highlight line */}
      <div className="w-full h-[1px] bg-white/45 mt-1" />
    </div>
  );
};

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


