// src/data/projects.js
// Portfolio Projects with honest statuses, clear contributions, and architecture details

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "vlsi", label: "Digital Systems & RTL" },
  { id: "fullstack", label: "Full-Stack & Harvixa" },
  { id: "embedded", label: "Embedded & Systems" }
];

export const projectsData = [
  {
    id: "harvixa",
    title: "Harvixa (Rice Mill Express)",
    subtitle: "Enterprise Agricultural Supply Chain & Grain Logistics Platform",
    featured: true,
    category: "fullstack",
    status: "Active Development (MVP)",
    statusType: "active", // active, completed, ongoing, proposed
    image: "/ricemill.jpg",
    timeline: "2024 – Present",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Redux",
      "Socket.IO",
      "Razorpay",
      "Cloudinary",
      "REST APIs"
    ],
    shortDescription:
      "Enterprise supply chain and inventory management platform designed to automate grain milling logistics, farmer procurements, automated billing, and live dispatch tracking.",
    contribution:
      "Architected the complete system from ground up: designed the MERN REST APIs, implemented JWT authentication and role-based access for millers, brokers, and farmers, integrated Razorpay for automated payout processing, and designed real-time inventory tracking with Socket.IO.",
    detailedOverview: {
      problemStatement:
        "Traditional rice milling and grain supply operations suffer from manual record-keeping, high discrepancy in moisture-adjusted grain weight calculations, delayed farmer settlements, and lack of real-time inventory visibility.",
      solutionArchitecture:
        "Harvixa delivers a cloud-based dashboard with automated paddy intake verification, yield computation algorithms, batch tracking, secure digital invoicing via Razorpay, and instant real-time dispatch alerts via WebSockets.",
      keyFeatures: [
        "Paddy intake batch tracking with automated quality and moisture weight deductions.",
        "Role-based multi-tenant dashboards for Mill Managers, Accounts, and Logistics Coordinators.",
        "Instant settlement calculations and Razorpay payment gateway integration.",
        "Real-time stock status notifications utilizing Socket.IO.",
        "Secure document and receipt storage integrated with Cloudinary."
      ],
      futureRoadmap:
        "Integrating IoT-enabled weighing scale telemetry and moisture sensor data streams via MQTT directly into the inventory ingestion module."
    }
  },
  {
    id: "lenet5-accelerator",
    title: "Hardware Accelerator Design of LeNet-5 CNN",
    subtitle: "Custom Synthesizable Verilog Accelerator for Deep Learning Inference",
    featured: true,
    category: "vlsi",
    status: "Completed & Verified",
    statusType: "completed",
    image: "/lenet.jpg",
    timeline: "2024",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Verilog HDL",
      "Cadence Xcelium",
      "SimVision",
      "Python",
      "TensorFlow",
      "MNIST Dataset",
      "INT8 Quantization"
    ],
    shortDescription:
      "End-to-end custom hardware acceleration architecture for the LeNet-5 Convolutional Neural Network, synthesized for efficient fixed-point matrix convolutions with minimal memory bandwidth.",
    contribution:
      "Trained the baseline LeNet-5 network in Python/TensorFlow on MNIST. Extracted convolutional weights and implemented INT8 symmetric uniform quantization. Designed the synthesizable Verilog RTL datapath (Convolution, ReLU, and Max Pooling layers), developed modular testbenches, and verified cycle-accurate outputs in Cadence Xcelium.",
    detailedOverview: {
      problemStatement:
        "Deploying deep convolutional neural networks on general-purpose processors incurs high latency and thermal dissipation. Edge inferencing demands dedicated hardware architectures with streamlined memory access and arithmetic quantization.",
      solutionArchitecture:
        "The accelerator features a parameterized multiply-accumulate (MAC) systolic array, line-buffer memories for sliding window 2D convolution, on-the-fly ReLU activation clipping, and comparator-based 2x2 max-pooling logic driven by a central FSM controller.",
      keyFeatures: [
        "INT8 fixed-point quantization reducing weight storage bandwidth by 75% compared to FP32.",
        "Dedicated line buffers for sliding-window pixel caching without repeated SRAM accesses.",
        "Hardware-level pipelined Multiply-Accumulate (MAC) calculation engine.",
        "Cycle-accurate waveform verification conducted in Cadence Xcelium SimVision.",
        "Automated Python verification script comparing RTL output vectors against gold-standard software tensors."
      ],
      futureRoadmap:
        "Targeting FPGA bitstream synthesis and evaluating on-chip BRAM utilization on Xilinx Vivado."
    }
  },
  {
    id: "rtl-to-asic-flow",
    title: "RTL-to-ASIC Flow Exploration",
    subtitle: "Digital Physical Design Exploration & Synthesis with OpenLane",
    featured: false,
    category: "vlsi",
    status: "Ongoing / Research",
    statusType: "ongoing",
    image: "/alu.jpg",
    timeline: "2025 – Present",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Verilog HDL",
      "OpenLane Flow",
      "Yosys Synthesis",
      "SkyWater 130nm PDK",
      "Magic VLSI",
      "Static Timing Analysis (STA)"
    ],
    shortDescription:
      "Methodical study and practical implementation of the complete digital ASIC flow from synthesizable RTL to standard cell placement, routing, and timing closure.",
    contribution:
      "Investigating open-source ASIC toolchains utilizing OpenLane and the SkyWater 130nm process design kit. Conducting gate-level synthesis experiments with Yosys, exploring floorplanning constraints, power distribution networks (PDN), and static timing analysis reports.",
    detailedOverview: {
      problemStatement:
        "Transitioning from RTL simulation to silicon layout requires mastering synthesis constraints, clock tree synthesis (CTS), wire parasitics, DRC/LVS cleanliness, and timing slack closure.",
      solutionArchitecture:
        "Utilizing standard cell libraries to benchmark small-to-medium digital IP cores (ALUs and FIFOs). Analyzing tradeoffs between area, gate count, and worst negative slack (WNS) during placement and global routing.",
      keyFeatures: [
        "Gate-level mapping and logic optimization via Yosys.",
        "Floorplan generation with power ring and stripe strap definitions.",
        "Static timing analysis (STA) review for setup and hold timing violations.",
        "DRC (Design Rule Checking) and LVS (Layout vs Schematic) verification.",
        "Transparent reporting without fabricated post-silicon silicon tape-out claims."
      ],
      futureRoadmap:
        "Generating clean GDSII output files for tape-out consideration on open silicon shuttle runs."
    }
  },
  {
    id: "dsm-decimation-filter",
    title: "Delta-Sigma Modulator (DSM) Digital Decimation Filter",
    subtitle: "High-Resolution Oversampled Signal Processing Architecture",
    featured: false,
    category: "vlsi",
    status: "Proposed / Academic Research",
    statusType: "proposed",
    image: "/lenet.jpg",
    timeline: "Academic Research",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Verilog HDL",
      "MATLAB",
      "Simulink",
      "Digital Signal Processing",
      "Cadence Xcelium",
      "CIC Filters"
    ],
    shortDescription:
      "Architectural research and hardware modeling of multi-stage digital decimation filters designed to downsample and filter high-frequency bitstreams from delta-sigma analog-to-digital converters.",
    contribution:
      "Formulating filter transfer functions in MATLAB, evaluating Cascaded Integrator-Comb (CIC) and half-band FIR architectures, and preparing synthesizable RTL module specifications in Verilog HDL.",
    detailedOverview: {
      problemStatement:
        "Delta-Sigma modulators trade bandwidth for resolution through oversampling and noise shaping. Extracting the high-resolution Nyquist-rate digital signal requires an efficient decimation filter that minimizes silicon area and power consumption.",
      solutionArchitecture:
        "The architecture proposes a two-stage decimation approach: a multiplier-free CIC filter for high-ratio primary downsampling followed by an efficient half-band FIR filter for droop compensation and sharp transition band cutoff.",
      keyFeatures: [
        "Multiplier-free CIC integrator and comb stage design for high throughput.",
        "MATLAB frequency response simulation and passband ripple characterization.",
        "Register sizing calculations to avoid bit overflow in integrator stages.",
        "RTL pipeline planning for low-power operation in digital systems."
      ],
      futureRoadmap:
        "Completing synthesizable Verilog modules and running verification against MATLAB floating-point models in Cadence Xcelium."
    }
  },
  {
    id: "rtl-alu-design",
    title: "RTL 32-Bit ALU Design & Verification",
    subtitle: "Parameterized Datapath Arithmetic & Logic Core in Verilog",
    featured: false,
    category: "vlsi",
    status: "Completed",
    statusType: "completed",
    image: "/alu.jpg",
    timeline: "2024",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Verilog HDL",
      "Cadence Xcelium",
      "Digital Logic Design",
      "Testbench Verification"
    ],
    shortDescription:
      "Design and cycle-accurate functional verification of a 32-bit parameterized Arithmetic Logic Unit (ALU) supporting 16 operations with flag generation.",
    contribution:
      "Designed the synthesizable RTL module with support for signed/unsigned addition, subtraction, logical bitwise operations, barrel shifts, and condition evaluation. Developed a self-checking testbench to verify boundary conditions, zero flags, and overflow detection.",
    detailedOverview: {
      problemStatement:
        "The ALU is the core computational block of any microprocessor. Designing a clean, hazard-free datapath with low gate delay and clear flag status generation is a fundamental milestone in digital system architecture.",
      solutionArchitecture:
        "Implemented as a clean combinational and registered ALU with parameterized bit-width (default 32-bit), featuring carry lookahead addition logic, barrel shifters, and status flag registers (Zero, Sign, Overflow, Carry).",
      keyFeatures: [
        "16 distinct arithmetic and logic operations decoded via 4-bit opcode.",
        "Zero, Carry, Overflow, and Negative status flag calculation.",
        "Parameterized data width for modular reuse in larger RISC CPU pipelines.",
        "Comprehensive randomized and edge-case testbench verification."
      ],
      futureRoadmap:
        "Integrating the ALU into a complete pipelined RISC-V 5-stage CPU datapath."
    }
  },
  {
    id: "otp-bank-locker",
    title: "OTP Based Bank Locker Security System",
    subtitle: "Hardware-Level Multi-Factor Embedded Security System",
    featured: false,
    category: "embedded",
    status: "Completed",
    statusType: "completed",
    image: "/locker.jpg",
    timeline: "2023 – 2024",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Embedded C",
      "Microcontrollers",
      "GSM Telemetry",
      "Keypad Matrix",
      "Solenoid Actuators",
      "Hardware Security"
    ],
    shortDescription:
      "Microcontroller-driven hardware security vault requiring dual verification: master keypad credentials and dynamic SMS-generated OTP validation before unlocking.",
    contribution:
      "Programmed the firmware in Embedded C, interfaced the 4x4 matrix keypad, LCD display, GSM module, and high-current relay drivers for electromagnetic locker actuation. Implemented timeout handling and lockout routines upon consecutive incorrect entries.",
    detailedOverview: {
      problemStatement:
        "Traditional mechanical bank lockers are vulnerable to physical duplication of master keys and unauthorized manual entry. An independent secondary hardware verification channel drastically improves vault safety.",
      solutionArchitecture:
        "The microcontroller polls the keypad for the user's primary passkey. Upon validation, it triggers the GSM modem to transmit a dynamic, pseudo-random OTP to the registered account holder's cellular phone. Access is unlocked only after valid OTP input within a preset timer window.",
      keyFeatures: [
        "Dual-factor authentication combining knowledge (passkey) and possession (GSM token).",
        "Dynamic pseudo-random OTP generation with time-out expiration logic.",
        "Emergency tamper alarm triggers upon 3 consecutive invalid authentication attempts.",
        "Opto-isolated relay interface for safe high-current solenoid lock drive."
      ],
      futureRoadmap:
        "Upgrading the communications link to an encrypted cellular IoT protocol (LTE-M/NB-IoT) with biometric fingerprint scanning."
    }
  },
  {
    id: "employee-task-management",
    title: "Employee Task Management System",
    subtitle: "Full-Stack Enterprise Workflow & Task Delegation Platform",
    featured: false,
    category: "fullstack",
    status: "Completed",
    statusType: "completed",
    image: "/taskmanagement.png",
    timeline: "2024",
    github: "https://github.com/Chakravarthi554/EmployeeTaskManagementSystem-.git",
    live: null,
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Bootstrap",
      "Hibernate",
      "RESTful APIs"
    ],
    shortDescription:
      "Enterprise workflow web application enabling managers to assign tasks, monitor progress stages, track deadlines, and assess team throughput.",
    contribution:
      "Designed and coded the backend microservice architecture using Java Spring Boot and Hibernate ORM. Modeled the relational schema in MySQL, implemented RESTful controllers, and constructed a reactive dashboard in React.js.",
    detailedOverview: {
      problemStatement:
        "Organizations need clear visibility into daily deliverables, preventing bottlenecks and miscommunicated priorities between team managers and individual contributors.",
      solutionArchitecture:
        "A layered enterprise architecture: React.js SPA on the presentation tier, Spring Boot REST controllers and service beans in the business layer, and Hibernate JPA communicating with MySQL database.",
      keyFeatures: [
        "Role-based authorization (Admin / Manager / Employee).",
        "CRUD operations for task lifecycle (Backlog, In Progress, Review, Completed).",
        "Automated deadline alerts and priority flags (Critical, Medium, Low).",
        "Normalized relational database schema ensuring referential integrity."
      ],
      futureRoadmap:
        "Adding automated email notifications via Spring Mail and containerizing backend with Docker."
    }
  },
  {
    id: "movie-recommendation",
    title: "Content-Based Movie Recommendation System",
    subtitle: "Machine Learning Recommendation Engine using Vector Similarity",
    featured: false,
    category: "fullstack",
    status: "Completed",
    statusType: "completed",
    image: "/portfolio.jpg",
    timeline: "2023",
    github: "https://github.com/Chakravarthi554",
    live: null,
    techStack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "TF-IDF Vectorizer",
      "Cosine Similarity",
      "Streamlit"
    ],
    shortDescription:
      "Data-driven recommendation engine analyzing movie metadata, plot keywords, and cast details to recommend the closest matching titles.",
    contribution:
      "Preprocessed dataset using Pandas, generated bag-of-words metadata representations, applied vectorization techniques, and evaluated cosine distance between movie feature vectors.",
    detailedOverview: {
      problemStatement:
        "Helping users discover relevant cinematic titles amidst vast streaming libraries requires personalized ranking based on plot semantic similarity rather than raw popularity alone.",
      solutionArchitecture:
        "Combines genre tags, director credits, and plot summaries into a combined text corpus, vectorized with Scikit-learn and queried via cosine similarity matrix for top-N nearest neighbors.",
      keyFeatures: [
        "Vectorization of textual metadata using TF-IDF and CountVectorizer.",
        "Real-time nearest-neighbor retrieval via Cosine Similarity ranking.",
        "Interactive web dashboard built with Streamlit for instant title search and preview."
      ],
      futureRoadmap:
        "Incorporating collaborative filtering with matrix factorization (SVD)."
    }
  }
];
