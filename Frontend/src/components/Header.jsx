import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/Data"; // Ensure this file contains an array of link objects
import { Link } from "react-router-dom";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <header className="relative z-50 flex justify-center">
      <div className="top-header-logo flex justify-between items-center w-full h-full px-4 sm:px-8 absolute top-14 left-0">
        <div className=" cursor-pointer left flex items-center pl-20 gap-4">
          <div className="circle w-[10em] h-[1.5rem] bg-blue-400 rounded-full absolute -z-[1] opacity-[.4] shadow-md blur-lg left-[6rem]"></div>
          <span className="text text-5xl font-medium opacity-[100%]">I</span>
          <h1 class="text-white logo text-xl opacity-[1]">sha Sah</h1>
        </div>
        <div className="right">
          <div className="auth flex items-center gap-4">
            <div className="login">
              <motion.button
                className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                sign in
              </motion.button>
            </div>
            <div className="register">
              <motion.button
                className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-28 transform -translate-x-1/2 w-[46rem] h-[3.3rem] bg-[#26283480] shadow-md backdrop-blur-lg rounded-full "
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex w-full items-center justify-center h-full">
          <ul className="flex sm:gap-5 gap-3 text-xs sm:text-sm font-normal text-gray-400 flex-wrap sm:w-auto sm:flex-nowrap justify-center items-center">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="relative"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="relative sm:px-4 px-2 py-2 transition duration-300 hover:text-[#fff]"
                  to={link.hash}
                  onClick={() => setActiveSection(link.name)}
                >
                  {activeSection === link.name && (
                    <motion.span
                      className="absolute inset-0 mx-auto h-full w-full bg-[#dfe0e7] rounded-full -z-10 px-4"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
