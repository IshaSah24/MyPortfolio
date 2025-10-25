import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "../lib/Data"; // Ensure this file contains an array of link objects
import { Link } from "react-router-dom";
import AuthModal from "./auth/AuthModal";
import { useSelector } from "react-redux";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <nav className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center h-20">
            {/* Logo section */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className=" cursor-pointer left flex items-center pl-20 gap-2">
                <div className="circle w-[10em] h-[1.5rem] bg-blue-400 rounded-full absolute -z-[1] opacity-[.4] shadow-md blur-lg left-[6rem]"></div>
                <span className="text text-3xl font-medium opacity-[100%]">I</span>
                <h1 class="text-white logo text-xl opacity-[.6] hover:opacity-[1] transition  duration-100">
                  sha Sah
                </h1>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.ul
              className="flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  className="relative"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={`relative sm:px-4 px-2 py-2 transition duration-300
                    
                      ${
                        activeSection === link.name
                          ? "text-black hover:text-black"
                          : "text-grey-400 hover:text-white"
                      }
                      
                    `}
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
            </motion.ul>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-white">Welcome, {user.name}</span>
                  <motion.button
                    className="px-4 py-2 bg-red-600 text-white rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                  >
                    Logout
                  </motion.button>
                </div>
              ) : (
                <div className="auth flex items-center gap-4">
                  <motion.button
                    className="px-4 py-2 bg-[#13182e] text-white rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setAuthMode('signin');
                      setIsAuthModalOpen(true);
                    }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-gray-800 text-white rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setAuthMode('signup');
                      setIsAuthModalOpen(true);
                    }}
                  >
                    Sign Up
                  </motion.button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <ul className="py-4">
                    {links.map((link) => (
                      <motion.li
                        key={link.hash}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        <Link
                          to={link.hash}
                          className="block px-6 py-3 text-white"
                          onClick={() => {
                            setActiveSection(link.name);
                            setIsMenuOpen(false);
                          }}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
