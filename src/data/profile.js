// src/data/profile.js
// Centralized personal & professional information for Royya Chakravarthi

export const profileData = {
  name: "Royya Chakravarthi",
  preferredName: "Chakravarthi",
  headline: "Digital Systems Engineer | RTL Design | Design Verification | Embedded Software",
  tagline: "Building reliable digital systems and software solutions through engineering, programming and innovation.",
  bio: "M.E. Digital Systems scholar at Osmania University bridging hardware architecture and scalable software engineering. Experienced in synthesizable RTL design with Verilog HDL, hardware acceleration, and enterprise full-stack development with Java, Spring Boot, and the MERN stack.",
  
  status: {
    availableForHire: true,
    statusText: "Open to suitable engineering opportunities",
    targetRoles: [
      "RTL Design Engineer",
      "Design Verification Engineer",
      "Digital Systems Engineer",
      "FPGA Engineer",
      "Embedded Software Engineer",
      "Java Full Stack Developer"
    ]
  },

  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    display: "Hyderabad, Telangana, India"
  },

  contact: {
    email: "chakravarthiroyya9398@gmail.com",
    phone: "+91 9398197099",
    whatsapp: "https://wa.me/919398197099",
    github: "https://github.com/Chakravarthi554",
    linkedin: "https://linkedin.com/in/royya-chakravarthi-003ab8236",
    twitter: "https://twitter.com/ROOYACHAKRAVAR2"
  },

  resumes: {
    master: "/resume.pdf",
    vlsi: "/resume-vlsi.pdf",
    software: "/resume-software.pdf"
  },

  dimensions: [
    {
      id: "vlsi",
      title: "Digital Systems & VLSI Engineering",
      subtitle: "Silicon Architecture & Hardware Acceleration",
      description: "Synthesizable RTL modeling in Verilog HDL, Cadence Xcelium simulation, INT8 quantization, and hardware accelerator architectures for neural networks.",
      highlights: ["Verilog HDL & RTL Design", "Cadence Xcelium & Simulation", "INT8 Quantization Flow", "Digital Logic & ALU Architecture"]
    },
    {
      id: "embedded",
      title: "Embedded Software & Systems",
      subtitle: "Low-Level Interfacing & Microcontrollers",
      description: "Low-level programming in Embedded C and Python, sensor integration, GSM telemetry, and multi-factor hardware security mechanisms.",
      highlights: ["Microcontroller Firmware (C)", "Hardware-Software Co-Design", "RF Laboratory Instrumentation", "Telemetry & GSM Protocols"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development & Harvixa",
      subtitle: "Cloud Architecture & Scalable Platforms",
      description: "Architecting resilient distributed web applications with Java Spring Boot and React/Node.js, leading development of Harvixa (agri supply chain platform).",
      highlights: ["Enterprise Java & Spring Boot", "MERN Stack & Redux Architecture", "Harvixa Logistics Platform", "REST APIs & Microservices"]
    }
  ]
};
