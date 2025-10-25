import React from "react";
import { projectsData } from "../lib/Data";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-[#070A10] text-white relative overflow-hidden">
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] opacity-20 blur-[180px] bg-blue-600 rounded-full -z-10"></div>

      <div className="mb-20 text-center relative">
        <h1 className=" relative text-5xl md:text-6xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          My Projects
        <motion.div 
              className="w-32 absolute right-[8rem] h-1.5 bg-gradient-to-r from-[#17255412] via-[#0b51ac] to-[#0d2d4800] mt-6 mx-auto lg:mx-0 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1.5, delay: 1 }}
            ></motion.div>
        </h1>
      </div>

      <div className="grid gap-12 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group flex flex-col bg-gradient-to-br from-[#0D111A]/80 to-[#1A1F2E]/80 rounded-2xl shadow-lg p-8 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition duration-500 border border-gray-700/40 backdrop-blur-xl"
          >
            <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
