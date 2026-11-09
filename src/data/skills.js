// src/data/skills.js
// 9 Explicit Skill Categories - Honest tools without arbitrary percentages

export const skillCategories = [
  {
    id: "digital-design",
    name: "Digital Design",
    description: "Fundamental digital logic, state machine architecture, and arithmetic units.",
    badge: "Hardware",
    skills: [
      { name: "Digital Logic Design", level: "Core", tag: "VLSI" },
      { name: "Finite State Machines (FSM)", level: "Core", tag: "VLSI" },
      { name: "Computer Architecture", level: "Core", tag: "VLSI" },
      { name: "ALU & Datapath Design", level: "Practical", tag: "VLSI" },
      { name: "Fixed-Point Arithmetic (INT8)", level: "Practical", tag: "Hardware AI" },
      { name: "Pipelining & Timing Concepts", level: "Academic", tag: "VLSI" }
    ]
  },
  {
    id: "rtl-verification",
    name: "RTL and Verification",
    description: "Synthesizable hardware description, testbench development, and simulation.",
    badge: "Hardware",
    skills: [
      { name: "Verilog HDL", level: "Advanced", tag: "HDL" },
      { name: "SystemVerilog (Fundamentals)", level: "Intermediate", tag: "HDL" },
      { name: "RTL Modeling", level: "Advanced", tag: "Design" },
      { name: "Testbench Writing", level: "Practical", tag: "Verification" },
      { name: "Waveform Debugging", level: "Practical", tag: "Verification" },
      { name: "Hardware Accelerator Architecture", level: "Applied", tag: "CNN" }
    ]
  },
  {
    id: "asic-tools",
    name: "ASIC Tools",
    description: "Industrial simulation and academic synthesis / physical design tool suites.",
    badge: "EDA / CAD",
    skills: [
      { name: "Cadence Xcelium", level: "Practical", tag: "Simulation" },
      { name: "Cadence SimVision", level: "Practical", tag: "Waveform Analysis" },
      { name: "Cadence Genus (Academic Exposure)", level: "Academic", tag: "Synthesis" },
      { name: "OpenLane Flow (Exploration)", level: "Research", tag: "Open-Source EDA" },
      { name: "Yosys Open Synthesis", level: "Research", tag: "Synthesis" }
    ]
  },
  {
    id: "fpga-tools",
    name: "FPGA Tools",
    description: "Programmable logic development, synthesis, and hardware mapping.",
    badge: "EDA / CAD",
    skills: [
      { name: "FPGA Architecture Concepts", level: "Core", tag: "FPGA" },
      { name: "RTL to Bitstream Flow", level: "Practical", tag: "Flow" },
      { name: "Xilinx Vivado (Basic)", level: "Academic", tag: "EDA" },
      { name: "Intel Quartus Prime (Basic)", level: "Academic", tag: "EDA" },
      { name: "Resource Utilization & LUT Mapping", level: "Academic", tag: "Design" }
    ]
  },
  {
    id: "programming",
    name: "Programming",
    description: "System-level languages, scripting, and enterprise application languages.",
    badge: "Software",
    skills: [
      { name: "Java (Core & J2EE)", level: "Advanced", tag: "Backend" },
      { name: "C Programming", level: "Practical", tag: "Low-Level" },
      { name: "Python", level: "Practical", tag: "AI / Scripting" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Full-Stack" },
      { name: "Shell / Bash Scripting", level: "Intermediate", tag: "Linux" }
    ]
  },
  {
    id: "embedded-systems",
    name: "Embedded Systems",
    description: "Microcontroller firmware, hardware peripheral interfacing, and telemetry.",
    badge: "Firmware",
    skills: [
      { name: "Embedded C", level: "Practical", tag: "Firmware" },
      { name: "Microcontroller Interfacing", level: "Practical", tag: "Hardware" },
      { name: "UART / I2C / SPI Protocols", level: "Core", tag: "Protocols" },
      { name: "GSM Telemetry & Hardware Security", level: "Practical", tag: "IoT" },
      { name: "RF Instrumentation (Spectrum Analyzer, Power Meters)", level: "Hands-on", tag: "Testing" }
    ]
  },
  {
    id: "full-stack",
    name: "Full-Stack Development",
    description: "Enterprise backend microservices, modern reactive frontends, and REST APIs.",
    badge: "Web / Cloud",
    skills: [
      { name: "Spring Boot", level: "Advanced", tag: "Backend" },
      { name: "React.js", level: "Advanced", tag: "Frontend" },
      { name: "Node.js & Express.js", level: "Advanced", tag: "Backend" },
      { name: "Redux & State Management", level: "Intermediate", tag: "Frontend" },
      { name: "RESTful API Architecture", level: "Advanced", tag: "API" },
      { name: "Tailwind CSS & Material UI", level: "Practical", tag: "UI/UX" }
    ]
  },
  {
    id: "databases-cloud",
    name: "Databases and Cloud",
    description: "Data persistence, cloud services, deployment, and version control.",
    badge: "Data / DevOps",
    skills: [
      { name: "MySQL / Relational DBs", level: "Advanced", tag: "SQL" },
      { name: "MongoDB / NoSQL", level: "Advanced", tag: "NoSQL" },
      { name: "Firebase (Auth & Cloud)", level: "Practical", tag: "BaaS" },
      { name: "Git & GitHub Version Control", level: "Advanced", tag: "DevOps" },
      { name: "Docker Containerization (Basic)", level: "Practical", tag: "DevOps" },
      { name: "Postman API Testing", level: "Advanced", tag: "Testing" }
    ]
  },
  {
    id: "engineering-simulation",
    name: "Engineering Simulation",
    description: "Scientific computing, numerical modeling, and algorithm validation.",
    badge: "Simulation",
    skills: [
      { name: "MATLAB", level: "Academic", tag: "Math" },
      { name: "Simulink (Basic)", level: "Academic", tag: "Modeling" },
      { name: "TensorFlow (Inference & Quantization)", level: "Applied", tag: "AI Model" },
      { name: "NumPy / SciPy Data Modeling", level: "Applied", tag: "Python" },
      { name: "Digital Signal Processing (DSP Concepts)", level: "Core", tag: "Theory" }
    ]
  }
];
