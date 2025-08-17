import React from "react";
import { projectsData } from "../lib/Data";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <section className="min-h-screen projects-section flex flex-col justify-center py-10 md:py-20">
      <div className="mb-10 pl-[6rem] relative">
        <h1 className="text-[7rem] z-10 text-gray-500 uppercase font-bold">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-blue-600 mt-4"></div>
        <div className="light w-[70rem] h-[40rem] opacity-10 -z-10 rounded-full absolute top-[-8rem] blur-[80px] -left-[25rem] bg-blue-500"></div>
      </div>

      <div className="text-center w-full max-w-full">
        <div className="flex flex-col gap-8 overflow-hidden max-w-4xl mx-auto px-4 md:px-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-8 rounded-lg shadow-lg ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >

              <div className="flex-1 text-left">
                <h2 className=" text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-4 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800 text-gray-300 text-sm px-4 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


              <div className="relative flex-1">
                <div className="relative w-full h-60 rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
