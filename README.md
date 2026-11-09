# Royya Chakravarthi | Professional Engineering Portfolio

> **Digital Systems Engineer | RTL Design | Design Verification | Embedded Software**  
> M.E. Digital Systems Scholar at University College of Engineering, Osmania University  
> B.Tech in Electronics & Communication Engineering (Anurag University, 8.58 CGPA)

A premium, modern, responsive personal engineering portfolio communicating three core dimensions:
1. **Digital Systems and VLSI Engineering** (Synthesizable RTL, Verilog HDL, Cadence Xcelium, INT8 Hardware Acceleration)
2. **Embedded Software and Programming** (Low-level firmware in Embedded C, Microcontrollers, Python)
3. **Full-Stack Application Development & Entrepreneurship** (Enterprise Java, Spring Boot, MERN Stack, Harvixa Logistics Platform)

---

## 🚀 Key Features

- **Subtle Animated Circuit Canvas**: Lightweight 60fps HTML5 canvas simulating orthogonal RTL signal paths, clock buses, and glowing logic nodes.
- **Strict Data-Component Separation**: All personal information, skills, projects, experience, and academic history are isolated in `src/data/` so content can be edited without touching component code.
- **Honest Project Categorization**: Verified implementations with realistic statuses:
  - *Harvixa (Rice Mill Express Platform)* – Featured full-stack logistics architecture
  - *Hardware Accelerator Design of LeNet-5 CNN* – Synthesizable Verilog & INT8 Quantization
  - *RTL-to-ASIC Flow Exploration* – OpenLane / SkyWater 130nm PDK study
  - *Delta-Sigma Modulator (DSM) Decimation Filter* – MATLAB modeling & proposed RTL
  - *RTL 32-Bit Parameterized ALU* – Functional datapath in Verilog HDL
  - *OTP Bank Locker Security System* – Microcontroller & GSM hardware telemetry
- **9 Grouped Skill Cards**: Digital Design, RTL & Verification, ASIC Tools, FPGA Tools, Programming, Embedded Systems, Full-Stack Development, Databases & Cloud, Engineering Simulation (without arbitrary percentage bars).
- **Interactive Project Architecture Modals**: Deep-dive modals displaying problem statements, system architectures, verified features, and future roadmaps.
- **Triple ATS-Optimized Resumes (Score 95+)**:
  - `public/resume.pdf` (Master Dual-Focus Resume)
  - `public/resume-vlsi.pdf` (Digital Systems & VLSI Specialized Track)
  - `public/resume-software.pdf` (Software Engineering & Embedded Track)
- **Validated Working Contact Channel**: Interactive client-side validated form, quick email copy button, and direct WhatsApp / LinkedIn links without exposed credentials.
- **Accessibility & Responsive**: Full keyboard navigation, smooth sticky navigation with section spy, and zero horizontal scrolling on mobile.

---

## 📁 Project Architecture & Data Structure

```text
portfolio-website-main/
├── public/
│   ├── resume.pdf              # Generated ATS Master Resume
│   ├── resume-vlsi.pdf         # Generated VLSI Track Resume
│   ├── resume-software.pdf     # Generated Software Track Resume
│   ├── index.html              # SEO meta tags, OpenGraph, Web Fonts
│   └── _redirects              # Netlify / Cloudflare SPA rewrite rules
├── src/
│   ├── data/                   # ⚡ EDIT CONTENT HERE WITHOUT TOUCHING UI
│   │   ├── profile.js          # Bio, headline, contact, social links
│   │   ├── skills.js           # 9 Grouped skill categories & badges
│   │   ├── projects.js         # Projects, architectures, contributions
│   │   ├── experience.js       # Chronological timeline & labels
│   │   └── education.js        # Osmania M.E. & Anurag B.Tech
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass nav with active spy
│   │   ├── ScrollProgress.jsx  # Fixed reading progress bar
│   │   ├── CircuitBackground.jsx # RTL circuit canvas animation
│   │   ├── Hero.jsx            # Headline, credentials, quick CTAs
│   │   ├── About.jsx           # Two-column layout & 3 dimensions
│   │   ├── Skills.jsx          # Grouped skills + instant search
│   │   ├── Projects.jsx        # Project gallery & category filter
│   │   ├── ProjectModal.jsx    # Architecture inspection modal
│   │   ├── Experience.jsx      # Chronological career timeline
│   │   ├── Education.jsx       # Academic credentials & coursework
│   │   ├── Resume.jsx          # Dedicated resume showcase & downloads
│   │   ├── Contact.jsx         # Validated message form & channels
│   │   └── Footer.jsx          # Quick links & back-to-top
│   ├── App.jsx                 # Root layout & animation trigger
│   └── index.css               # Dark theme, neon accents, glass styles
├── generate_resume.js          # PDFKit script generating all 3 ATS resumes
└── package.json
```

---

## 🛠️ Quickstart & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate ATS Resumes
```bash
node generate_resume.js
```
*(Creates `resume.pdf`, `resume-vlsi.pdf`, and `resume-software.pdf` in the `public/` directory).*

### 3. Start Local Development Server
```bash
npm start
```
Runs the application at [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build & Deployment

### Build for Production
```bash
npm run build
```
Creates an optimized, minified bundle in the `build/` folder.

### Free Hosting via Netlify
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the generated `build` folder.
3. Your portfolio goes live instantly with SSL and custom domain support.

### Free Hosting via Cloudflare Pages
1. Go to Cloudflare Dashboard -> Workers & Pages -> Create Application.
2. Connect your GitHub repository or upload the `build` directory directly.
3. Build command: `npm run build` | Build output directory: `build`.

---

## 📄 License & Content Integrity
All project designs and technical implementations belong to **Royya Chakravarthi**.  
Content accuracy complies strictly with academic and professional verification guidelines (M.E. in Digital Systems at Osmania University, Expected 2027).
