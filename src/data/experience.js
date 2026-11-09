// src/data/experience.js
// Chronological experience timeline strictly distinguishing Training, Trainee, Internship, and Independent Development

export const experiencesData = [
  {
    id: "harvixa-dev",
    role: "Founder & Lead Developer",
    organization: "Harvixa (Agricultural Logistics & Grain Supply Platform)",
    location: "Hyderabad, India",
    duration: "2024 – Present",
    type: "Independent Development",
    badgeColor: "cyan",
    summary:
      "Leading architecture, UI/UX, backend microservices, and client feedback cycles for Harvixa, an agricultural ERP and grain milling supply chain platform.",
    responsibilities: [
      "Architected the full-stack MERN application (React.js, Node.js, Express.js, MongoDB) for digital logistics management.",
      "Engineered automated moisture-deduction weight calculations and multi-role billing dashboards.",
      "Integrated Razorpay payment gateway workflows for direct farmer crop settlements and mill supplier invoicing.",
      "Conducted on-ground requirement discovery with agricultural brokers and rice mill operators in Telangana."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Socket.IO", "Razorpay", "Cloudinary"]
  },
  {
    id: "lanvit-internship",
    role: "Java Full Stack Developer Intern",
    organization: "Lanvit Technologies",
    location: "Hyderabad, India",
    duration: "June 2025 – September 2025",
    type: "Internship",
    badgeColor: "blue",
    summary:
      "Engineered responsive full-stack features, optimized database queries, and developed secure RESTful services in an agile software delivery team.",
    responsibilities: [
      "Developed enterprise web components using Java, Spring Boot, and React.js.",
      "Designed RESTful API endpoints and integrated backend microservices with relational MySQL databases.",
      "Participated in active agile sprints, peer code reviews, and Git version control workflows.",
      "Enhanced frontend rendering performance and implemented input validation routines for enterprise client forms."
    ],
    techStack: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL", "Git", "Postman"]
  },
  {
    id: "inspanner-training",
    role: "Java Full Stack Trainee",
    organization: "Inspanner Academy",
    location: "Hyderabad, India",
    duration: "October 2024 – April 2025",
    type: "Professional Training",
    badgeColor: "emerald",
    summary:
      "Intensive corporate training program focused on enterprise Java, backend architecture, relational database management, and reactive frontend engineering.",
    responsibilities: [
      "Completed comprehensive curriculum covering Core Java, Advanced Java (J2EE, Servlets, JSP), and Object-Oriented Design Principles.",
      "Built multi-tiered applications utilizing the Spring Boot framework, Spring Data JPA, and Hibernate ORM.",
      "Engineered relational database schemas in MySQL with complex joins, indices, and transaction handling.",
      "Built dynamic single-page web applications with modern React.js, state management, and Axios API communication."
    ],
    techStack: ["Java (Core & Advanced)", "Spring Boot", "Hibernate", "React.js", "MySQL", "JavaScript", "HTML5/CSS3"]
  },
  {
    id: "astra-trainee",
    role: "Project Trainee",
    organization: "Astra Microwave Products Limited",
    location: "Hyderabad, India",
    duration: "February 2024 – June 2024",
    type: "Project Trainee",
    badgeColor: "purple",
    summary:
      "Hands-on technical project training in defense and aerospace electronics, focusing on high-frequency RF and microwave sub-systems.",
    responsibilities: [
      "Assisted senior engineering teams in the assembly, testing, and characterization of RF and microwave components.",
      "Performed diagnostic measurements, frequency response evaluation, and signal integrity testing using laboratory test instrumentation (Spectrum Analyzers, Power Meters, Signal Generators).",
      "Assisted in troubleshooting RF printed circuit boards (PCBs) and documenting empirical test results against defense-grade specifications.",
      "Gained deep foundational insight into high-frequency hardware constraints and electromagnetic reliability."
    ],
    techStack: ["RF & Microwave Sub-systems", "Spectrum Analyzers", "Signal Generators", "Power Meters", "Hardware Testing"]
  }
];
