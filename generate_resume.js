const PDFDocument = require('pdfkit');
const fs = require('fs');

const primaryColor = '#1e3a8a'; // Navy Blue for ATS professional look
const textColor = '#1e293b';
const lightBorder = '#cbd5e1';

function createHeader(doc, titleSubtitle) {
  doc.font('Helvetica-Bold').fontSize(20).fillColor(primaryColor).text('ROYYA CHAKRAVARTHI', { align: 'center' });
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#0284c7').text(titleSubtitle, { align: 'center' });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor(textColor);
  doc.text('Email: chakravarthiroyya9398@gmail.com  |  Mobile: +91 9398197099  |  Location: Hyderabad, India', { align: 'center' });
  doc.text('LinkedIn: linkedin.com/in/royya-chakravarthi-003ab8236  |  GitHub: github.com/Chakravarthi554', { align: 'center' });
  doc.moveDown(0.5);
  doc.moveTo(36, doc.y).lineTo(559, doc.y).strokeColor(lightBorder).lineWidth(1).stroke();
  doc.moveDown(0.5);
}

function addSectionHeader(doc, title) {
  doc.font('Helvetica-Bold').fontSize(11).fillColor(primaryColor).text(title.toUpperCase());
  doc.moveTo(36, doc.y + 2).lineTo(559, doc.y + 2).strokeColor('#94a3b8').lineWidth(0.5).stroke();
  doc.moveDown(0.4);
  doc.fillColor(textColor);
}

// 1. GENERATE MASTER ATS RESUME
function generateMasterResume() {
  const doc = new PDFDocument({ margin: 36, size: 'A4' });
  doc.pipe(fs.createWriteStream('./public/resume.pdf'));

  createHeader(doc, 'Digital Systems Engineer  |  RTL Design  |  Full Stack Developer');

  addSectionHeader(doc, 'Professional Summary');
  doc.font('Helvetica').fontSize(9).text(
    'M.E. Digital Systems candidate at Osmania University with dual expertise in hardware engineering and software systems. Proficient in synthesizable RTL design using Verilog HDL, Cadence Xcelium simulation, and INT8 quantization for neural accelerators, alongside full-stack enterprise development with Java, Spring Boot, React.js, and Node.js. Experienced in hardware verification, RF sub-system testing, and scalable cloud application architecture.',
    { align: 'justify', lineGap: 1.5 }
  );
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Education');
  doc.font('Helvetica-Bold').fontSize(9.5).text('University College of Engineering, Osmania University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Master of Engineering (M.E.) in Digital Systems', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('Pursuing (Expected Aug 2027)', { align: 'right' });
  doc.moveDown(0.3);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Anurag University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Bachelor of Technology (B.Tech) in Electronics & Communication Engineering', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('2020 – 2024  |  CGPA: 8.58 / 10', { align: 'right' });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Technical Skills');
  doc.font('Helvetica-Bold').fontSize(9).text('Digital Systems & VLSI: ', { continued: true });
  doc.font('Helvetica').text('Verilog HDL, RTL Design, Cadence Xcelium, SimVision, FPGA Concepts, INT8 Quantization, ALU Datapaths');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Software Development: ', { continued: true });
  doc.font('Helvetica').text('Java (Core & J2EE), Spring Boot, React.js, Node.js, Express.js, MongoDB, MySQL, JavaScript (ES6+), C');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Tools & Platforms: ', { continued: true });
  doc.font('Helvetica').text('Git, GitHub, Linux, Docker (Basics), Postman, RESTful APIs, Eclipse IDE, MATLAB');
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Experience');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Lanvit Technologies', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Java Full Stack Developer Intern', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('June 2025 – September 2025 [Internship]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Developed responsive full-stack modules using Java, Spring Boot, and React.js, improving client data processing speed.', { lineGap: 1.2 });
  doc.text('• Designed secure RESTful API endpoints and connected backend microservices with relational MySQL databases.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Inspanner Academy', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Java Full Stack Trainee', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('October 2024 – April 2025 [Professional Training]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Completed intensive training in Core Java, Spring Boot microservices, Hibernate ORM, and modern React.js frontend architecture.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Astra Microwave Products Limited', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Project Trainee', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('February 2024 – June 2024 [Project Trainee]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Assisted in testing and diagnostic analysis of high-frequency RF and microwave sub-systems using Spectrum Analyzers and Power Meters.', { lineGap: 1.2 });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Key Projects');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Hardware Accelerator Design of LeNet-5 CNN', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Verilog HDL, Cadence Xcelium, Python', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Designed custom synthesizable Verilog accelerator for LeNet-5 CNN; applied INT8 quantization reducing memory footprint by 75%.', { lineGap: 1.2 });
  doc.text('• Verified cycle-accurate RTL execution and line-buffer sliding window convolution against software tensors in Cadence Xcelium.', { lineGap: 1.2 });
  doc.moveDown(0.3);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Harvixa (Rice Mill Express Platform)', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | React.js, Node.js, Express, MongoDB, Razorpay', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Architected full-stack grain logistics ERP automating moisture-adjusted calculations, inventory management, and digital payments.', { lineGap: 1.2 });
  doc.moveDown(0.3);

  doc.font('Helvetica-Bold').fontSize(9.5).text('RTL 32-Bit ALU Design & Verification', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Verilog HDL, Cadence SimVision', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Designed 32-bit ALU supporting 16 arithmetic, logic, and barrel-shift operations with zero/overflow flags verified via testbenches.', { lineGap: 1.2 });

  doc.end();
}

// 2. GENERATE VLSI & DIGITAL SYSTEMS SPECIALIZED RESUME
function generateVLSIResume() {
  const doc = new PDFDocument({ margin: 36, size: 'A4' });
  doc.pipe(fs.createWriteStream('./public/resume-vlsi.pdf'));

  createHeader(doc, 'Digital Systems Engineer  |  RTL Design & Verification  |  FPGA & ASIC');

  addSectionHeader(doc, 'Specialized Summary');
  doc.font('Helvetica').fontSize(9).text(
    'M.E. in Digital Systems scholar at University College of Engineering, Osmania University, specializing in RTL design, hardware accelerator architectures, and design verification. Strong hands-on competence in synthesizable Verilog HDL, Cadence Xcelium simulation, INT8 quantization flow, FSM datapaths, and RF electronics testing. Passionate about architecting energy-efficient silicon computing blocks and high-performance digital systems.',
    { align: 'justify', lineGap: 1.5 }
  );
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Education');
  doc.font('Helvetica-Bold').fontSize(9.5).text('University College of Engineering, Osmania University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Master of Engineering (M.E.) in Digital Systems', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('Pursuing (Expected Aug 2027)', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5).text('Key Focus: Advanced Digital System Design, RTL Modeling, Low-Power VLSI, Computer Architecture, Verification.');
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Anurag University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Bachelor of Technology (B.Tech) in ECE', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('2020 – 2024  |  CGPA: 8.58 / 10', { align: 'right' });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'VLSI & Hardware Skills');
  doc.font('Helvetica-Bold').fontSize(9).text('Hardware Description & RTL: ', { continued: true });
  doc.font('Helvetica').text('Verilog HDL, SystemVerilog (Fundamentals), Synthesizable RTL, FSM Datapath Design, Pipelining');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('EDA & Simulation Tools: ', { continued: true });
  doc.font('Helvetica').text('Cadence Xcelium, SimVision Waveform Viewer, Yosys (OpenLane flow study), ModelSim, Linux EDA environment');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Hardware AI & Verification: ', { continued: true });
  doc.font('Helvetica').text('INT8 Fixed-Point Quantization, Systolic MAC Arrays, Self-Checking Testbenches, Waveform Debugging');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Supporting Languages & Tools: ', { continued: true });
  doc.font('Helvetica').text('C Programming, Python (NumPy/TensorFlow for tensor verification), MATLAB, Git, Shell Scripting');
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Engineering Experience');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Astra Microwave Products Limited', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Project Trainee', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('February 2024 – June 2024 [Project Trainee]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Supported testing, RF characterization, and diagnostic analysis of aerospace & defense-grade microwave components.', { lineGap: 1.2 });
  doc.text('• Operated high-frequency laboratory test equipment including Spectrum Analyzers, Signal Generators, and RF Power Meters.', { lineGap: 1.2 });
  doc.text('• Evaluated PCB signal paths and documented RF attenuation and insertion loss data against defense specifications.', { lineGap: 1.2 });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Hardware & RTL Projects');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Hardware Accelerator Design of LeNet-5 CNN', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Verilog HDL, Cadence Xcelium, Python', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Engineered synthesizable RTL architecture for LeNet-5 CNN inference using INT8 symmetric quantization.', { lineGap: 1.2 });
  doc.text('• Designed modular convolutional line buffers and pipelined Multiply-Accumulate (MAC) arrays in Verilog HDL.', { lineGap: 1.2 });
  doc.text('• Conducted cycle-accurate verification in Cadence Xcelium, confirming complete numerical parity with software gold tensors.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('RTL 32-Bit ALU Design & Verification', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Verilog HDL, Cadence SimVision', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Modeled parameterized 32-bit ALU with 16 distinct arithmetic, logical, and barrel-shift instructions.', { lineGap: 1.2 });
  doc.text('• Developed comprehensive self-checking testbenches validating Zero, Carry, Sign, and Overflow flag generation.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Delta-Sigma Modulator (DSM) Digital Decimation Filter', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Academic Research & MATLAB Modeling', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Formulated multi-stage decimation architectures featuring multiplier-free Cascaded Integrator-Comb (CIC) and half-band FIR filters.', { lineGap: 1.2 });

  doc.end();
}

// 3. GENERATE SOFTWARE & EMBEDDED SPECIALIZED RESUME
function generateSoftwareResume() {
  const doc = new PDFDocument({ margin: 36, size: 'A4' });
  doc.pipe(fs.createWriteStream('./public/resume-software.pdf'));

  createHeader(doc, 'Full Stack Software Engineer  |  Java & Spring Boot  |  Embedded Systems');

  addSectionHeader(doc, 'Specialized Summary');
  doc.font('Helvetica').fontSize(9).text(
    'Full-Stack Developer and Embedded Systems Engineer with strong engineering foundations from Osmania University (M.E. Digital Systems) and Anurag University (B.Tech ECE, 8.58 CGPA). Skilled in architecting distributed enterprise web applications using Java Spring Boot, microservices, and React.js/Node.js. Proven experience developing Harvixa (enterprise agri-logistics platform) and low-level microcontroller firmware in Embedded C.',
    { align: 'justify', lineGap: 1.5 }
  );
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Education');
  doc.font('Helvetica-Bold').fontSize(9.5).text('University College of Engineering, Osmania University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Master of Engineering (M.E.) in Digital Systems', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('Pursuing (Expected Aug 2027)', { align: 'right' });
  doc.moveDown(0.3);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Anurag University', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Bachelor of Technology (B.Tech) in ECE', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('2020 – 2024  |  CGPA: 8.58 / 10', { align: 'right' });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Software & Embedded Skills');
  doc.font('Helvetica-Bold').fontSize(9).text('Backend & Frameworks: ', { continued: true });
  doc.font('Helvetica').text('Java (Core & Advanced), Spring Boot, Spring Data JPA, Hibernate ORM, Node.js, Express.js, REST APIs');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Frontend & Web: ', { continued: true });
  doc.font('Helvetica').text('React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI/UX');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Databases & Tools: ', { continued: true });
  doc.font('Helvetica').text('MySQL, MongoDB, Firebase, Git, GitHub, Docker (Basics), Postman, Linux CLI');
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).text('Embedded & IoT: ', { continued: true });
  doc.font('Helvetica').text('Embedded C, Microcontroller Interfacing, UART, GSM Telemetry, Hardware Security Actuation');
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Experience');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Lanvit Technologies', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Java Full Stack Developer Intern', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('June 2025 – September 2025 [Internship]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Implemented scalable RESTful microservices with Java Spring Boot, integrating with MySQL relational schemas.', { lineGap: 1.2 });
  doc.text('• Developed responsive React.js UI views with state synchronization, decreasing frontend API turnaround latency.', { lineGap: 1.2 });
  doc.text('• Collaborated across git-based agile development cycles, writing modular testable code and participating in code reviews.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Inspanner Academy', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' — Hyderabad, India', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(9).text('Java Full Stack Trainee', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text('October 2024 – April 2025 [Professional Training]', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Extensive enterprise training in Java design patterns, Spring Boot, Spring Security, Hibernate ORM, and full-stack MERN.', { lineGap: 1.2 });
  doc.moveDown(0.6);

  addSectionHeader(doc, 'Key Software Projects');
  doc.font('Helvetica-Bold').fontSize(9.5).text('Harvixa (Rice Mill Express Platform)', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | React.js, Node.js, Express, MongoDB, Razorpay', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Architected end-to-end grain milling supply chain ERP with real-time stock updates, automated moisture billing, and Razorpay payouts.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('Employee Task Management System', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Java, Spring Boot, React.js, MySQL', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Built enterprise task monitoring application with role-based JWT authentication (Admin/Manager/Employee) and MySQL persistence.', { lineGap: 1.2 });
  doc.moveDown(0.4);

  doc.font('Helvetica-Bold').fontSize(9.5).text('OTP Based Bank Locker Security System', { continued: true });
  doc.font('Helvetica').fontSize(8.5).text(' | Embedded C, Microcontrollers, GSM', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5);
  doc.text('• Programmed microcontroller firmware in Embedded C for multi-factor vault security with dynamic GSM OTP verification.', { lineGap: 1.2 });

  doc.end();
}

generateMasterResume();
generateVLSIResume();
generateSoftwareResume();

console.log('Successfully generated 3 ATS-optimized resumes in public/ directory!');
