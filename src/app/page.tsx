"use client";

import React, { useEffect, useState } from "react";
import { PaintingBackground } from "@/components/PaintingBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ArtBoardSection } from "@/components/ArtBoardSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { RunwayLookbookSection } from "@/components/RunwayLookbookSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { BioSection } from "@/components/BioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ClaymorphismDemo } from "@/components/ClaymorphismDemo";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "artboard", "collections", "lookbook", "philosophy", "bio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen text-[#1a1715] w-full max-w-full overflow-x-hidden">
      {/* Living Watercolor Fluid Painting Background */}
      <PaintingBackground />

      {/* Haute Couture Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Hero Welcome & Art Board Collage */}
      <HeroSection />

      {/* Interactive Art Board & Swatch Draping Grid */}
      <ArtBoardSection />

      {/* Curated Seasonal Collections & Capsules */}
      <CollectionsSection />

      {/* Runway Lookbook Filmstrip Reel */}
      <RunwayLookbookSection />

      {/* Conceptual Manifesto & Design Philosophy */}
      <PhilosophySection />

      {/* Official Biography, SSC/HSC Education, & Dossier */}
      <BioSection />

      {/* Private Atelier Inquiries & Commission Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Claymorphism Test Demo Floating Sandbox */}
      <ClaymorphismDemo />
    </main>
  );
}
