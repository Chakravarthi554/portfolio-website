// src/components/ProjectModal.jsx
import React, { useEffect } from 'react';
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaMicrochip,
  FaLayerGroup,
  FaClock
} from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const getStatusColor = (statusType) => {
    switch (statusType) {
      case 'completed':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30';
      case 'active':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-500/30';
      case 'ongoing':
        return 'bg-amber-950/80 text-amber-400 border-amber-500/30';
      case 'proposed':
        return 'bg-indigo-950/80 text-indigo-400 border-indigo-500/30';
      default:
        return 'bg-slate-900 text-gray-300 border-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate__animated animate__fadeIn">
      {/* Modal Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card-featured rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition focus:outline-none"
          aria-label="Close project modal"
        >
          <FaTimes size={18} />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-xs font-mono-tech px-3 py-1 rounded-full border ${getStatusColor(
              project.statusType
            )}`}
          >
            ● {project.status}
          </span>
          <span className="text-xs font-mono-tech text-gray-400 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full">
            <FaClock className="text-[10px]" />
            {project.timeline}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-cyan-400 font-mono-tech text-xs sm:text-sm mb-6">
          {project.subtitle}
        </p>

        {/* Project Image Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/60">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
        </div>

        {/* Grid Content */}
        <div className="space-y-6">
          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1.5">
              <FaLayerGroup className="text-cyan-400" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-white/[0.04] text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Engineering Contribution */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
            <h3 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
              <FaMicrochip className="text-cyan-400" />
              <span>My Engineering Contribution</span>
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Problem Statement & Architecture */}
          {project.detailedOverview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-rose-400 mb-1.5 font-bold">
                  Problem Statement
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {project.detailedOverview.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400 mb-1.5 font-bold">
                  Solution Architecture
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {project.detailedOverview.solutionArchitecture}
                </p>
              </div>
            </div>
          )}

          {/* Key Features & Highlights */}
          {project.detailedOverview?.keyFeatures && (
            <div>
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-gray-400 mb-2">
                Technical Highlights & Verification
              </h3>
              <ul className="space-y-2">
                {project.detailedOverview.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Roadmap */}
          {project.detailedOverview?.futureRoadmap && (
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-400">
              <span className="font-mono-tech text-cyan-400 font-semibold block mb-1">
                Planned Future Enhancements:
              </span>
              <p>{project.detailedOverview.futureRoadmap}</p>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition"
                >
                  <FaGithub />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono-tech text-gray-400 hover:text-white transition"
            >
              Close Window [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
