// src/components/Resume.jsx
import React, { useState } from 'react';
import {
  FaDownload,
  FaFilePdf,
  FaCheckCircle,
  FaMicrochip,
  FaCode,
  FaLayerGroup,
  FaExternalLinkAlt
} from 'react-icons/fa';

const resumesList = [
  {
    id: "master",
    title: "Master ATS Comprehensive Resume",
    subtitle: "Complete dual-focus profile covering Digital Systems & Enterprise Full-Stack Engineering",
    path: "/resume.pdf",
    targetAudience: "General Technical Recruiters, Engineering Managers & Cross-Functional Teams",
    icon: <FaLayerGroup className="text-cyan-400 text-xl" />,
    badge: "Recommended (ATS 95+)",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-950/60",
    sectionsIncluded: [
      "Osmania University M.E. & Anurag University B.Tech",
      "LeNet-5 CNN Verilog Accelerator & Harvixa Platform",
      "Lanvit Technologies & Astra Microwave Experience",
      "Synthesizable RTL, Cadence Xcelium, Java, Spring Boot, React"
    ]
  },
  {
    id: "vlsi",
    title: "Digital Systems & VLSI Specialized Resume",
    subtitle: "Tailored specifically for RTL Design, Design Verification, ASIC, and FPGA Roles",
    path: "/resume-vlsi.pdf",
    targetAudience: "Semiconductor Recruiters, RTL & DV Hiring Managers, FPGA Teams",
    icon: <FaMicrochip className="text-indigo-400 text-xl" />,
    badge: "Semiconductor Track",
    badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-950/60",
    sectionsIncluded: [
      "Hardware Accelerator Design of LeNet-5 CNN (INT8)",
      "RTL 32-Bit ALU Design & Cadence SimVision Verification",
      "Astra Microwave Products Limited RF Project Trainee",
      "Delta-Sigma Modulator (DSM) Decimation Research & OpenLane Flow"
    ]
  },
  {
    id: "software",
    title: "Software & Embedded Systems Resume",
    subtitle: "Tailored for Java Full-Stack, Spring Boot, Cloud Applications, and Embedded IoT Roles",
    path: "/resume-software.pdf",
    targetAudience: "Software Recruiters, Full-Stack Leads, Distributed Systems & IoT Teams",
    icon: <FaCode className="text-emerald-400 text-xl" />,
    badge: "Software Track",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/60",
    sectionsIncluded: [
      "Harvixa Agricultural Supply Chain Platform (MERN)",
      "Lanvit Technologies Java Full Stack Intern (Spring Boot/React)",
      "Inspanner Academy Enterprise Corporate Java Training",
      "OTP Bank Locker Security Hardware System (Embedded C)"
    ]
  }
];

const Resume = () => {
  const [activeResumeTab, setActiveResumeTab] = useState("master");

  const currentResume = resumesList.find((r) => r.id === activeResumeTab) || resumesList[0];

  return (
    <section id="resume" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Curriculum Vitae & Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ATS-Optimized <span className="text-gradient">Engineering Resumes</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Download verified, single-page ATS-formatted PDFs tailored for semiconductor hardware teams or full-stack software development roles.
          </p>

          {/* Selector Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {resumesList.map((res) => (
              <button
                key={res.id}
                onClick={() => setActiveResumeTab(res.id)}
                className={`text-xs font-mono-tech px-4 py-2.5 rounded-xl transition-all ${
                  activeResumeTab === res.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {res.id === 'master' ? 'Master Resume (Dual Focus)' : res.id === 'vlsi' ? 'Digital Systems / VLSI' : 'Software / Embedded'}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Resume Showcase Card */}
        <div className="max-w-4xl mx-auto glass-card-featured rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {currentResume.icon}
              </div>
              <div>
                <span className={`inline-block text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full border mb-2 ${currentResume.badgeColor}`}>
                  {currentResume.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentResume.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {currentResume.subtitle}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={currentResume.path}
                download
                className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 transition transform hover:-translate-y-0.5"
              >
                <FaDownload />
                <span>Download PDF</span>
              </a>

              <a
                href={currentResume.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
                title="Preview in new tab"
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>

          {/* Highlights & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-cyan-400 block mb-2 font-bold">
                Tailored Specifically For:
              </span>
              <p className="text-xs sm:text-sm text-gray-300 bg-black/40 p-3.5 rounded-xl border border-white/5">
                {currentResume.targetAudience}
              </p>

              <div className="mt-4 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                  <span>Standard ATS single-column format for 95+ parser score</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                  <span>Verified contact info: chakravarthiroyya9398@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                  <span>Accurate degree (M.E. Digital Systems - Osmania University)</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-cyan-400 block mb-2 font-bold">
                Key Modules & Sections Highlighted:
              </span>
              <ul className="space-y-2">
                {currentResume.sectionsIncluded.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <FaFilePdf className="text-rose-400 text-xs mt-0.5 shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Grid of all 3 resumes for 1-click download */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
          {resumesList.map((res) => (
            <div
              key={res.id}
              className="p-4 rounded-2xl glass-card flex items-center justify-between hover:border-cyan-500/40 transition"
            >
              <div className="flex items-center gap-2.5">
                <FaFilePdf className="text-rose-400 text-base" />
                <div>
                  <h4 className="text-xs font-bold text-white truncate max-w-[150px]">
                    {res.id === 'master' ? 'Master ATS Resume' : res.id === 'vlsi' ? 'VLSI Track Resume' : 'Software Track Resume'}
                  </h4>
                  <span className="text-[10px] font-mono-tech text-gray-500">PDF Document</span>
                </div>
              </div>
              <a
                href={res.path}
                download
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 transition"
                title={`Download ${res.title}`}
              >
                <FaDownload className="text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
