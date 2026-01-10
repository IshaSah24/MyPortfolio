import { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { Server } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Sun,
  Moon,
  Eye,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Trophy,
  School,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiCplusplus,
  SiDjango,
  SiRedhat,
} from "react-icons/si";
import { FaAws, FaStripe } from "react-icons/fa";
// import { TbBrandReactNative } from "react-icons/tb";
import profile from "./assets/me.png";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import typestrikeImage from "./assets/project-logo/typestrike1.png";
import techeventsImage from "./assets/project-logo/techevents.png";
import gmailAgentImage from "./assets/project-logo/gmail-agent.png";
import nullclassLogo from "./assets/logo/nullclass.png";
import hackathonLogo from "./assets/logo/hackathon.png";
import networkLogo from "./assets/logo/network.webp";
// import LeetCodeCard from "./components/GithubCard";
import GitHubCard from "./components/GithubCard";

function App() {
  const [theme, setTheme] = useState("light");
  const [expandedExperience, setExpandedExperience] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    document.documentElement.classList.remove("dark", "eyecare");
    if (savedTheme !== "light") {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("dark", "eyecare");
    if (newTheme !== "light") {
      document.documentElement.classList.add(newTheme);
    }
  };

  const toggleExperience = (index) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLogoImage = (iconName) => {
    const logoMap = {
      nullclass: nullclassLogo,
      hackathon: hackathonLogo,
      academic: networkLogo,
    };
    return logoMap[iconName] || null;
  };

  const projects = [
    {
      title: "TypeStrike.AI",
      description:
        "Real-time competitive typing SaaS platform with AI opponents, multiplayer interactions, and performance analytics.",
      image: typestrikeImage,
      tags: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
      github: "https://github.com/ishasah/TypeStrike.Ai",
      demo: "https://typestrike.vercel.app/",
      details:
        "Built scalable microservices architecture, implemented subscription-based monetization with Razorpay, and developed real-time multiplayer functionality using WebSockets.",
      category: "SaaS Product",
      metrics: ["10k+ Users", "95% Uptime", "50ms Latency"],
    },
    {
      title: "TechEvents",
      description:
        "Full-stack event management platform with role-based authentication and payment processing.",
      image: techeventsImage,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
      github: "https://github.com/IshaSah24/TechEvents",
      demo: "http://techevents.vercel.app/",
      details:
        "Designed scalable backend architecture with PostgreSQL, implemented secure payment processing, and built real-time notification system.",
      metrics: ["500+ Events", "99.9% Reliability", "Auto-scaling"],
    },
    {
      title: "AI Agent for Gmail",
      description:
        "AI browser extension to analyze email content and generate context-aware replies using advanced NLP.",
      image: gmailAgentImage,
      tags: ["JavaScript", "Chrome API", "Deepseek V3", "NLP"],
      github: "https://github.com/IshaSah24/mail-assistant",
      demo: "https://drive.google.com/file/d/1Mh4ZVG7XjnTyMxcnbWUwITDGOsIVCKkH/view?usp=drive_link",
      details:
        "Developed Chrome extension with dynamic prompt engineering, tone selection, and context-aware response generation.",
      category: "AI Product",
      metrics: ["80% Accuracy", "2s Response Time", "Multi-language"],
    },
  ];

  const experiences = [
    {
      icon: "nullclass",
      company: "NullClass EdTech Pvt. Ltd.",
      position: "Full-Stack Software Development Intern",
      period: "Nov 2025 – Present",
      location: "Remote",
      description: [
        "Developed backend-driven web app with scalable business logic and RESTful architecture",
        "Implemented subscription-based feature limitations, daily activity controls, and account recovery",
        "Created reward points system to track user contributions and manage transfers",
        "Designed database schemas and REST APIs for core functionalities and secure authentication",
      ],
      technologies: ["Next.js", "PostgreSQL", "MERN", "REST APIs", "Redis"],
      expanded: false,
      type: "Remote · Startup",
    },
    {
      icon: "hackathon",
      company: "DATM & ISOAH North Bengal Hackathon",
      position: "AI Agent for Gmail (Hackathon Project)",
      period: "Nov 2025",
      location: "Alipurduar, India",
      description: [
        "Built AI browser/email extension to analyze email content and generate context-aware replies",
        "Implemented dynamic prompt logic for selectable tones: Casual, Professional, Friendly",
        "Developed end-to-end flow covering AI integration, UI interaction, and email response generation",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Deepseek V3"],
      expanded: false,
      type: "Hackathon · Product",
    },
    {
      icon: "academic",
      company: "Networking Infrastructure Project",
      position: "Project Lead — Enterprise Infrastructure",
      period: "May 2024 – July 2024",
      location: "Alipurduar, India",
      description: [
        "Designed RHEL-based centralized server infrastructure with NFS, DHCP, DNS, and Apache services",
        "Configured NFS shared storage, DHCP for automated IP assignment, and DNS for domain-based access",
        "Implemented security policies and monitoring systems for enterprise-grade infrastructure",
      ],
      technologies: [
        "Red Hat Linux",
        "Apache HTTP Server",
        "NFS",
        "DHCP",
        "DNS",
      ],
      expanded: false,
      type: "Infrastructure · Academic",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={16} />,
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
      ],
    },
    {
      title: "Backend",
      icon: <Database size={16} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-900 dark:text-white" />,
        },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      ],
    },
    {
      title: "Database",
      icon: <Database size={16} />,
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#336791]" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={16} />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Linux", icon: <SiRedhat className="text-[#EE0000]" /> },
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      ],
    },
  ];

  const certifications = [
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

  const specialties = [
    {
      title: "Product Development",
      description:
        "End-to-end SaaS product development from concept to deployment",
      icon: <Zap size={20} />,
    },
    {
      title: "Scalable Architecture",
      description: "Building scalable systems for high-growth startups",
      icon: <Globe size={20} />,
    },
    {
      title: "Fintech Integration",
      description: "Payment processing and financial system integrations",
      icon: <FaStripe size={20} />,
    },
    {
      title: "Remote Collaboration",
      description:
        "Experience in distributed team environments and remote workflows",
      icon: <Cpu size={20} />,
    },
  ];

  const coreStack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs size={18} />,
      color: "text-gray-900 dark:text-white",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={18} />,
      color: "text-indigo-500",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={18} />,
      color: "text-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={18} />,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="app-container">
      {/* <div className="fixed top-24 right-8 z-40 hidden lg:block">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-3 shadow-lg">
          <div className="flex flex-col gap-2">
            {[
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "education", label: "Education" },
              { id: "achievements", label: "Certifications" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-gray-900 dark:bg-gray-800 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <header className="mb-20 mt-16">
          <div className="flex lg:flex-row items-start gap-6 lg:gap-12">
            <div className="lg:w-2/3">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
                  Available for Opportunities
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Full-Stack Developer
                  <span className="block text-3xl md:text-4xl text-gray-500 dark:text-gray-400 mt-2">
                    Thinking, Building & Scaling
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4">
                  I build scalable web applications with modern technologies.
                  Passionate about creating impactful digital solutions for
                  startups, fintech, and product-based companies.
                </p>
              </div>

              {/* <div className="flex flex-wrap gap-3 mb-8">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-[6px] dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-blue-600 dark:text-blue-400">
                      {specialty.icon}
                    </div>
                    <div>
                      <p className="text-sm font-sm text-gray-900 dark:text-white">
                        {specialty.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="mb-12">
                <div className="flex flex-wrap gap-3">
                  {coreStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium cursor-pointer transition-transform"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      <span className="text-gray-900 dark:text-gray-100">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1a_LkV8XoM9zNEy9DHK9qY3x2VVPOov3c/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex hover:shadow-md hover:-translate-y-0.5 items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm"
                >
                  <FileText size={16} />
                  View Resume
                </a>

                <a
                  href="mailto:sah904582@gmail.com"
                  className=" shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Mail size={16} />
                  Contact Me
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/IshaSah24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishaxsah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mx-auto">
                  <img
                    src={profile}
                    alt="Isha Sah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
                  <div className="text-sm">
                    <p className="text-gray-500 dark:text-gray-400">Based in</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Alipurduar, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="experience" className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Briefcase
                className="text-blue-600 dark:text-blue-400"
                size={16}
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h2>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Focus: Product Development & Startups
            </span>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const logoImage = getLogoImage(exp.icon);
              return (
                <div key={index} className="relative group">
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 group-last:hidden"></div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-[6px] bg-gray-800 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
                        {logoImage ? (
                          <img
                            src={logoImage}
                            alt={exp.company}
                            className="w-20 h-14 object-contain rounded-[6px]"
                          />
                        ) : (
                          <Briefcase size={14} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {expandedExperience.includes(index) && (
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <CheckCircle
                                size={16}
                                className="text-green-500 mt-0.5 flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <button
                        onClick={() => toggleExperience(index)}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        {expandedExperience.includes(index) ? (
                          <>
                            <ChevronUp size={16} />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} />
                            View Details
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="skills" className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Expertise across the full stack with focus on scalable product
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-xl">{skill.icon}</div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="mb-20">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Product-focused development
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Building scalable products with modern architectures and best
              practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
<div
  key={index}
  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
>
  {/* Project Image (TOP) */}
  <div className="relative h-48 w-full overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Card Content */}
  <div className="p-6">
    {/* Title + Icons */}
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <div className="flex items-center gap-3 text-gray-500">
        {project.demo && (
          <a href={project.demo} target="_blank">
            <ExternalLink size={18} />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank">
            <Github size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
      {project.description}
    </p>

    {/* Technologies */}
    <p className="text-xs text-gray-500 mb-2">Technologies</p>
    <div className="flex items-center gap-3 mb-6">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
        ● All Systems Operational
      </span>

      <a
        href={project.demo}
        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1"
      >
        View Details →
      </a>
    </div>
  </div>
</div>

              </div>
            ))}
          </div>
        </section>
        <section id="coding-profiles" className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            GitHub Activity
          </h2>

          <GitHubCard />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 mt-24">
          <section id="education">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <School
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Bachelor of Computer Application (BCA)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dooars Academy of Technology and Management
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    2022 – 2025 · Alipurduar, India
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Academic Performance
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      CGPA: 8.9/10
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Ranked 1st in BCA batch · Top 1% performer
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="achievements">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Award
                          size={18}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full">
                            {cert.badge}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="about" className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Full-stack developer with expertise in building scalable products
              for startups and enterprise clients. Passionate about clean
              architecture, performance optimization, and creating user-centric
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Development Philosophy
                </h3>
                <div className="space-y-4">
                  {[
                    "Focus on scalability and maintainability from day one",
                    "Implement robust testing and CI/CD pipelines",
                    "Prioritize performance and user experience",
                    "Stay current with emerging technologies and best practices",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle
                          size={14}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Available For
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Full-time Remote Roles",
                    "Startup Consulting",
                    "Fintech Projects",
                    "Product Development",
                    "Technical Architecture",
                    "Team Leadership",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ArrowRight
                        size={14}
                        className="text-blue-600 dark:text-blue-400"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Experience", value: "7+ Months" },
                    { label: "Projects", value: "10+" },
                    { label: "Technologies", value: "15+" },
                    { label: "Availability", value: "Immediate" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Work Preference
                </h3>
                <div className="space-y-3">
                  {[
                    "Remote-first companies",
                    "Product-based startups",
                    "Fintech/SaaS focus",
                    "Agile/Scrum teams",
                  ].map((pref, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {pref}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Interested in collaborating? I'm currently available for new
              opportunities and would love to discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:sah904582@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      sah904582@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Alipurduar, West Bengal, India
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Open to remote positions worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-4">
                  <a
                    href="mailto:sah904582@gmail.com"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>
                  <a
                    href="https://linkedin.com/in/isha-sah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Build Together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm particularly interested in:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Product development for early-stage startups",
                  "Fintech and payment system integrations",
                  "Scalable SaaS applications",
                  "Technical consulting for remote teams",
                ].map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 flex items-center justify-center">
                      <CheckCircle
                        size={12}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-blue-100 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Response time: Typically within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Isha Sah. Crafted for
                product-focused opportunities.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://github.com/ishasah",
                    label: "GitHub",
                    icon: <Github size={16} />,
                  },
                  {
                    href: "https://linkedin.com/in/isha-sah",
                    label: "LinkedIn",
                    icon: <Linkedin size={16} />,
                  },
                  {
                    href: "mailto:sah904582@gmail.com",
                    label: "Email",
                    icon: <Mail size={16} />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full px-4 py-3 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode size={16} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
            </div>
            <span className="text-gray-300 dark:text-gray-600 px-2">|</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleTheme("light")}
                className={`p-2 rounded-full transition-colors ${
                  theme === "light"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
                aria-label="Light theme"
              >
                <Sun size={16} />
              </button>

              <button
                onClick={() => toggleTheme("dark")}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
                aria-label="Dark theme"
              >
                <Moon size={16} />
              </button>

              <button
                onClick={() => toggleTheme("eyecare")}
                className={`p-2 rounded-full transition-colors ${
                  theme === "eyecare"
                    ? "bg-amber-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-amber-500"
                }`}
                aria-label="Eye care theme"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ChatBot />
    </div>
  );
}

export default App;
