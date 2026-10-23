// ============================================================
//  EDIT THIS FILE ONLY. Everything on the website comes from here.
// ============================================================

export const profile = {
  name: "Muhammad Fazeel",
  role: "Full Stack Developer",
  tagline:
    "I build real-world full-stack applications with a focus on backend systems, databases and AI. I'm a Computer Science student at FAST-NUCES, seeking software engineering internships.",
  location: "Karachi, Pakistan",
  email: "fazeeltaariq@gmail.com",
  resumeUrl: "", // add your resume at /public/resume.pdf, then set this to "/resume.pdf"
  photo: "", // e.g. "/me.jpg" (file inside /public). Leave empty to hide the photo.
  availability: "Seeking software engineering internships and entry-level roles",
  socials: [
    { label: "GitHub", url: "https://github.com/fazeeltariq" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-fazeel-tariq-458819329/" },
    { label: "LeetCode", url: "https://leetcode.com/u/f11_zx/" },
  ],
  stats: [
    { value: "3.83", label: "CGPA (out of 4.00)" },
    { value: "150+", label: "LeetCode problems solved" },
    { value: "6", label: "Projects" },
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at FAST-NUCES with a strong foundation in backend systems, databases and core CS subjects.",
    "I enjoy building practical systems end to end: secure REST APIs, role-based access control, transaction-safe databases, and AI features such as retrieval-augmented generation. I'm interested in backend engineering and AI, and I'm looking for an internship where I can work on real products.",
  ],
  highlights: [
    "Secure REST APIs and role-based access control",
    "Database design and transaction-safe systems",
    "RAG pipelines and LLM integrations",
    "Data structures, algorithms and core CS",
  ],
};

export const skills = [
  { title: "Languages", items: ["JavaScript", "C", "C++", "Python"] },
  { title: "Frontend", items: ["React.js", "Tailwind CSS", "Axios", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"] },
  { title: "Databases", items: ["MongoDB", "MongoDB Atlas", "SQL"] },
  {
    title: "Authentication & security",
    items: ["JWT", "HTTP-only cookies", "Role-based access control (RBAC)", "Zod validation", "Rate limiting"],
  },
  {
    title: "AI & data",
    items: ["LLM APIs", "Retrieval-augmented generation (RAG)", "Embeddings", "Vector search", "PDF extraction"],
  },
  {
    title: "Tools & core CS",
    items: ["Git", "GitHub", "Postman", "Cloudinary", "OOP", "Data structures & algorithms"],
  },
];

export const projects = [
  {
    title: "ByteBuy: AI-Powered E-Commerce Platform",
    category: "Full Stack",
    description:
      "A full-stack e-commerce platform with authentication, role-based authorization, product management, cart, wishlist, reviews, order processing and Cloudinary image management. REST APIs use JWT authentication with HTTP-only cookies, Zod validation and rate limiting. An AI-assisted PDF workflow extracts structured product specifications with an LLM and saves them as reviewable drafts that an admin approves before publishing.",
    result: "",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "Cloudinary"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/ai-ecommerce",
  },
  {
    title: "ResOps: Project & Resource Management Platform",
    category: "Backend",
    description:
      "A multi-workspace project management platform with the business rules enforced on the backend: projects, tasks, memberships, invitations, comments and activity logs. Role-based authorization covers workspace owners, admins, members and viewers, with project- and task-level access controls. Resource allocation and scheduling logic detects overlapping allocations, capacity conflicts and resource availability.",
    result: "",
    tags: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/project-management-platform",
  },
  {
    title: "KnowledgeForge: RAG Knowledge Platform",
    category: "AI & Data",
    description:
      "A document intelligence platform for creating knowledge bases from PDFs and retrieving information through natural-language queries. The RAG pipeline covers PDF extraction, page-aware chunking, Gemini embeddings and MongoDB Atlas Vector Search, with configurable top-k, candidate and relevance parameters. Answers include page-level citations, and AI-extracted data is reviewed by a person before it is approved.",
    result: "",
    tags: ["Python", "FastAPI", "MongoDB Atlas", "Gemini", "React"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/knowledgeforge-ai",
  },
  {
    title: "OrganLink: National Organ Transplant Registry",
    category: "Full Stack",
    description:
      "A web-based organ matching and transplant registry connecting donors, patients and hospitals, with role-based access for admins, hospital coordinators, patients and donors. The MySQL database is normalized to BCNF and uses advanced SQL joins to match donors and recipients by blood group and organ type. Waitlists are prioritized by medical urgency and wait time, with ACID-compliant allocation transactions that lock organ records to prevent double-booking, plus audit logging of all status updates and matches. Built with two teammates for a Database Systems course.",
    result: "",
    tags: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/organlink",
  },
  {
    title: "Tetris Game",
    category: "Course Projects",
    description:
      "A GUI Tetris game for an Object-Oriented Programming course (Spring 2025). It has real-time input, line clearing, score tracking and two difficulty levels, with the code split into classes that apply encapsulation, inheritance, polymorphism and abstraction.",
    result: "",
    tags: ["C++", "Raylib"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/OOP_PROJECT_TETRIS_GAME",
  },
  {
    title: "Social Network Analysis",
    category: "Course Projects",
    description:
      "A social network modeled as a graph for a Data Structures and Algorithms course. It supports adding friends, creating connections, friend suggestions, common friends, shortest-path discovery, community detection, cycle detection and basic messaging, using BFS and DFS traversal.",
    result: "",
    tags: ["C++", "Graphs", "BFS", "DFS"],
    image: "",
    live: "",
    repo: "https://github.com/fazeeltariq/dsa-social-network-analysis",
  },
];

export const experience = [
  {
    role: "Student Lab Assistant, Programming Fundamentals",
    org: "FAST-NUCES, Karachi",
    period: "Aug 2026 - Present",
    points: [
      "Assist students during lab sessions with debugging, problem-solving and implementing programming exercises.",
    ],
  },
  {
    role: "Teaching Assistant, Object-Oriented Programming",
    org: "FAST-NUCES, Karachi",
    period: "Jan 2026 - May 2026",
    points: [
      "Assisted students with OOP concepts, assignments, debugging and applying object-oriented design principles.",
    ],
  },
];

export const education = [
  {
    role: "BS Computer Science",
    org: "FAST National University of Computer and Emerging Sciences (FAST-NUCES), Karachi",
    period: "2024 - 2028",
    points: ["CGPA: 3.83 / 4.00"],
  },
];

export const achievements = [
  {
    title: "Rector's List and Gold Medal",
    issuer: "FAST-NUCES",
    year: "2025 - 2026",
    description: "Achieved a 4.00 SGPA in both Fall 2025 and Spring 2026.",
  },
  {
    title: "Dean's List",
    issuer: "FAST-NUCES",
    year: "",
    description: "Recognized for academic performance during the second semester.",
  },
  {
    title: "Runner-up, SysCore Operating Systems Hackathon",
    issuer: "",
    year: "",
    description: "Competed in challenges involving parallelism and synchronization.",
  },
  {
    title: "Coder Cup Finalist",
    issuer: "University competitive programming competition",
    year: "",
    description: "Reached the final round. Has also solved 150+ problems on LeetCode.",
  },
];
