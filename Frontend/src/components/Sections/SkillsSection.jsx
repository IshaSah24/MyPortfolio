import React from "react";
import { skillCategories } from "../../lib/Data";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiAmazon,
  SiLinux,
  SiGithubactions,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const iconMap = {
  Code: <Code size={16} />,
  Database: <Database size={16} />,
  Cloud: <Cloud size={16} />,
  Tool: <Wrench size={16} />,

  SiReact: <SiReact className="text-[#61DAFB]" />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript className="text-[#3178C6]" />,
  SiJavascript: <SiJavascript className="text-[#F7DF1E]" />,
  SiTailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,

  // Backend
  SiNodedotjs: <SiNodedotjs className="text-green-500" />,
  SiPostgresql: <SiPostgresql className="text-blue-500" />,
  SiMongodb: <SiMongodb className="text-green-600" />,
  SiPrisma: <SiPrisma />,
  SiRedis: <SiRedis className="text-red-500" />,

  // Cloud & DevOps
  SiAmazon: <SiAmazon className="text-orange-400" />,
  SiLinux: <SiLinux />,
  SiGithubactions: <SiGithubactions />,
  SiDocker: <SiDocker className="text-blue-400" />,
  SiNginx: <SiNginx className="text-green-500" />,

  // Tools - VS Code replaced with existing Code icon
  SiGit: <SiGit className="text-orange-500" />,
  SiGithub: <SiGithub />,
  SiPostman: <SiPostman className="text-orange-400" />,
  Vscode: <Code size={20} className="text-blue-500" />,
  SiFigma: <SiFigma className="text-pink-500" />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-16 lg:mb-20">
      <div className="mb-8 lg:mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm lg:text-base">
          Expertise across the full stack with focus on scalable product
          development
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 lg:p-5"
          >
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                {iconMap[category.icon]}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">
                {category.title}
              </h3>
            </div>
            <div className="space-y-2 lg:space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-lg lg:text-xl">
                    {iconMap[skill.icon]}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
