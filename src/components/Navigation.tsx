"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FashionLogo } from "./FashionLogo";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Art Board", href: "#artboard" },
    { label: "Collections", href: "#collections" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Dossier", href: "#bio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-[#fffbf9]/95 backdrop-blur-md shadow-sm border-b border-[#f0e6e2] py-2.5 sm:py-3"
          : "bg-[#fffbf9]/90 backdrop-blur-md border-b border-[#f0e6e2]/80 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - compact on mobile so it never gets clipped */}
        <a href="#hero" className="outline-none focus:ring-0 shrink-0">
          <FashionLogo size="sm" withSubtext={true} />
        </a>

        {/* Desktop Navigation Links — All single-line, clean, perfectly balanced */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 text-xs tracking-[0.16em] uppercase font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-[#e27d8e] font-semibold"
                    : "text-[#2c2825] hover:text-[#e27d8e]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#e27d8e]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Luxury Single-Line Button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-serif tracking-[0.18em] uppercase whitespace-nowrap text-[#1a1715] bg-white border border-[#2c2825] hover:bg-[#1a1715] hover:text-[#fffbf9] transition-all duration-300 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#e27d8e] group-hover:text-[#fffbf9] transition-colors" />
            <span>Book Atelier</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1a1715] hover:text-[#e27d8e] transition-colors rounded-md active:bg-[#f0e6e2]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu - Opens neatly below header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#fffbf9] border-b border-[#f0e6e2] px-6 py-5 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-serif tracking-[0.18em] uppercase text-[#1a1715] hover:text-[#e27d8e] transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#f0e6e2]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.2em] bg-[#1a1715] text-[#fffbf9] font-serif"
                >
                  <span>Book Atelier Session</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
