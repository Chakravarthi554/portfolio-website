// src/components/Education.jsx
import React from 'react';
import {
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCheckCircle,
  FaAward
} from 'react-icons/fa';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Verified academic credentials from premier universities in Hyderabad, concentrating on Digital Systems Architecture and Electronics & Communication Engineering.
          </p>
        </div>

        {/* Education Cards Grid (Two Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Subtle Ambient Glow */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                  idx === 0 ? 'bg-cyan-500/10' : 'bg-indigo-500/10'
                }`}
              />

              <div>
                {/* Top Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono-tech text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                    <FaUniversity className="text-xs" />
                    {edu.status}
                  </span>
                  {edu.cgpa && (
                    <span className="text-[11px] font-mono-tech text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <FaAward /> CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>

                {/* Degree Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <h4 className="text-sm font-semibold text-gray-200 mb-2">
                  {edu.institution}
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-gray-400 mb-6 pb-4 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <FaCalendarAlt className="text-cyan-400" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-rose-400" />
                    {edu.location}
                  </span>
                </div>

                {/* Overview */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Key Coursework */}
                <div className="mb-6">
                  <h5 className="text-xs font-mono-tech uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                    <FaBookOpen className="text-cyan-400" />
                    <span>Relevant Coursework & Core Modules</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2 text-xs text-gray-300 bg-black/30 p-2 rounded-lg border border-white/5"
                      >
                        <FaCheckCircle className="text-cyan-400 text-[10px] shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools Utilized */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-500 block mb-2">
                  Tools & Environments:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.toolsUtilized.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
