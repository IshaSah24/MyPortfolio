import React from 'react';
import { Mail, MapPin, Linkedin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="mb-12 lg:mb-16">
      <div className="mb-8 lg:mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm lg:text-base">
          Interested in collaborating? I'm currently available for new
          opportunities and would love to discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4 lg:mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Mail
                  size={16}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Email
                </p>
                <a
                  href="mailto:sah904582@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm lg:text-base"
                >
                  sah904582@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <MapPin
                  size={16}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Location
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                  Alipurduar, West Bengal, India
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Open to remote positions worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:sah904582@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 lg:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm lg:text-base"
              >
                <Mail size={14} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/isha-sah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 lg:py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm lg:text-base"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Let's Build Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">
            I'm particularly interested in:
          </p>

          <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
            {[
              "Product development for early-stage startups",
              "Fintech and payment system integrations",
              "Scalable SaaS applications",
              "Technical consulting for remote teams",
            ].map((interest, index) => (
              <div key={index} className="flex items-center gap-2 lg:gap-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle
                    size={10}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                  {interest}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 lg:p-4 border border-blue-100 dark:border-gray-700">
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              Response time: Typically within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;