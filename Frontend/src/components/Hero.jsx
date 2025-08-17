import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import profile from "../assets/me.jpg";
import leetcode from "../icons/leetcode-48.png";
import twitter from "../icons/twitter.png";
import "../app.css";
import FloatingSkills from "./FloatingSkills";
import Footer from "./Footer";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#050B1E] text-white py-10 overflow-hidden">
      <FloatingSkills />
      <div className="relative w-40 h-40 flex justify-center items-center z-10">
        <motion.span
          className="absolute text-[32px] z-[100]"
          style={{
            top: "85px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 5, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          👋
        </motion.span>
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-gray-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute -top-[4rem] w-full flex justify-center z-0">
            <div className="relative flex flex-col items-center">
              <div className="absolute top-[40px] w-[175px] h-[170px] rounded-full opacity-[.1] blur-[30px] animate-spin-slow glow-circle"></div>
            </div>
          </div>
          <motion.img
            src={profile}
            alt="Profile"
            style={{
              scale: "1.8",
              objectPosition: "top",
              objectFit: "cover",
              width: "100%",
              height: "150px",
            }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className="mt-5 text-center flex gap-6 flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="mt-4 text-4xl font-semibold text-white">
          <span className="text-blue-500">Hello,</span>{" "}
          <Typewriter
            words={["I am Isha Sah", "Who love to code!"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <h2 className="mt-0 text-lg text-gray-600">DSA | RedHat | MERN</h2>
        <p className="mt-6 text-lg text-gray-700 max-w-[45rem] text-center px-4">
          Experienced in <strong>React.js</strong>, <strong>Node.js</strong>,
          and the
          <strong> RedHat</strong>, with growing interest in{" "}
          <strong>DevOps</strong>. Skilled in building scalable apps, designing
          RESTful APIs, Focused on clean, secure, and maintainable web
          solutions.
        </p>

        <div className="mt-10 flex gap-4">
          <motion.button
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            className="px-6 py-2 border border-white text-white rounded-lg shadow-md hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <div className="flex gap-8 text-3xl fixed flex-col right-0 px-6 py-8 bg-slate-700 shadow-lg rounded-tl-[16px] rounded-bl-[16px] z-10">
        <motion.a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition"
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-blue-400 transition"
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/ishasah850/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-blue-600 transition"
        >
          <img src={leetcode} alt="LeetCode Profile" className="w-8" />
        </motion.a>

        <motion.a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-blue-600 transition"
        >
          <img src={twitter} alt="Twitter Profile" className="w-8" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
