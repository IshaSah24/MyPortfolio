import { motion } from 'framer-motion';


export const SkillBadge = ({ name, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="px-3 py-1.5 bg-text-primary text-bg-primary text-sm rounded-lg font-mono font-medium cursor-default"
    >
      {name}
    </motion.span>
  );
};
