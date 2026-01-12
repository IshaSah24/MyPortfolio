// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
//   SiMongodb,
//   SiPostgresql,
//   SiNodedotjs,
//   SiRedis,
//   SiAmazonaws,
//   SiPrisma,
//   SiJavascript,
//   SiGit,
// } from "react-icons/si";
// import { Code, Database, Cloud } from "lucide-react";

import typing from "../assets/project-logo/typestrike.png";
import techevents from "../assets/project-logo/techevents.png";
import mailagent from "../assets/project-logo/gmail.demo.png";
// import cli from "/cli.png";
// import url from "/url.png";
// import port from "/port.png";
// import stats from "/stats.png";


// ---------------- achievements ----------------

const achievements = [
  {
    icon: <Award size={14} />,
    text: "Built 3+ production applications during internship",
    color: "text-yellow-500",
  },
  {
    icon: <Rocket size={14} />,
    text: "Fast learner with proven track record",
    color: "text-purple-500",
  },
  {
    icon: <Target size={14} />,
    text: "Strong problem-solving skills",
    color: "text-green-500",
  },
];



// ---------------- PROJECTS ----------------

export const projects = [
  {
    title: "TypeStrike.AI",
    description:
      "Real-time competitive typing SaaS platform with AI opponents, multiplayer gameplay, and performance analytics.",
    image: typing,
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
    github: "https://github.com/IshaSah24/TypeStrike.ai",
    demo: "https://typestrike.vercel.app/",
    details:
      "Built real-time multiplayer using WebSockets, implemented AI opponents, user rankings, and Razorpay-powered subscription plans.",
    // category: "SaaS Product",
    metrics: ["AI Opponents", "Real-time", "Subscription Model"],
  },
  {
    title: "TechEvents",
    description:
      "Real-time competitive typing SaaS platform with AI opponents, multiplayer gameplay, and performance analytics.",
    image: techevents,
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
    github: "https://github.com/IshaSah24/TypeStrike.ai",
    demo: "https://goeventtechys.vercel.app/",
    details:
      "Built real-time multiplayer using WebSockets, implemented AI opponents, user rankings, and Razorpay-powered subscription plans.",
    // category: "SaaS Product",
    metrics: ["AI Opponents", "Real-time", "Subscription Model"],
  },
  {
    title: "Mail-Agent",
    description:
      "Real-time competitive typing SaaS platform with AI opponents, multiplayer gameplay, and performance analytics.",
    image: mailagent,
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
    github: "https://github.com/IshaSah24/TypeStrike.ai",
    demo: "https://drive.google.com/file/d/1Mh4ZVG7XjnTyMxcnbWUwITDGOsIVCKkH/view?usp=sharing",
    details:
      "Built real-time multiplayer using WebSockets, implemented AI opponents, user rankings, and Razorpay-powered subscription plans.",
    // category: "SaaS Product",
    metrics: ["AI Opponents", "Real-time", "Subscription Model"],
  },
  // {
  //   title: "Daily Plan Scheduler",
  //   description:
  //     "Task planning and scheduling web app for managing daily productivity with clean UI and persistence.",
  //   // image: task,
  //   tags: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
  //   github: "",
  //   demo: "",
  //   details:
  //     "Implemented task scheduling, state management with Redux, and modern UI using Tailwind.",
  //   category: "Productivity App",
  //   metrics: ["Task Management", "Redux State", "Clean UI"],
  // },
  // {
  //   title: "AI Log CLI",
  //   description:
  //     "CLI tool for analyzing logs and text data with quick summaries and usage insights.",
  //   // image: cli,
  //   tags: ["Node.js", "SQL", "CLI", "Analytics"],
  //   github: "",
  //   demo: "",
  //   details:
  //     "Built a command-line analytics tool that processes structured and unstructured logs.",
  //   category: "Developer Tool",
  //   metrics: ["Fast", "CLI", "Analytics"],
  // },
  // {
  //   title: "FullStack URL Shortener",
  //   description:
  //     "A full-stack URL shortener with analytics and persistent storage.",
  //   // image: url,
  //   tags: ["React", "Next.js", "PostgreSQL", "Prisma", "Tailwind"],
  //   github: "",
  //   demo: "",
  //   details:
  //     "Built backend APIs for generating short links, storing click data, and rendering analytics.",
  //   category: "Web App",
  //   metrics: ["Analytics", "Backend APIs", "Scalable"],
  // },
  // {
  //   title: "Stats Dashboard",
  //   description:
  //     "Statistics and analytics web app for visualizing structured data.",
  //   // image: stats,
  //   tags: ["React", "Next.js", "SQL", "Tailwind"],
  //   github: "",
  //   demo: "",
  //   details:
  //     "Created interactive data dashboards backed by SQL-powered APIs.",
  //   category: "Analytics",
  //   metrics: ["Charts", "SQL", "Dashboards"],
  // },
];


// ---------------- EXPERIENCE ----------------

export const experiences = [
  {
    icon: "nullclass",
    company: "NullClass EdTech Pvt. Ltd.",
    position: "Full-Stack Software Development Intern",
    period: "Nov 2025 – Present",
    location: "Remote",
    description: [
      "Developed backend-driven web applications using RESTful APIs",
      "Implemented authentication, subscriptions, and account recovery systems",
      "Built reward points and user activity tracking modules",
      "Designed database schemas and optimized backend logic",
    ],
    technologies: ["Next.js", "PostgreSQL", "MERN", "REST APIs", "Redis"],
    type: "Remote · Startup",
  },
  {
    icon: "hackathon",
    company: " DATM & ISOAH North Bengal Hackathon",
    position: "AI Agent for Gmail (Hackathon Project)",
    period: "Nov 2025 – Present",
    location: "Alipurdaur, West bengal",
    description: [
      "Developed backend-driven web applications using RESTful APIs",
      "Implemented authentication, subscriptions, and account recovery systems",
      "Built reward points and user activity tracking modules",
      "Designed database schemas and optimized backend logic",
    ],
    technologies: ["Next.js", "PostgreSQL", "MERN", "REST APIs", "Redis"],
    type: "On Site",
  },
  {
    icon: "network",
    company: " Networking Infrastructure",
    position: "Project Lead — Enterprise Infrastructure",
    period: "Nov 2025 – Present",
    location: "Academic",
    description: [
      "Developed backend-driven web applications using RESTful APIs",
      "Implemented authentication, subscriptions, and account recovery systems",
      "Built reward points and user activity tracking modules",
      "Designed database schemas and optimized backend logic",
    ],
    technologies: ["Next.js", "PostgreSQL", "MERN", "REST APIs", "Redis"],
    type: "Remote · Startup",
  },
];


// ---------------- SKILL CATEGORIES ----------------
export const skillCategories = [
  {
    title: "Frontend",
    icon: "Code",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    title: "Backend",
    icon: "Database",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Prisma", icon: "SiPrisma" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", icon: "SiAmazonaws" },
      { name: "Linux", icon: "SiLinux" },
      { name: "CI/CD", icon: "SiGithubactions" },
      { name: "Docker", icon: "SiDocker" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "Tool",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
];



// ---------------- CERTIFICATIONS ----------------

export const certifications = [
  {
    name: "Red Hat System Administration I (RH134)",
    issuer: "Red Hat",
    date: "2025",
    badge: "Enterprise",
  },
  {
    name: "AWS Lambda Foundations",
    issuer: "AWS Training & Certification",
    date: "Oct 2025",
    badge: "Cloud",
  },
  {
    name: "Complete Generative AI with LangChain & Hugging Face",
    issuer: "Udemy",
    date: "May 2025",
    badge: "AI/ML",
  },
  {
    name: "Cybersecurity Training Program",
    issuer: "APAC Cybersecurity Fund & The Asia Foundation",
    date: "Apr 2025",
    badge: "Security",
  },
];
