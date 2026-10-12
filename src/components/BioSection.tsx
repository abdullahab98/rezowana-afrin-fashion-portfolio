"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail, 
  FileText, 
  Sparkles,
  Scissors,
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TornPaperShell, WashiTape } from "@/components/MoodboardElements";

export const BioSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="bio"
      className="relative py-28 px-6 md:px-12 bg-[#faf6ee] border-t border-[#e6dfd3] overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#d8cca0 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient Moodboard Atmospheric Lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#fad7cc]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#d4eadb]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5ede1] border border-[#decbb2] text-[11px] font-mono uppercase tracking-[0.22em] text-[#a84a30] mb-4">
            <User className="w-3.5 h-3.5" />
            <span>CURRICULUM & ATELIER DOSSIER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a84a30]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1715] tracking-tight">
            The Designer&apos;s Biography
          </h2>
          <p className="mt-3 text-[#524b43] text-base font-light">
            Comprehensive credentials, academic pedigree, personal profile, and technical couture proficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Quick Snapshot Card */}
          <div className="lg:col-span-5 space-y-9">
            
            {/* Polaroid Moodboard Portrait Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative transition-transform duration-300 sm:-rotate-[1.4deg] hover:rotate-0 group"
            >
              {/* Tapes on the Portrait Note */}
              <WashiTape variant="sage" angle={-5} className="-top-3.5 left-8" width="w-24 sm:w-28" />
              <WashiTape variant="blush" angle={7} className="-top-3 right-8 opacity-90 hidden sm:block" width="w-20" />

              <TornPaperShell topColor="#fffdfa" bottomColor="#f7efe0">
                <div className="p-6 sm:p-7 bg-gradient-to-b from-[#fffdfa] via-[#fcf8ef] to-[#f7efe0] border-x border-[#e4d4ba]/70">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2] mb-5 shadow-inner border border-black/5">
                    <Image
                      src="/rezowana-profile.jpg"
                      alt="Rezowana Afrin Portrait"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                    />
                    {/* Subtle Polaroid corner badge */}
                    <div className="absolute bottom-3 left-3 bg-[#1a1715]/80 backdrop-blur-xs text-[#faf7f2] font-mono text-[9px] uppercase px-2.5 py-0.5 tracking-widest border border-white/10">
                      STUDIO ARCHIVE • LISA
                    </div>
                  </div>

                  <div className="space-y-1.5 text-center py-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1715]">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#a84a30] font-semibold">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xs text-[#6e675f] font-mono pt-0.5">
                      Known professionally as <span className="text-[#1a1715] font-semibold underline decoration-[#a84a30]/40">{PERSONAL_INFO.preferredName}</span>
                    </p>
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>

            {/* Structured Vital Dossier Swatch Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative transition-transform duration-300 sm:rotate-[1.2deg] hover:rotate-0 group"
            >
              {/* Tapes on the Dossier */}
              <WashiTape variant="terracotta" angle={4} className="-top-3.5 left-10" width="w-24 sm:w-28" />
              <WashiTape variant="kraft" angle={-8} className="-bottom-2.5 right-8 opacity-80 hidden sm:block" width="w-20" />

              <TornPaperShell topColor="#fff7f2" bottomColor="#fae9df">
                <div className="p-6 sm:p-7 bg-gradient-to-b from-[#fff7f2] via-[#faefe7] to-[#fae9df] border-x border-[#eac6b7]/60">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-black/8">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#a84a30]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#a84a30]">
                        DOSSIER 01 • VITAL PROFILE SPEC
                      </span>
                    </div>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b85d43] border border-black/10" title="Madder" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e28c74] border border-black/10" title="Terracotta" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fad7cc] border border-black/10" title="Rose Clay" />
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Father&apos;s Name:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.fatherName}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Mother&apos;s Name:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.motherName}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Date of Birth:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.dateOfBirth}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Gender:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.gender}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Marital Status:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.maritalStatus}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Nationality:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.nationality}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Religion:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.religion}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Blood Group:</span>
                      <span className="font-bold text-[#a84a30]">{PERSONAL_INFO.bloodGroup}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#ebd7cc]">
                      <span className="text-[#6e584f]">Permanent Origin:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.permanentAddress}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#6e584f]">Current Atelier:</span>
                      <span className="font-medium text-[#241712]">{PERSONAL_INFO.presentAddress}</span>
                    </div>
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>
          </div>

          {/* Right Column: Bio Narrative, Education, Skills */}
          <div className="lg:col-span-7 space-y-9">
            
            {/* Extended Biography Swatch Note */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative transition-transform duration-300 sm:rotate-[1deg] hover:rotate-0 group"
            >
              {/* Tape */}
              <WashiTape variant="sage" angle={-3} className="-top-3.5 right-12" width="w-24 sm:w-28" />

              <TornPaperShell topColor="#fffdf9" bottomColor="#fcf6ea">
                <div className="p-7 sm:p-8 bg-gradient-to-b from-[#fffdf9] via-[#fcf7ee] to-[#fcf6ea] border-x border-[#e6d8c4]/65">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#825c31]">
                      BIOGRAPHY • 01 ARTISTIC TRAJECTORY
                    </span>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#825c31] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#c99b61] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fae8be] border border-black/10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1a1715] mb-3">
                    Artistic Trajectory
                  </h3>
                  <div className="space-y-3 text-sm text-[#4a443d] font-normal leading-relaxed">
                    <p>{PERSONAL_INFO.bio}</p>
                    <p>
                      Her design ethos combines rigorous precision honed during her science background at Millennium Scholastic School &amp; College with the sensory freedom of fine textile arts. From draping silk crepe to curating handcrafted bridal ensembles, she treats fabric weight, grain line, and surface tension with deliberate architectural reverence.
                    </p>
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>

            {/* Academic Pedigree (Millennium Scholastic SSC & HSC) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative transition-transform duration-300 sm:-rotate-[1.3deg] hover:rotate-0 group"
            >
              {/* Tape */}
              <WashiTape variant="blush" angle={4} className="-top-3.5 left-12" width="w-24 sm:w-28" />

              <TornPaperShell topColor="#f2f8f5" bottomColor="#e2efe7">
                <div className="p-7 sm:p-8 bg-gradient-to-b from-[#f2f8f5] via-[#ebf4ef] to-[#e2efe7] border-x border-[#bedbca]/65">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/8">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#24543d]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#24543d]">
                        ACADEMIC SPEC • 02 PEDIGREE
                      </span>
                    </div>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#24543d] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5ea07e] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cfe5d8] border border-black/10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14261b] mb-4">
                    Academic Foundations
                  </h3>

                  <div className="space-y-4">
                    {PERSONAL_INFO.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 bg-white/80 border-l-3 border-[#24543d] border-y border-r border-[#bedbca]/70 shadow-2xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h4 className="font-serif text-base font-bold text-[#14261b]">
                            {edu.level}
                          </h4>
                          <span className="px-2.5 py-0.5 bg-[#24543d] text-white text-[10px] font-mono font-semibold self-start sm:self-auto">
                            {edu.result}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-[#30523f] mb-1">
                          {edu.institution} &bull; Group: {edu.group} ({edu.year})
                        </p>
                        <p className="text-xs text-[#4d6d5b] font-normal leading-relaxed">
                          {edu.highlights}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>

            {/* Couture Proficiencies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative transition-transform duration-300 sm:rotate-[1.2deg] hover:rotate-0 group"
            >
              {/* Tape */}
              <WashiTape variant="lavender" angle={-2.5} className="-top-3.5 right-14" width="w-24 sm:w-28" />

              <TornPaperShell topColor="#fdfbf2" bottomColor="#f7efd6">
                <div className="p-7 sm:p-8 bg-gradient-to-b from-[#fdfbf2] via-[#faf4e3] to-[#f7efd6] border-x border-[#e4d4a8]/65">
                  
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/8">
                    <div className="flex items-center gap-2">
                      <Scissors className="w-4 h-4 text-[#8c5a0c]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#8c5a0c]">
                        PROFICIENCY • 03 COUTURE SKILLS MATRIX
                      </span>
                    </div>

                    {/* Color Chips */}
                    <div className="flex items-center gap-1.5 bg-white/70 px-2 py-0.5 rounded-full border border-black/5 shadow-2xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#9e6b18] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d9a138] border border-black/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#faecc6] border border-black/10" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2b1f0c] mb-5">
                    Technical &amp; Creative Skills
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PERSONAL_INFO.skills.map((skillGroup, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-xs font-serif uppercase tracking-wider font-bold text-[#8c5a0c] pb-1 border-b border-[#ebd8a2]">
                          {skillGroup.category}
                        </h4>
                        <ul className="space-y-2">
                          {skillGroup.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-xs text-[#4a391e] font-normal"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8c5a0c] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </TornPaperShell>
            </motion.div>

            {/* Direct Connect Quick Links Swatch Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="relative transition-transform duration-300 sm:-rotate-[0.8deg] hover:rotate-0"
            >
              <WashiTape variant="kraft" angle={1} className="-top-3 left-1/2 -translate-x-1/2" width="w-24 sm:w-28" />

              <TornPaperShell topColor="#f6ede0" bottomColor="#ede0cf">
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#f6ede0] via-[#f1e6d7] to-[#ede0cf] border-x border-[#d9c7b0]/70 flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <Mail className="w-4 h-4 text-[#a84a30] shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#1a1715] truncate">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                      className="p-1 hover:text-[#a84a30] transition-colors"
                      title="Copy Email"
                    >
                      {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#6e675f]" />}
                    </button>
                  </div>

                  <a
                    href="#contact"
                    className="text-xs font-serif uppercase tracking-wider text-[#a84a30] hover:text-[#1a1715] transition-colors font-semibold underline underline-offset-4"
                  >
                    Atelier Inquiry &rarr;
                  </a>
                </div>
              </TornPaperShell>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
