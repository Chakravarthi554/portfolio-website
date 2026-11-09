// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Royya Chakravarthi Portfolio Home"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold font-mono text-lg shadow-[0_0_12px_rgba(0,240,255,0.2)] group-hover:border-cyan-400 group-hover:scale-105 transition-all">
            RC
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold tracking-tight text-lg group-hover:text-cyan-400 transition-colors">
              Chakravarthi<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-400 -mt-1">
              Digital Systems & RTL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-gray-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-cyan-400 border-cyan-400 font-bold'
                      : 'border-transparent text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action: Quick Resume Link & Contact button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#resume"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 bg-white/5"
          >
            <FaFileAlt className="text-cyan-400 text-xs" />
            <span>Resumes</span>
          </a>
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <FaTimes size={22} className="text-cyan-400" /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-cyan-500/10 px-6 py-6 transition-all duration-300 animate__animated animate__fadeInDown">
          <ul className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-gray-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block py-2 px-3 rounded-lg transition-all ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-950/40 border-l-4 border-cyan-400 font-bold'
                        : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#resume"
              onClick={handleLinkClick}
              className="w-full text-center py-2.5 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/10 transition"
            >
              View & Download Resumes
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-sm font-bold shadow-md transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
