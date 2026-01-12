import React from "react";
import { FileText, Mail, Github, Linkedin } from "lucide-react";
import profile from "../../assets/profile/profile.png";

import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const HeaderSection = ({ theme }) => {
  const coreStack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ];

  const specialties = [
    {
      title: "Product Development",
      description:
        "End-to-end SaaS product development from concept to deployment",
    },
    {
      title: "Scalable Architecture",
      description: "Building scalable systems for high-growth startups",
    },
    {
      title: "Fintech Integration",
      description: "Payment processing and financial system integrations",
    },
    {
      title: "Remote Collaboration",
      description:
        "Experience in distributed team environments and remote workflows",
    },
  ];

  return (
    <header className="mb-20 mt-16">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
        <div className="lg:w-2/3">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
              Available for Opportunities
              <span className="relative flex-shrink-0 h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative top-[-4px] inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="block text-xl md:text-2xl font-mono text-gray-500 mt-2 font-normal">
                &lt;FullStackDevloper /&gt;
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-500 dark:text-gray-400 mt-2">
                Thinking, Building & Scaling
              </span>
            </h1>
            <p className="text-base lg:text-md text-gray-600 dark:text-gray-500 leading-relaxed max-w-2xl mb-4">
              I build scalable web applications with modern technologies. Have
              hands on 6+ months of Professional experience in developing web
              applications using{" "}
              <span className=" text-[10px] inline-flex items-center gap-1 px-2 py-0.5 border rounded-[20px] border-dashed border-gray-300 dark:border-gray-500/30 bg-gray-50 dark:bg-gray-800/40 font-medium text-gray-900 dark:text-gray-300">
                <SiNextdotjs className="text-black dark:text-white" />
                Next.js
              </span>{" "}
              <span className=" text-[10px] inline-flex items-center gap-1 px-2 py-0.5 border rounded-[20px] border-dashed border-blue-300 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 font-medium text-gray-900 dark:text-gray-300">
                <SiPostgresql className="text-blue-500" />
                PostgreSQL
              </span>{" "}
              <span className=" text-[10px] inline-flex items-center gap-1 px-2 py-0.5 border rounded-[20px] border-dashed border-blue-300 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 font-medium text-gray-900 dark:text-gray-300">
                <SiTypescript className="text-blue-600" />
                TypeScript
              </span>{" "}
              &{" "}
              <span className=" text-[10px] inline-flex items-center gap-1 px-2 py-0.5 border rounded-[20px] border-dashed border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-900/20 font-medium text-gray-900 dark:text-gray-300">
                <SiTailwindcss className="text-cyan-400" />
                Tailwind CSS
              </span>
              . I specialize in creating efficient, user-friendly solutions that
              drive business growth.
            </p>
          </div>
          {/* 
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {coreStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <a
              href="https://drive.google.com/file/d/1a_LkV8XoM9zNEy9DHK9qY3x2VVPOov3c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex hover:shadow-md hover:-translate-y-0.5 items-center gap-2 px-4 lg:px-5 py-2 lg:py-3 rounded-[8px] bg-gray-900 dark:bg-[#D0D0D0] text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm text-sm lg:text-md"
            >
              <FileText size={12} />
              View Resume
            </a>

            <a
              href="mailto:sah904582@gmail.com"
              className="shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-3 border border-gray-300 dark:border-gray-700 rounded-[8px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm lg:text-md"
            >
              <Mail size={12} />
              Contact Me
            </a>
            <div className="flex items-center gap-2 lg:gap-3">
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

        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Animated background glow for depth */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-[2rem] blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>

            {/* Main Image Container */}
            <div className="relative w-40 h-40 lg:w-[14rem] lg:h-[15rem] rounded-[2rem] overflow-hidden border border-white/10 bg-[#020816] shadow-2xl">
              {/* Professional "Muted" look - Not fully B&W, but sophisticated */}
              <img
                src={profile}
                className="w-full h-full object-cover saturate-[0.2] hover:saturate-100 transition-all duration-700"
              />
            </div>

            {/* Engineering-style Location Badge */}
            <div className="absolute -bottom-4 -right-2 lg:-right-6 bg-[#020816]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl transition-transform group-hover:-translate-y-1">
              <div className="flex flex-col gap-1">
                <p className="text-[8px] font-mono font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Location
                </p>
                <p className="text-xs font-semibold text-white">
                  Alipurduar, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
