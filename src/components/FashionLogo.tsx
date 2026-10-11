"use client";

import React from "react";
import { motion } from "framer-motion";

interface FashionLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withSubtext?: boolean;
  theme?: "light" | "dark";
}

export const FashionLogo: React.FC<FashionLogoProps> = ({
  className = "",
  size = "md",
  withSubtext = true,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  const sizeMap = {
    sm: { icon: 34, text: "text-base", sub: "text-[9px]" },
    md: { icon: 46, text: "text-xl", sub: "text-[11px]" },
    lg: { icon: 64, text: "text-3xl", sub: "text-xs" },
  };

  const current = sizeMap[size];

  return (
    <motion.div
      className={`inline-flex items-center gap-3.5 group cursor-pointer select-none ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated Haute Couture Monogram Seal */}
      <div className="relative flex items-center justify-center">
        {/* Outer decorative sketch ring */}
        <motion.svg
          width={current.icon}
          height={current.icon}
          viewBox="0 0 100 100"
          className={isDark ? "text-[#f5be38]" : "text-[#b85d43]"}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Deckle / painterly stitch ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="4 6"
            opacity={isDark ? "0.9" : "0.6"}
          />
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke={isDark ? "#f3dfa2" : "#c98b2c"}
            strokeWidth="0.9"
            opacity={isDark ? "0.7" : "0.4"}
          />
        </motion.svg>

        {/* Central Monogram: Stylized Needle & 'RA' / 'L' Signature Drape */}
        <svg
          width={current.icon * 0.72}
          height={current.icon * 0.72}
          viewBox="0 0 60 60"
          className="absolute inset-auto fill-none"
        >
          {/* Couture needle */}
          <motion.path
            d="M30 6 L32 20 L30 54 L28 20 Z"
            fill={isDark ? "#ffffff" : "#b85d43"}
            stroke={isDark ? "#ffffff" : "#b85d43"}
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {/* Thread loop through needle eye */}
          <motion.path
            d="M30 10 C34 4, 44 8, 42 18 C40 26, 20 22, 18 36 C16 46, 32 50, 44 46"
            stroke={isDark ? "#f5be38" : "#c98b2c"}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
          />
          {/* Subtle 'R' & 'A' monogram curve */}
          <path
            d="M22 28 C22 22, 29 22, 29 28 C29 34, 22 34, 22 42"
            stroke={isDark ? "#faf7f2" : "#1a1715"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M29 32 L36 42"
            stroke={isDark ? "#faf7f2" : "#1a1715"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-tight">
        <span
          className={`font-serif tracking-[0.16em] sm:tracking-[0.22em] font-semibold uppercase transition-colors text-sm sm:text-base ${
            isDark
              ? "text-white group-hover:text-[#f5be38]"
              : "text-[#1a1715] group-hover:text-[#b85d43]"
          }`}
        >
          Rezowana Afrin
        </span>
        {withSubtext && (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={`h-[1px] w-3 sm:w-4 ${
                isDark ? "bg-[#f5be38]" : "bg-[#b85d43]/50"
              }`}
            />
            <span
              className={`font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors text-[8px] sm:text-[9px] ${
                isDark
                  ? "text-[#dfd7ce] group-hover:text-white"
                  : "text-[#6e675f] group-hover:text-[#1a1715]"
              }`}
            >
              Haute Couture & Atelier
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
