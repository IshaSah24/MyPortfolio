import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        // Cursor blinking after text is complete
        const cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
      }
    };

    const delayTimeout = setTimeout(() => {
      typeText();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, delay]);

  return (
    <div className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
        <motion.span
          className="inline-block ml-1 w-1 bg-current"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
};

export default TypewriterText;