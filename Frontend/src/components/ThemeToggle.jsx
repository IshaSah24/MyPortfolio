import { Moon, Sun, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = ({ theme, onThemeChange }) => {
  const themes = [
    { name: 'white', icon: <Sun size={18} /> },
    { name: 'black', icon: <Moon size={18} /> },
    { name: 'eyecare', icon: <Eye size={18} /> },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-surface-secondary border border-divider">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => onThemeChange(t.name)}
          className="relative p-2 rounded-full transition-colors text-text-secondary hover:text-text-primary"
        >
          {theme === t.name && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-surface-tertiary rounded-full"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{t.icon}</span>
        </button>
      ))}
    </div>
  );
};
