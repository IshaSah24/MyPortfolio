import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SectionDivider = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center -mt-32 mb-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
<div className="relative w-14 h-[1px] bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 rounded-full opacity-20"></div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <ChevronDown className="mt-2 text-gray-500" size={24} />
      </motion.div>
    </motion.div>
  );
};

export default SectionDivider;
