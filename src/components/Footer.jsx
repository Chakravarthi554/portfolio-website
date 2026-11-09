// src/components/Footer.jsx
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';
import { profileData } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] text-gray-400 py-12 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand & Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold font-mono text-sm">
              RC
            </span>
            <span className="text-white font-extrabold text-base tracking-tight">
              Royya Chakravarthi
            </span>
          </div>
          <p className="text-xs text-gray-500 max-w-sm">
            Digital Systems Engineer & Full-Stack Developer. M.E. Scholar at Osmania University.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono-tech text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Engineering Opportunities</span>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono-tech uppercase tracking-wider text-gray-400">
          <a href="#hero" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#resume" className="hover:text-cyan-400 transition">Resume</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4 text-base text-gray-400">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={profileData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-emerald-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              aria-label="Email"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] font-mono-tech text-gray-400 hover:text-cyan-400 transition px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:border-cyan-500/30"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[9px]" />
          </button>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          &copy; {currentYear} <span className="text-gray-300 font-semibold">Royya Chakravarthi</span>. All technical IP & rights reserved.
        </p>
        <p className="font-mono-tech text-[11px] text-gray-500">
          Engineered with React, Tailwind CSS & Synthesizable RTL Principles.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
