"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  User, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  FileText, 
  ExternalLink,
  Sparkles,
  Scissors,
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const BioSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="bio" className="relative py-28 px-6 md:px-12 bg-[#f6f1e7] border-t border-[#e2d8c6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#e2d8c6] text-[11px] font-mono uppercase tracking-[0.25em] text-[#b85d43] mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Curriculum & Atelier Dossier</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            The Designer's Biography
          </h2>
          <p className="mt-3 text-[#6e675f] text-base font-light">
            Comprehensive credentials, academic pedigree, personal profile, and technical couture proficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Portrait & Quick Snapshot Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="art-matte relative">
              <div className="masking-tape -top-3 left-1/2 -translate-x-1/2" />
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-4">
                <Image
                  src="/rezowana-profile.jpg"
                  alt="Rezowana Afrin Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center py-2">
                <h3 className="font-serif text-2xl font-bold text-[#1a1715]">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#b85d43]">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-[#6e675f] font-mono">
                  Known professionally as <span className="text-[#1a1715] font-semibold">{PERSONAL_INFO.preferredName}</span>
                </p>
              </div>
            </div>

            {/* Structured Dossier Table */}
            <div className="p-6 bg-white border border-[#e2d8c6] shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#f0eae0]">
                <FileText className="w-4 h-4 text-[#b85d43]" />
                <h4 className="font-serif text-sm uppercase tracking-wider font-semibold text-[#1a1715]">
                  Vital Information Dossier
                </h4>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Father's Name:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.fatherName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Mother's Name:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.motherName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Date of Birth:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.dateOfBirth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Gender:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.gender}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Marital Status:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.maritalStatus}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Nationality:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.nationality}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Religion:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.religion}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Blood Group:</span>
                  <span className="font-bold text-[#b85d43]">{PERSONAL_INFO.bloodGroup}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f5efe4]">
                  <span className="text-[#6e675f]">Permanent Origin:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.permanentAddress}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6e675f]">Current Atelier:</span>
                  <span className="font-medium text-[#1a1715]">{PERSONAL_INFO.presentAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Education, Skills */}
          <div className="lg:col-span-7 space-y-8">
            {/* Extended Biography */}
            <div className="p-8 bg-white border border-[#e2d8c6] shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#1a1715]">
                Artistic Trajectory
              </h3>
              <p className="text-sm text-[#4a443d] font-light leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-sm text-[#4a443d] font-light leading-relaxed">
                Her design ethos combines rigorous precision honed during her science background at Millennium Scholastic School & College with the sensory freedom of fine textile arts. From draping silk crepe to curating handcrafted bridal ensembles, she treats fabric weight, grain line, and surface tension with deliberate architectural reverence.
              </p>
            </div>

            {/* Academic Pedigree (Millennium Scholastic SSC & HSC) */}
            <div className="p-8 bg-white border border-[#e2d8c6] shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#b85d43]" />
                <h3 className="font-serif text-xl font-bold text-[#1a1715]">
                  Academic Foundations
                </h3>
              </div>

              <div className="space-y-6">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#faf7f2] border-l-4 border-[#b85d43] border-y border-r border-[#e8e0d2]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="font-serif text-base font-bold text-[#1a1715]">
                        {edu.level}
                      </h4>
                      <span className="px-2.5 py-0.5 bg-[#b85d43] text-white text-[11px] font-mono rounded-none self-start sm:self-auto">
                        {edu.result}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#4a443d] mb-1">
                      {edu.institution} &bull; Group: {edu.group} ({edu.year})
                    </p>
                    <p className="text-xs text-[#6e675f] font-light leading-relaxed">
                      {edu.highlights}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Couture Proficiencies */}
            <div className="p-8 bg-white border border-[#e2d8c6] shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-[#b85d43]" />
                <h3 className="font-serif text-xl font-bold text-[#1a1715]">
                  Technical & Creative Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {PERSONAL_INFO.skills.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-xs font-serif uppercase tracking-wider font-bold text-[#b85d43]">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2 text-xs text-[#4a443d]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5b7065] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="p-4 sm:p-6 bg-[#efe7d8] border border-[#ded3c0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 overflow-hidden">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Phone className="w-4 h-4 text-[#b85d43] shrink-0" />
                <span className="text-xs font-mono font-bold text-[#1a1715] truncate">
                  {PERSONAL_INFO.phone}
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-1 hover:text-[#b85d43] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#6e675f]" />}
                </button>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Mail className="w-4 h-4 text-[#b85d43] shrink-0" />
                <span className="text-xs font-mono font-bold text-[#1a1715] truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-1 hover:text-[#b85d43] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#6e675f]" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

