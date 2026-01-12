import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/IshaSah24",
      label: "GitHub",
      icon: <Github size={18} />,
    },
    {
      href: "https://www.linkedin.com/in/IshaxSah",
      label: "LinkedIn",
      icon: <Linkedin size={18} />,
    },
    {
      href: "mailto:sah904582@gmail.com",
      label: "Email",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer className="bg-[#020816] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                Available for new opportunities
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              © {currentYear} <span className="text-white">Isha Sah</span>. All
              rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-[#020816] text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-600 uppercase tracking-widest">
            Developed with <span className="text-gray-400">React</span> &{" "}
            <span className="text-gray-400">Tailwind</span>
          </p>
          <a
            href="/"
            className="group flex items-center gap-2 text-[11px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
          >
            Back to top{" "}
            <ArrowUpRight
              size={12}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
