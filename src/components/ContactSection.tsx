"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  Sparkles, 
  FolderGit2, 
  Play, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

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
    // User can easily connect their own backend or mailto
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-[#faf7f2] border-t border-[#e2d8c6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#e2d8c6] text-[11px] font-mono uppercase tracking-[0.25em] text-[#b85d43] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Atelier Inquiries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            Commission a Silhouette
          </h2>
          <p className="mt-3 text-[#6e675f] text-base font-light">
            Whether for bespoke bridal couture, editorial styling, or custom textile installations—the atelier welcomes your creative collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Atelier Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white border border-[#e2d8c6] shadow-sm space-y-6 relative">
              <div className="masking-tape -top-3 left-8" />
              <h3 className="font-serif text-2xl font-bold text-[#1a1715]">
                Atelier Coordinates
              </h3>
              <p className="text-sm text-[#6e675f] font-light leading-relaxed">
                Consultations and fitting sessions are hosted by private appointment at the studio in Uttara, Dhaka.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#b85d43] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6e675f]">
                      Atelier Location
                    </span>
                    <p className="text-sm font-medium text-[#1a1715]">
                      {PERSONAL_INFO.presentAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#b85d43] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6e675f]">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-sm font-mono font-medium text-[#1a1715] hover:text-[#b85d43] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#b85d43] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6e675f]">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-mono font-medium text-[#1a1715] hover:text-[#b85d43] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* External Portfolio Links */}
              <div className="pt-6 border-t border-[#f0eae0] space-y-3">
                <a
                  href={PERSONAL_INFO.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#faf7f2] border border-[#e2d8c6] hover:border-[#b85d43] group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-4 h-4 text-[#b85d43]" />
                    <span className="text-xs font-serif uppercase tracking-wider text-[#1a1715] group-hover:text-[#b85d43]">
                      Google Drive Full Portfolio Folder
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6e675f] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.videoShowreelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#faf7f2] border border-[#e2d8c6] hover:border-[#b85d43] group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Play className="w-4 h-4 text-[#b85d43]" />
                    <span className="text-xs font-serif uppercase tracking-wider text-[#1a1715] group-hover:text-[#b85d43]">
                      Rezowana Afrin.mp4 Showreel
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6e675f] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white border border-[#e2d8c6] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#1a1715] mb-2">
                Atelier Consultation Request
              </h3>
              <p className="text-xs text-[#6e675f] mb-8 font-light">
                Fill out the form below to receive a personalized swatch book, silhouette consultation, or lookbook proposal.
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center bg-[#faf7f2] border border-[#e2d8c6] space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#5b7065] mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-[#1a1715]">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#6e675f] max-w-md mx-auto">
                    Thank you, {formState.name || "valued guest"}. Rezowana Afrin and her atelier team will review your commission request and respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-[#1a1715] text-[#faf7f2] text-xs font-serif uppercase tracking-[0.2em]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#1a1715] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Samira Khan"
                        className="w-full px-4 py-3 bg-[#faf7f2] border border-[#e2d8c6] text-sm text-[#1a1715] focus:outline-none focus:border-[#b85d43] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-[#1a1715] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. samira@example.com"
                        className="w-full px-4 py-3 bg-[#faf7f2] border border-[#e2d8c6] text-sm text-[#1a1715] focus:outline-none focus:border-[#b85d43] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#1a1715] mb-2">
                      Commission Category
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf7f2] border border-[#e2d8c6] text-sm text-[#1a1715] focus:outline-none focus:border-[#b85d43] transition-colors font-serif"
                    >
                      <option>Bespoke Bridal Couture & Lehenga</option>
                      <option>Editorial / Red Carpet Gown</option>
                      <option>Contemporary Draped Cocktail Silhouette</option>
                      <option>Custom Hand-Embroidered Jacket</option>
                      <option>Styling & Creative Direction Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#1a1715] mb-2">
                      Project Vision & Date
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your aesthetic preferences, fabric inspirations, wedding date, or event timeline..."
                      className="w-full px-4 py-3 bg-[#faf7f2] border border-[#e2d8c6] text-sm text-[#1a1715] focus:outline-none focus:border-[#b85d43] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1a1715] hover:bg-[#b85d43] text-[#faf7f2] font-serif text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-colors shadow-lg"
                  >
                    <span>Transmit Commission Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

