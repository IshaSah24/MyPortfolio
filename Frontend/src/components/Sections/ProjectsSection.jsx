import React from "react";
import { Github, ExternalLink, Play, ArrowUpRight, Zap } from "lucide-react";
import { projects } from "../../lib/Data";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiRazorpay,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const techIconMap = {
  React: <SiReact className="text-sky-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Razorpay: <SiRazorpay className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  Prisma: <SiPrisma className="text-white" />,
};

const ProjectsSection = () => {
  const handlePlayDemo = (e, demoUrl) => {
    e.preventDefault();
    if (demoUrl) window.open(demoUrl, "_blank");
  };

  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <h2 className=" flex flex-col text-md font-bold text-gray-500 tracking-tight">
            Featured
            <span className="text-3xl text-gray-100">Projects</span>
          </h2>
          {/* <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            A collection of  applications focusing on <span className="text-white">performance, scalability</span>, and seamless user experiences.
          </p> */}
        </div>
        {/* <div className="flex items-center gap-2 px-4 py-2 bg-[#020816] border border-white/5 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Selected Projects</span>
        </div> */}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-[#171717] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 h-full min-h-[400px]  bg-gradient-to-br from-[#020816] to-[#050e21] border border-white/10"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#020816]/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={(e) =>
                    handlePlayDemo(e, project.demoVideo || project.demo)
                  }
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  <Play size={16} fill="black" /> Watch Demo
                </button>
              </div>

              {/* Badge */}
              {/* <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold bg-[#020816]/80 backdrop-blur-md text-blue-400 border border-blue-500/20 rounded-full uppercase tracking-tighter">
                  {project.category || "Full Stack"}
                </span>
              </div> */}
            </div>

            {/* Content Container - Flex-1 makes this expand to fill space */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[11px] font-medium text-gray-300"
                    >
                      <span>{techIconMap[tag]}</span>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap size={8} className="text-green-500" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      Live
                    </span>
                  </div>
                  <a
                    href={project.demo || "#"}
                    target="_blank"
                    className="flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    Details <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
