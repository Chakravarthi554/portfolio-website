// src/components/Hero.jsx
import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaMicrochip,
  FaCode,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';
import CircuitBackground from './CircuitBackground';
import { profileData } from '../data/profile';

const Hero = () => {
  const [imgSrc, setImgSrc] = useState('/profile1.jpg');

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-6 flex items-center justify-center overflow-hidden bg-[#070b14]"
    >
      {/* Subtle Circuit Canvas */}
      <CircuitBackground />

      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 items-start text-left" data-aos="fade-right">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>{profileData.status.statusText}</span>
          </div>

          {/* Name & Headline */}
          <div>
            <p className="text-sm font-mono-tech uppercase tracking-widest text-sky-400 mb-2">
              Hardware Architecture & Scalable Software
            </p>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              ROYYA <span className="text-gradient">CHAKRAVARTHI</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mt-3 max-w-2xl leading-relaxed">
              {profileData.headline}
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            "{profileData.tagline}"
          </p>

          {/* Academic & Location Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-xs font-mono-tech">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300 hover:border-cyan-500/30 transition">
              <FaGraduationCap className="text-cyan-400 text-base shrink-0" />
              <div>
                <p className="text-white font-semibold">M.E. Digital Systems</p>
                <p className="text-gray-400 text-[11px]">Osmania University (Pursuing, '27)</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300 hover:border-cyan-500/30 transition">
              <FaGraduationCap className="text-indigo-400 text-base shrink-0" />
              <div>
                <p className="text-white font-semibold">B.Tech ECE (8.58 CGPA)</p>
                <p className="text-gray-400 text-[11px]">Anurag University (2024)</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300 hover:border-cyan-500/30 transition sm:col-span-2">
              <FaMapMarkerAlt className="text-rose-400 text-sm shrink-0" />
              <span className="text-gray-300">Hyderabad, Telangana, India</span>
              <span className="text-gray-500 mx-1">|</span>
              <span className="text-cyan-400 font-semibold">Open to VLSI & Full-Stack Opportunities</span>
            </div>
          </div>

          {/* Action Buttons (4 Requested) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:from-cyan-300 hover:to-sky-400 transition transform hover:-translate-y-0.5"
            >
              <span>Explore My Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#resume"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-cyan-500/30 hover:border-cyan-400 text-white font-semibold text-sm hover:bg-white/10 transition transform hover:-translate-y-0.5"
            >
              <FaDownload className="text-cyan-400 text-xs" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium text-sm transition"
            >
              <span>Contact Me</span>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium text-sm transition"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 pt-2 text-xl text-gray-400">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-gray-500">Connect:</span>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={profileData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-emerald-400 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              aria-label="Send Email"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Architecture / Profile Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
          <div className="relative w-full max-w-md">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-xl opacity-70" />

            <div className="relative glass-card-featured rounded-2xl p-6 border border-cyan-500/30 shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono-tech text-xs text-gray-400">engineer_profile.sv</span>
                </div>
                <span className="text-[10px] font-mono-tech text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  RTL / Verilog / FullStack
                </span>
              </div>

              {/* Profile Photo Display */}
              <div className="relative w-44 h-44 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-cyan-400/40 p-1 bg-slate-900 shadow-inner group">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc('/portfolio.jpg')}
                  alt="Royya Chakravarthi"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md text-[10px] text-center font-mono-tech text-cyan-300 py-1 rounded border border-cyan-500/20">
                  R. CHAKRAVARTHI
                </div>
              </div>

              {/* Quick Pillars of Engineering */}
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <FaMicrochip className="text-cyan-400" />
                    <span>Digital Systems & RTL</span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                    Verilog / Xcelium
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <FaCode className="text-indigo-400" />
                    <span>Enterprise Software</span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">
                    Java / Spring / React
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Harvixa Logistics</span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                    MERN Platform
                  </span>
                </div>
              </div>

              {/* Verified Tag */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-gray-400">
                <span>Verification: CYCLE_ACCURATE</span>
                <span className="text-emerald-400 font-semibold">Ready for Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
