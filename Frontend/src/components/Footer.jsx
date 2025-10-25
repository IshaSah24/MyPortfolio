import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c1e] text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Brand Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <h2
            style={{ letterSpacing: "4px", color: "#80949c" }}
            className="footer-text text-5xl font-bold"
          >
            Isha Sah
          </h2>
          <p className="text-sm pt-2 text-gray-400 opacity-60 max-w-[16rem]">
            Built with ❤️ by Isha. Sharing code, ideas, and projects.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-center md:text-left">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 text-xl justify-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            💻
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            📸
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright Section */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;