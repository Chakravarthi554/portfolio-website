// src/components/Projects.jsx
import React, { useState } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaStar
} from 'react-icons/fa';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const featuredProject = projectsData.find((p) => p.id === 'harvixa');
  const regularProjects = filteredProjects.filter((p) => p.id !== 'harvixa' || activeCategory !== 'all');

  const getStatusBadge = (statusType, statusText) => {
    let style = "bg-slate-800 text-gray-300 border-gray-700";
    if (statusType === "completed") style = "bg-emerald-950/80 text-emerald-400 border-emerald-500/30";
    if (statusType === "active") style = "bg-cyan-950/80 text-cyan-400 border-cyan-500/30";
    if (statusType === "ongoing") style = "bg-amber-950/80 text-amber-400 border-amber-500/30";
    if (statusType === "proposed") style = "bg-indigo-950/80 text-indigo-400 border-indigo-500/30";

    return (
      <span className={`text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full border ${style}`}>
        ● {statusText}
      </span>
    );
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Engineering Portfolio & Implementations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects & Architectures</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Transparent, verified engineering implementations spanning synthesizable RTL neural accelerators, agricultural supply chain platforms (Harvixa), and low-level embedded hardware.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-mono-tech px-4 py-2 rounded-xl transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROMINENT FEATURED HERO CARD: HARVIXA (When viewing "all" or "fullstack") */}
        {(activeCategory === 'all' || activeCategory === 'fullstack') && featuredProject && (
          <div
            className="mb-14 relative glass-card-featured rounded-3xl p-6 sm:p-10 border border-cyan-500/40 shadow-2xl overflow-hidden"
            data-aos="fade-up"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono-tech font-bold uppercase tracking-wider">
                <FaStar className="text-amber-400" />
                <span>Featured Platform & Independent Initiative</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(featuredProject.statusType, featuredProject.status)}
                <span className="text-xs font-mono-tech text-gray-400">{featuredProject.timeline}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Info (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-mono-tech text-cyan-300">
                  {featuredProject.subtitle}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.shortDescription}
                </p>

                {/* Contribution Highlight Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 text-xs text-gray-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400 block mb-1">
                    My Architectural Contribution:
                  </span>
                  {featuredProject.contribution}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono-tech rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-3">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition transform hover:-translate-y-0.5"
                  >
                    <FaInfoCircle />
                    <span>View Architecture Details</span>
                  </button>
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Image Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => setSelectedProject(featuredProject)}
                  className="relative rounded-2xl overflow-hidden border border-cyan-500/30 group cursor-pointer shadow-lg"
                >
                  <img
                    src={featuredProject.image}
                    alt="Harvixa Platform"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono-tech text-cyan-300 flex items-center gap-1.5">
                      <FaInfoCircle /> Click to inspect architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              {/* Card Image */}
              <div
                className="relative h-48 w-full overflow-hidden bg-black/60 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  {getStatusBadge(project.statusType, project.status)}
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono-tech text-gray-300 border border-white/10">
                  {project.timeline}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[11px] font-mono-tech text-cyan-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1.5"
                  >
                    <span>Inspect Details</span>
                    <FaInfoCircle className="text-[11px]" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition text-sm"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition text-xs"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
