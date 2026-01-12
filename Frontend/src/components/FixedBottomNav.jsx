import React from "react";
import { SiLeetcode, SiX } from "react-icons/si";
import { Sun, Moon, Eye, MousePointer2 } from "lucide-react";

const FixedBottomNav = ({ theme, toggleTheme }) => {
  const NavButton = ({ onClick, href, icon: Icon, label, active, color }) => {
    const Tag = href ? "a" : "button";

    return (
      <div className="relative group">
        <Tag
          onClick={onClick}
          href={href}
          target={href ? "_blank" : undefined}
          className={`
            relative flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-2xl 
            transition-all duration-500 ease-[box-bezier(0.23,1,0.32,1)]
            ${
              active
                ? "bg-white/10 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] border border-white/20"
                : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
            }
            hover:-translate-y-2 active:scale-90
          `}
        >
          <Icon size={18} className="relative z-10" />

          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 ${
              color || "bg-white"
            }`}
          />
        </Tag>

        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-2 py-1 bg-[#020816]/90 backdrop-blur-md border border-white/10 rounded-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300">
          <p className="text-[9px] font-mono text-white uppercase tracking-[0.2em] whitespace-nowrap">
            {label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <nav className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="relative group/nav">
          <div
            className="
            flex items-center gap-2 p-2 
            bg-white/[0.03] dark:bg-black/[0.05] 
            backdrop-blur-2xl 
            border border-white/10 
            rounded-[24px] 
            shadow-[0_20px_50px_rgba(0,0,0,0.3)]
            after:content-[''] after:absolute after:inset-0 after:rounded-[24px] after:p-[1px] after:bg-gradient-to-b after:from-white/10 after:to-transparent after:-z-10
          "
          >
            <div className="flex items-center">
              <NavButton
                href="https://leetcode.com/ishasah"
                label="LeetCode"
                icon={SiLeetcode}
                color="bg-orange-500"
              />
              <NavButton
                href="https://twitter.com/ishasah"
                label="Connect"
                icon={SiX}
                color="bg-blue-400"
              />
            </div>

            <div className="w-[1px] h-6 bg-white/10 mx-1" />

            <div className="flex items-center gap-2">
              <NavButton
                onClick={() => toggleTheme("light")}
                label="Standard"
                icon={Sun}
                active={theme === "light"}
              />
              <NavButton
                onClick={() => toggleTheme("dark")}
                label="Focus"
                icon={Moon}
                active={theme === "dark"}
              />
              <NavButton
                onClick={() => toggleTheme("eyecare")}
                label="Reading"
                icon={Eye}
                active={theme === "eyecare"}
                color="bg-amber-500"
              />
            </div>

            <div className="hidden lg:flex items-center px-3 border-l border-white/10 ml-1 group/cursor">
              <MousePointer2
                size={14}
                className="text-gray-500 group-hover/cursor:text-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FixedBottomNav;
