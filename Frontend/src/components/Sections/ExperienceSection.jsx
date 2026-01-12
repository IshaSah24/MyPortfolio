import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { experiences } from "../../lib/Data";
import nullclassLogo from "../../assets/logo/nullclass.png";
import hackathonLogo from "../../assets/logo/hackathon.png";
import networkLogo from "../../assets/logo/network.webp";

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState([]);

  const toggleExperience = (index) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getLogoImage = (iconName) => {
    const logoMap = {
      nullclass: nullclassLogo,
      hackathon: hackathonLogo,
      network: networkLogo,
    };
    return logoMap[iconName] || null;
  };

  return (
    <section id="experience" className="mb-16 lg:mb-20">
      <div className="flex items-center justify-between mb-8 lg:mb-10">
        <div className="flex items-center gap-3">
          <Briefcase className="text-blue-600 dark:text-blue-400" size={16} />
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden lg:inline">
          Focus: Product Development & Startups
        </span>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, index) => {
          const logoImage = getLogoImage(exp.icon);
          return (
            <div key={index} className="relative group mb-8 lg:mb-0">
              <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 group-last:hidden"></div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[6px] bg-gray-800 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
                    {logoImage ? (
                      <img
                        src={logoImage}
                        alt={exp.company}
                        className="w-16 h-12 lg:w-20 lg:h-14 object-contain rounded-[6px]"
                      />
                    ) : (
                      <Briefcase size={14} className="text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-1">
                      <div className="flex flex-start gap-4 items-center">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1 lg:mb-0">
                          {exp.position}
                        </h3>
                        <span>
                          <button
                            onClick={() => toggleExperience(index)}
                            className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400/60 hover:text-blue-700 dark:hover:text-blue-300 bg-transparant hover:dark:bg-gray-800 px-2 py-2 rounded-full"
                          >
                            {expandedExperience.includes(index) ? (
                              <>
                                <ChevronUp size={12} />
                              </>
                            ) : (
                              <>
                                <ChevronDown size={12} />
                              </>
                            )}
                          </button>
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-2">
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full self-start">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 lg:gap-2 mb-4">
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
                          <span className="text-sm lg:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
