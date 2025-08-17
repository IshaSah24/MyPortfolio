import { motion } from "framer-motion";
import rocketImg from "../assets/rocket1.png";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-[25rem] pb-[18rem] text-gray-500 px-6 gap-10">
    

      <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex justify-center items-center bg-transparent">
        <motion.img
          src={rocketImg}
          alt="Rocket"
          className="opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          bounce: 0.6,
        }}
        className="max-w-3xl text-center"
      >
        <div className=" relative heading pl-8 w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-center text-gray-600 mb-4">
            <span className="  text-gray-600 font-extrabold">About</span> Me
          </h1>
          <div className="light w-[10rem] h-[10rem] opacity-[.4] -z-1 rounded-full absolute top-[-3rem] blur-[50px] right-[1rem] bg-blue-500"></div>
        </div>

        <div className="mb-10">
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <p className="max-w-5xl mx-auto pt-16 pl-16 text-lg md:text-xl leading-relaxed text-gray-700">
          I am a passionate Full Stack Developer specializing in the MERN stack.
          With experience in <span className="font-semibold">React.js</span> and{" "}
          <span className="font-semibold">Next.js</span>, I have a keen interest
          in <span className="font-semibold">Full Stack Development</span> and{" "}
          <span className="font-semibold">DevOps</span>. I build responsive,
          scalable web applications, focusing on clean code, intuitive design,
          and performance. Constantly learning, I stay up to date with the
          latest technologies to deliver better, faster solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
