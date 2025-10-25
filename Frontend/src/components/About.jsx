import { motion, useScroll, useTransform } from "framer-motion";
import rocketImg from "../assets/rocket1.png";
import Starfield from "./Starfield";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-[#070A10] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-600/20 blur-[180px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-purple-600/20 blur-[160px] rounded-full -z-10"></div>
      <Starfield/>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
      >
        {/* Left Side - Interactive Avatar/Rocket */}
        <motion.div
          variants={itemVariants}
          style={{ y }}
          className="relative flex-shrink-0 flex justify-center"
        >
          <motion.div
            className="relative w-80 h-80 lg:w-96 lg:h-96"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Main Orb Container */}
            <motion.div
              className="relative w-full h-full rounded-full backdrop-blur-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 shadow-[0_0_80px_rgba(59,130,246,0.4)] border border-blue-400/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              {/* Inner Rocket/Avatar */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-[#000000c9] to-[#00000]backdrop-blur-xl flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Rocket SVG */}
                <motion.svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <defs>
                    <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
                      <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M60 10 L75 35 L70 40 L60 35 L50 40 L45 35 Z M45 45 L75 45 L70 75 L50 75 Z M55 80 L60 95 L65 80 Z"
                    fill="url(#rocketGrad)"
                  />
                  <circle cx="60" cy="55" r="8" fill="#fff" opacity="0.9" />
                  <circle cx="60" cy="55" r="4" fill="#3B82F6" />
                </motion.svg>
              </motion.div>

              {/* Orbiting Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                >
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    style={{
                      transform: `translate(-50%, -${100 + i * 20}px)`,
                    }}
                  ></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={itemVariants}
          className="flex-1 max-w-3xl text-center lg:text-left"
        >
          {/* Main Heading with Typewriter Effect */}
          <motion.div className="mb-20 relative uppercase z-10">
          <h1
  className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#5e6680] via-[#5e6680] to-gray-950 bg-clip-text text-transparent"
>
  About Me
</h1>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-[#17255412] via-[#0b51ac] to-[#0d2d4800] mt-6 mx-auto lg:mx-0 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1.5, delay: 1 }}
            ></motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="mb-[16rem] relative bg-black/20 backdrop-blur-2xl p-8 lg:p-10 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-8"
            whileHover={{
              borderColor: "rgba(59,130,246,0.4)",
              boxShadow: "0 0 80px rgba(59,130,246,0.2)",
            }}
          >
            <motion.p
              className="text-gray-300 text-lg lg:text-xl opacity-[.4] leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              I'm a passionate developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to push boundaries. I specialize in building dynamic web applications that are not only functional but also visually appealing.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;