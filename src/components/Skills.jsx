// src/components/Skills.jsx
import React, { useState } from 'react';
import {
  FaMicrochip,
  FaCogs,
  FaCode,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaSearch,
  FaCheck
} from 'react-icons/fa';
import { skillCategories } from '../data/skills';

const categoryBadges = ["All", "Hardware", "EDA / CAD", "Software", "Firmware", "Web / Cloud", "Data / DevOps", "Simulation"];

const Skills = () => {
  const [selectedBadge, setSelectedBadge] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = skillCategories
    .filter((cat) => selectedBadge === "All" || cat.badge === selectedBadge)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Technical Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Grouped <span className="text-gradient">Engineering Skills</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Honest, verified technical skills across hardware architecture, EDA synthesis/simulation suites, embedded systems, and enterprise software stacks. No arbitrary percentage bars.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Search skills (e.g. Verilog, Spring, C)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 w-full">
              {categoryBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => setSelectedBadge(badge)}
                  className={`text-[11px] font-mono-tech px-3 py-1.5 rounded-lg transition-all ${
                    selectedBadge === badge
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {badge}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 9 Grouped Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono-tech text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30 uppercase tracking-wider">
                    {category.badge}
                  </span>
                  <span className="text-[11px] font-mono-tech text-gray-500">
                    Category #{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {category.badge.includes('Hardware') && <FaMicrochip className="text-cyan-400" />}
                  {category.badge.includes('EDA') && <FaCogs className="text-indigo-400" />}
                  {category.badge.includes('Software') && <FaCode className="text-emerald-400" />}
                  {category.badge.includes('Firmware') && <FaTerminal className="text-amber-400" />}
                  {category.badge.includes('Web') && <FaServer className="text-sky-400" />}
                  {category.badge.includes('Data') && <FaDatabase className="text-blue-400" />}
                  {category.badge.includes('Simulation') && <FaCogs className="text-rose-400" />}
                  <span>{category.name}</span>
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all text-xs"
                    >
                      <FaCheck className="text-[9px] text-cyan-400 shrink-0" />
                      <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono-tech text-gray-500 group-hover:text-cyan-400 transition-colors">
                        ({skill.tag})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-gray-500">
                <span>Domain Focus</span>
                <span className="text-gray-400">{category.skills.length} competencies</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p>No skills match "{searchQuery}". Try searching for Verilog, Java, C, or Python.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
