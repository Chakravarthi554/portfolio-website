// src/components/Experience.jsx
import React from 'react';
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt
} from 'react-icons/fa';
import { experiencesData } from '../data/experience';

const Experience = () => {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-950/80 text-blue-400 border-blue-500/30';
      case 'Professional Training':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30';
      case 'Project Trainee':
        return 'bg-purple-950/80 text-purple-400 border-purple-500/30';
      case 'Independent Development':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Chronological Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience & Training</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Strictly distinguished chronological history across project traineeship, corporate full-stack training, software engineering internship, and independent system development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {experiencesData.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative pl-12 md:pl-20"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Timeline Junction Node */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#070b14] border-2 border-cyan-400 shadow-[0_0_10px_#00f0ff] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {exp.organization}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-mono-tech px-3 py-1 rounded-full border uppercase tracking-wider ${getTypeBadge(
                          exp.type
                        )}`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Date and Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-gray-400 mb-4 pb-3 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <FaCalendarAlt className="text-cyan-400 text-xs" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-rose-400 text-xs" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                        <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-black/40 text-cyan-300/80 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
