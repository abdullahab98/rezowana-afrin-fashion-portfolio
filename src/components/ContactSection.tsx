"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Sparkles, 
  FolderGit2, 
  Play, 
  CheckCircle2,
  ExternalLink,
  Send
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TornPaperShell, WashiTape } from "@/components/MoodboardElements";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    serviceType: "Bespoke Bridal Couture",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIVATE ATELIER INQUIRIES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            Commission a Silhouette
          </h2>
          <p className="mt-3 text-[#524b43] text-base font-light">
            Whether for bespoke bridal couture, editorial styling, or custom textile installations—the atelier welcomes your creative collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Atelier Coordinates Card */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative transition-transform duration-300 sm:-rotate-[1.2deg] hover:rotate-0 group"
            >
              {/* Washi Tapes */}
              <WashiTape variant="terracotta" angle={-4} className="-top-3.5 left-10" width="w-24 sm:w-28" />
              <WashiTape variant="kraft" angle={7} className="-bottom-2.5 right-8 opacity-80 hidden sm:block" width="w-20" />

              <TornPaperShell topColor="#f2f8f5" bottomColor="#e2efe7">
                <div className="p-7 sm:p-8 bg-gradient-to-b from-[#f2f8f5] via-[#ebf4ef] to-[#e2efe7] border-x border-[#bedbca]/65 space-y-6">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-black/8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#24543d]">
                      STUDIO SPEC • 01 COORDINATES
                    </span>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#24543d] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5ea07e] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cfe5d8] border border-black/10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#14261b]">
                    Atelier Coordinates
                  </h3>
                  <p className="text-sm text-[#3b5948] font-normal leading-relaxed">
                    Consultations and fitting sessions are hosted by private appointment at the studio in Uttara, Dhaka.
                  </p>

                  <div className="space-y-4 pt-1">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-[#24543d] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-[#4d6d5b] font-semibold">
                          Atelier Location
                        </span>
                        <p className="text-sm font-medium text-[#14261b]">
                          {PERSONAL_INFO.presentAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail className="w-5 h-5 text-[#24543d] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-[#4d6d5b] font-semibold">
                          Electronic Mail
                        </span>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-sm font-mono font-medium text-[#14261b] hover:text-[#24543d] transition-colors underline decoration-[#24543d]/40"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* External Portfolio Links */}
                  <div className="pt-6 border-t border-[#bedbca]/80 space-y-3">
                    <a
                      href={PERSONAL_INFO.driveFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-white/80 border border-[#bedbca] hover:border-[#24543d] group/link transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <FolderGit2 className="w-4 h-4 text-[#24543d]" />
                        <span className="text-xs font-serif uppercase tracking-wider text-[#14261b] group-hover/link:text-[#24543d] font-semibold">
                          Google Drive Full Portfolio Folder
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#4d6d5b] group-hover/link:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                      href={PERSONAL_INFO.videoShowreelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-white/80 border border-[#bedbca] hover:border-[#24543d] group/link transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-[#24543d]" />
                        <span className="text-xs font-serif uppercase tracking-wider text-[#14261b] group-hover/link:text-[#24543d] font-semibold">
                          Rezowana Afrin.mp4 Showreel
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#4d6d5b] group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative transition-transform duration-300 sm:rotate-[1.1deg] hover:rotate-0 group"
            >
              {/* Washi Tapes */}
              <WashiTape variant="sage" angle={-3} className="-top-3.5 left-12" width="w-24 sm:w-28" />
              <WashiTape variant="lavender" angle={5} className="-top-3.5 right-12 opacity-90 hidden sm:block" width="w-24 sm:w-28" />

              <TornPaperShell topColor="#fffdfa" bottomColor="#f7efe0">
                <div className="p-7 sm:p-10 bg-gradient-to-b from-[#fffdfa] via-[#fcf7ee] to-[#f7efe0] border-x border-[#e4d4ba]/70">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-black/8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#a84a30]">
                      COMMISSION BRIEF • 02 CLIENT INQUIRY
                    </span>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b85d43] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#dfb062] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#829988] border border-black/10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1a1715] mb-2">
                    Atelier Consultation Request
                  </h3>
                  <p className="text-xs text-[#6e584f] mb-8 font-normal">
                    Fill out the form below to receive a personalized swatch book, silhouette consultation, or lookbook proposal.
                  </p>

                  {isSubmitted ? (
                    <div className="p-8 text-center bg-white/80 border border-[#e4d4ba] space-y-4">
                      <CheckCircle2 className="w-12 h-12 text-[#24543d] mx-auto" />
                      <h4 className="font-serif text-2xl font-bold text-[#1a1715]">
                        Inquiry Received
                      </h4>
                      <p className="text-sm text-[#524b43] max-w-md mx-auto">
                        Thank you, {formState.name || "valued guest"}. Rezowana Afrin and her atelier team will review your commission request and respond within 24–48 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2.5 bg-[#1a1715] text-[#faf7f2] text-xs font-serif uppercase tracking-[0.2em] hover:bg-[#a84a30] transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5e4b3c] font-semibold">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Samira Khan"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white/90 border border-[#decbb2] focus:border-[#a84a30] focus:ring-1 focus:ring-[#a84a30] outline-none text-sm font-sans placeholder:text-[#ab9d8c] transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5e4b3c] font-semibold">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. samira@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/90 border border-[#decbb2] focus:border-[#a84a30] focus:ring-1 focus:ring-[#a84a30] outline-none text-sm font-sans placeholder:text-[#ab9d8c] transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5e4b3c] font-semibold">
                          Commission Category
                        </label>
                        <select
                          value={formState.serviceType}
                          onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                          className="w-full px-4 py-3 bg-white/90 border border-[#decbb2] focus:border-[#a84a30] focus:ring-1 focus:ring-[#a84a30] outline-none text-sm font-sans text-[#1a1715] transition-all"
                        >
                          <option>Bespoke Bridal Couture &amp; Lehenga</option>
                          <option>Architectural Evening Gown</option>
                          <option>Editorial Runway &amp; Film Styling</option>
                          <option>High-End Textile &amp; Embroidery Consultation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5e4b3c] font-semibold">
                          Project Vision &amp; Date
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Share your aesthetic preferences, fabric inspirations, wedding date, or event timeline..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 bg-white/90 border border-[#decbb2] focus:border-[#a84a30] focus:ring-1 focus:ring-[#a84a30] outline-none text-sm font-sans placeholder:text-[#ab9d8c] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#1a1715] hover:bg-[#a84a30] text-[#faf7f2] text-xs font-serif uppercase tracking-[0.22em] font-semibold flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Commission Inquiry</span>
                      </button>
                    </form>
                  )}
                </div>
              </TornPaperShell>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
