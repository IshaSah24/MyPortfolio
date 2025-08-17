import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Database, Server, Code, Github, 
  GitBranch, ChevronsUp, Laptop, Terminal, 
  Settings, Layers, FileCode, Monitor, Zap
} from 'lucide-react';

const SkillIcon = ({ 
  icon: Icon, 
  x, 
  y, 
  size = 24, 
  color = "rgba(255, 255, 255, 0.15)", 
  delay = 0,
  duration = 10,
  rotationDirection = 1
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        color
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        y: [0, -15, 0],
        rotate: [0, 360 * rotationDirection],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
        times: [0, 0.5, 1]
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
};


const TechLabel = ({ 
  text, 
  x, 
  y, 
  size = "text-sm", 
  color = "rgba(255, 255, 255, 0.2)", 
  delay = 0,
  duration = 8
}) => {
  return (
    <motion.div
      className={`absolute ${size} font-mono`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        color
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
    >
      {text}
    </motion.div>
  );
};


const ReactIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2c3 0 6.5 2.5 8 6-1.5 3.5-5 6-8 6s-6.5-2.5-8-6c1.5-3.5 5-6 8-6z" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const JavaScriptIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 12v6" />
    <path d="M8 18v-5" />
    <path d="M16 15c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2" />
  </svg>
);

const DockerIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5h18v14H3z" />
    <path d="M10 9h4v4h-4z" />
    <path d="M10 3v2" />
    <path d="M14 3v2" />
    <path d="M3 9h18" />
  </svg>
);

const TailwindIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.5C9 3.5 4 3.5 4 8c0 2.5 2 4.5 4 6.5 2-2 4-4 4-6.5z" />
    <path d="M16 11.5c-3-3-8-3-8 1.5 0 2.5 2 4.5 4 6.5 2-2 4-4 4-6.5z" />
  </svg>
);

const NodeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22l-8-4.5V7.5L12 3l8 4.5v10L12 22z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TypeScriptIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 13h4" />
    <path d="M10 17V9" />
    <path d="M16 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2h0" />
    <path d="M16 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h0" />
  </svg>
);

const MongoDBIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L8 8 12 22 16 8z" />
  </svg>
);

const FloatingSkills = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <SkillIcon icon={ReactIcon} x={15} y={20} size={32} delay={0} color="rgba(97, 218, 251, 0.15)" />
      <SkillIcon icon={JavaScriptIcon} x={75} y={30} size={28} delay={1.5} color="rgba(247, 223, 30, 0.15)" duration={12} rotationDirection={-1} />
      <SkillIcon icon={DockerIcon} x={25} y={70} size={35} delay={3} color="rgba(13, 150, 243, 0.15)" duration={15} />
      <SkillIcon icon={TailwindIcon} x={85} y={65} size={30} delay={2} color="rgba(56, 189, 248, 0.15)" duration={9} rotationDirection={-1} />
      <SkillIcon icon={NodeIcon} x={60} y={15} size={26} delay={4} color="rgba(131, 205, 41, 0.15)" duration={11} />
      <SkillIcon icon={Database} x={35} y={45} size={24} delay={1} color="rgba(255, 255, 255, 0.15)" duration={13} rotationDirection={-1} />
      <SkillIcon icon={Server} x={70} y={80} size={34} delay={2.5} color="rgba(255, 255, 255, 0.15)" duration={14} />
      <SkillIcon icon={Cpu} x={10} y={40} size={22} delay={3.5} color="rgba(255, 255, 255, 0.15)" duration={10} rotationDirection={-1} />
      <SkillIcon icon={Code} x={45} y={85} size={25} delay={4.5} color="rgba(255, 255, 255, 0.15)" duration={12} />
      <SkillIcon icon={Github} x={80} y={25} size={28} delay={5} color="rgba(255, 255, 255, 0.15)" duration={11} rotationDirection={-1} />
      <SkillIcon icon={GitBranch} x={20} y={60} size={26} delay={3.2} color="rgba(255, 255, 255, 0.15)" duration={13} />
      <SkillIcon icon={TypeScriptIcon} x={55} y={75} size={28} delay={2.3} color="rgba(49, 120, 198, 0.15)" duration={12} />
      <SkillIcon icon={MongoDBIcon} x={40} y={30} size={30} delay={4.2} color="rgba(76, 175, 80, 0.15)" duration={14} rotationDirection={-1} />
      <SkillIcon icon={Terminal} x={65} y={50} size={24} delay={1.8} color="rgba(255, 255, 255, 0.15)" duration={10} />
      <SkillIcon icon={Settings} x={30} y={10} size={22} delay={3.7} color="rgba(255, 255, 255, 0.15)" duration={11} rotationDirection={-1} />
      <SkillIcon icon={Layers} x={90} y={40} size={26} delay={2.1} color="rgba(255, 255, 255, 0.15)" duration={13} />
      <SkillIcon icon={FileCode} x={5} y={85} size={25} delay={4.9} color="rgba(255, 255, 255, 0.15)" duration={12} />
      <SkillIcon icon={Monitor} x={50} y={5} size={28} delay={1.3} color="rgba(255, 255, 255, 0.15)" duration={11} rotationDirection={-1} />
      <SkillIcon icon={Zap} x={95} y={90} size={24} delay={3.9} color="rgba(255, 255, 255, 0.15)" duration={10} />
      

      <TechLabel text="React" x={30} y={25} delay={1} />
      <TechLabel text="JavaScript" x={65} y={50} delay={2.5} />
      <TechLabel text="TypeScript" x={18} y={35} delay={3.7} />
      <TechLabel text="Docker" x={75} y={20} delay={1.8} />
      <TechLabel text="Tailwind CSS" x={40} y={75} delay={2.2} />
      <TechLabel text="Node.js" x={55} y={40} delay={3.4} />
      <TechLabel text="MongoDB" x={22} y={80} delay={4.1} />
      <TechLabel text="Express" x={80} y={60} delay={2.7} />
      <TechLabel text="Git" x={15} y={55} delay={1.3} />
      <TechLabel text="REST API" x={70} y={70} delay={4.6} />
      <TechLabel text="AWS" x={45} y={15} delay={2.9} />
      <TechLabel text="GraphQL" x={83} y={45} delay={3.2} />
      <TechLabel text="Redux" x={25} y={95} delay={1.6} />
      <TechLabel text="HTML5" x={60} y={90} delay={4.3} />
      <TechLabel text="CSS3" x={10} y={70} delay={2.4} />
    </div>
  );
};

export default FloatingSkills;