// src/components/About.jsx
import React from 'react';
import {
  FaMicrochip,
  FaCode,
  FaCogs,
  FaGraduationCap,
  FaCheckCircle,
  FaRocket,
  FaBriefcase,
  FaLaptopCode
} from 'react-icons/fa';
import { profileData } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Engineering Identity & Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Royya Chakravarthi</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Bridging the gap between silicon-level digital logic design, low-level firmware, and scalable cloud-connected software platforms.
          </p>
        </div>

        {/* Two-Column Layout on Desktop, Single-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Introduction, Background, & 3 Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6" data-aos="fade-right">
            {/* Professional Introduction Card */}
            <div className="glass-card p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaRocket className="text-cyan-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                I am an electronics and digital systems engineer currently pursuing my{' '}
                <strong className="text-white font-semibold">Master of Engineering (M.E.) in Digital Systems</strong> at{' '}
                <strong className="text-cyan-300 font-semibold">University College of Engineering, Osmania University</strong>, 
                having graduated with a <strong className="text-white">B.Tech in ECE (8.58 CGPA)</strong> from Anurag University.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                My engineering mindset thrives at the intersection of hardware logic and software scalability. Whether modeling custom hardware acceleration architectures in Verilog HDL and validating them in Cadence Xcelium, testing high-frequency defense RF components at Astra Microwave Products, or engineering distributed full-stack web applications with Java Spring Boot and React, I focus on predictable execution, timing integrity, and clean code.
              </p>
            </div>

            {/* Three Core Dimensions (Requested in Section 1) */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono-tech uppercase tracking-widest text-gray-400 ml-1">
                The 3 Core Dimensions of My Engineering Profile
              </h4>

              {profileData.dimensions.map((dim, idx) => (
                <div
                  key={dim.id}
                  className="glass-card p-6 rounded-2xl border-l-4 border-l-cyan-400 hover:border-l-sky-300 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="text-base font-bold text-white flex items-center gap-2">
                      {idx === 0 && <FaMicrochip className="text-cyan-400" />}
                      {idx === 1 && <FaCogs className="text-indigo-400" />}
                      {idx === 2 && <FaCode className="text-emerald-400" />}
                      <span>{dim.title}</span>
                    </h5>
                    <span className="text-[11px] font-mono-tech text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {dim.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {dim.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dim.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono-tech bg-white/[0.04] text-gray-300 px-2.5 py-1 rounded border border-white/5"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Education, Experience, & Career Goals */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            {/* Quick Summary Card */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                <span>Academic Rigor</span>
              </h3>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono-tech text-cyan-400 uppercase tracking-wider block mb-1">
                    Postgraduate Studies (2024 – 2027)
                  </span>
                  <h4 className="text-sm font-bold text-white">M.E. in Digital Systems</h4>
                  <p className="text-xs text-gray-300">University College of Engineering, Osmania University</p>
                  <p className="text-[11px] text-gray-400 mt-1">Focus: RTL Design, Verification, Low Power VLSI, Computer Architecture</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono-tech text-indigo-400 uppercase tracking-wider block mb-1">
                    Undergraduate Degree (2020 – 2024)
                  </span>
                  <h4 className="text-sm font-bold text-white">B.Tech in Electronics & Communication</h4>
                  <p className="text-xs text-gray-300">Anurag University, Hyderabad</p>
                  <p className="text-[11px] text-emerald-400 font-semibold mt-1">Graduated with Distinction: 8.58 CGPA</p>
                </div>
              </div>
            </div>

            {/* Practical Experience Snapshot */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-cyan-400" />
                <span>Industry & Training Experience</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Astra Microwave Products Limited</span>
                    <span className="text-gray-400 block text-[11px]">Project Trainee (Feb 2024 – Jun 2024) — RF & Microwave Hardware</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Lanvit Technologies</span>
                    <span className="text-gray-400 block text-[11px]">Java Full Stack Intern (Jun 2025 – Sep 2025) — Microservices & React</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Inspanner Academy</span>
                    <span className="text-gray-400 block text-[11px]">Full Stack Trainee (Oct 2024 – Apr 2025) — Enterprise Java & Spring Boot</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Harvixa Independent Development</span>
                    <span className="text-gray-400 block text-[11px]">Founder & Systems Architect (2024 – Present) — Agri Supply Chain Platform</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goals & Vision */}
            <div className="glass-card p-6 rounded-2xl border-cyan-500/20">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <FaLaptopCode className="text-cyan-400" />
                <span>Career Goals & Value Proposition</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                My objective is to contribute as an <strong className="text-white">RTL Design Engineer</strong>,{' '}
                <strong className="text-white">Design Verification Engineer</strong>, or{' '}
                <strong className="text-white">Software Engineer</strong> in engineering teams building mission-critical silicon blocks, hardware accelerators, or distributed software. I bring analytical clarity, strong work ethic, and an eagerness to solve deep technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
