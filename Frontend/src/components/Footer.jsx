import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c1e] text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        

        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <h2
            style={{ letterSpacing: "4px", color: "#80949c" }}
            className="footer-text text-5xl "
          >
            Isha Sah
          </h2>
          <p className="text-sm pt-2 text-gray-400 opacity-60 max-w-[16rem]">
            Built with ❤️ by Isha. Sharing code, ideas, and projects.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-white transition">🐦</a>
          <a href="#" className="hover:text-white transition">💻</a>
          <a href="#" className="hover:text-white transition">📸</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
