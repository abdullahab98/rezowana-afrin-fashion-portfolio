"use client";

import React from "react";

/* Deterministic micro-jagged torn paper paths (no bezier oscillation) */
export const TORN_PATH_TOP =
  "M0,10 L1200,10 L1200,5 L1200,5.0 L1185,3.4 L1170,5.7 L1155,4.0 L1140,5.1 L1125,3.6 L1110,6.2 L1095,4.6 L1080,3.0 L1065,5.9 L1050,4.3 L1035,5.4 L1020,3.9 L1005,6.1 L990,4.7 L975,3.2 L960,5.6 L945,3.8 L930,6.3 L915,4.1 L900,5.2 L885,3.5 L870,6.0 L855,4.9 L840,2.8 L825,5.5 L810,3.7 L795,4.4 L780,6.2 L765,3.1 L750,5.8 L735,4.2 L720,5.0 L705,3.3 L690,6.4 L675,4.8 L660,2.9 L645,5.7 L630,3.6 L615,6.1 L600,4.0 L585,5.3 L570,3.4 L555,6.3 L540,4.7 L525,3.0 L510,5.6 L495,3.9 L480,4.3 L465,6.0 L450,2.8 L435,5.1 L420,3.5 L405,6.5 L390,4.8 L375,3.3 L360,5.7 L345,4.1 L330,6.2 L315,3.8 L300,5.4 L285,2.7 L270,4.5 L255,6.0 L240,3.2 L225,5.9 L210,3.6 L195,4.2 L180,6.3 L165,2.9 L150,5.0 L135,3.7 L120,6.4 L105,4.9 L90,3.1 L75,5.8 L60,4.0 L45,6.1 L30,2.8 L15,5.2 L0,3.5 Z";

export const TORN_PATH_BOTTOM =
  "M0,0 L1200,0 L1200,5.0 L1200,5.0 L1185,6.6 L1170,4.3 L1155,6.0 L1140,4.9 L1125,6.4 L1110,3.8 L1095,5.4 L1080,7.0 L1065,4.1 L1050,5.7 L1035,4.6 L1020,6.1 L1005,3.9 L990,5.3 L975,6.8 L960,4.4 L945,6.2 L930,3.7 L915,5.9 L900,4.8 L885,6.5 L870,4.0 L855,5.1 L840,7.2 L825,4.5 L810,6.3 L795,5.6 L780,3.8 L765,6.9 L750,4.2 L735,5.8 L720,5.0 L705,6.7 L690,3.6 L675,5.2 L660,7.1 L645,4.3 L630,6.4 L615,3.9 L600,6.0 L585,4.7 L570,6.6 L555,3.7 L540,5.3 L525,7.0 L510,4.4 L495,6.1 L480,5.7 L465,4.0 L450,7.2 L435,4.9 L420,6.5 L405,3.5 L390,5.2 L375,6.7 L360,4.3 L345,5.9 L330,3.8 L315,6.2 L300,4.6 L285,7.3 L270,5.5 L255,4.0 L240,6.8 L225,4.1 L210,6.4 L195,5.8 L180,3.7 L165,7.1 L150,5.0 L135,6.3 L120,3.6 L105,5.1 L90,6.9 L75,4.2 L60,6.0 L45,3.9 L30,7.2 L15,4.8 L0,6.5 Z";

export function TornEdgeTop({ fill, className = "" }: { fill: string; className?: string }) {
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

export function TornEdgeBottom({ fill, className = "" }: { fill: string; className?: string }) {
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

export interface WashiTapeProps {
  className?: string;
  variant?: "terracotta" | "sage" | "ochre" | "lavender" | "kraft" | "blush" | "sky";
  angle?: number;
  width?: string;
}

export const TAPE_VARIANTS = {
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
  sky: {
    bg: "from-[#d8eaf5]/92 via-[#c5dceb]/85 to-[#d8eaf5]/92",
    border: "border-[#8faec4]/60",
    shadow: "shadow-[0_2px_6px_rgba(40,80,120,0.14)]",
  },
};

export const WashiTape: React.FC<WashiTapeProps> = ({
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

/* Reusable Torn Paper Shell container */
interface TornPaperShellProps {
  topColor: string;
  bottomColor: string;
  className?: string;
  children: React.ReactNode;
}

export const TornPaperShell: React.FC<TornPaperShellProps> = ({
  topColor,
  bottomColor,
  className = "",
  children,
}) => {
  return (
    <div
      className={`[filter:drop-shadow(0_8px_20px_rgba(40,30,20,0.08))_drop-shadow(0_2px_4px_rgba(40,30,20,0.04))] hover:[filter:drop-shadow(0_12px_28px_rgba(40,30,20,0.12))] transition-[filter] duration-300 ${className}`}
    >
      <TornEdgeTop fill={topColor} />
      {children}
      <TornEdgeBottom fill={bottomColor} />
    </div>
  );
};
