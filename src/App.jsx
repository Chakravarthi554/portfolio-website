// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Sticky Glass Navigation Bar */}
      <Navbar />

      <main>
        {/* Page 1: Home / Hero with circuit animation */}
        <Hero />

        {/* Page 2: About Me (Two-column layout, 3 dimensions) */}
        <About />

        {/* Page 3: Skills (9 Grouped Categories & real-time search) */}
        <Skills />

        {/* Page 4: Projects (Prominent Harvixa & honest status modal views) */}
        <Projects />

        {/* Page 5: Experience (Strict chronological timeline) */}
        <Experience />

        {/* Page 6: Education (M.E. Osmania & B.Tech Anurag) */}
        <Education />

        {/* Page 7: Resume (Dedicated section with VLSI & Software ATS downloads) */}
        <Resume />

        {/* Page 8: Contact (Validated working form & direct channels) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
