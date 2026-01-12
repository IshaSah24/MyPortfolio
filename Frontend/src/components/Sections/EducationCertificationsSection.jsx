import React from "react";
import { School, Trophy, Award, Rocket, Target } from "lucide-react";
import { certifications } from "../../lib/Data";
import { achievements } from "../../lib/Data";

const EducationCertificationsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16 lg:mb-20">
      <div className="flex  flex-col">
        <section id="education">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <School className="text-blue-600 dark:text-blue-400" size={20} />
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 lg:p-6">
              <div className="mb-4">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                  Dooars Academy of Technology and Management
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm mt-1">
                  2022 – 2025 · Alipurduar, India
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 lg:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
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
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-blue-600 dark:text-blue-400" size={20} />
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 lg:p-3">
              <div className="space-y-3 lg:space-y-0">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0`}
                    >
                      <achievement.icon
                        size={14}
                        className={achievement.color}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {achievement.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="certifications">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-blue-600 dark:text-blue-400" size={20} />
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 lg:p-6">
            <div className="space-y-3 lg:space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Award
                      size={16}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full self-start">
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
  );
};

export default EducationCertificationsSection;
