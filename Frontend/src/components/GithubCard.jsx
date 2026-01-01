import {GitHubCalendar} from "react-github-calendar";
import { useEffect, useState } from "react";
function GithubCard() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    const detectTheme = () => {
      if (root.classList.contains("dark")) return "dark";
      if (root.classList.contains("eyecare")) return "eyecare";
      return "light";
    };

    setTheme(detectTheme());

    const observer = new MutationObserver(() => {
      setTheme(detectTheme());
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  const calendarTheme = {
    light: {
      colorScheme: "light",
      colors: [
        "hsl(214 32% 91%)",
        "hsl(221 83% 85%)",
        "hsl(221 83% 70%)",
        "hsl(221 83% 55%)",
        "hsl(221 83% 45%)",
      ],
    },

    dark: {
      colorScheme: "dark",
      colors: [
        "hsl(217 33% 17%)",
        "hsl(217 90% 30%)",
        "hsl(217 90% 40%)",
        "hsl(217 90% 55%)",
        "hsl(217 90% 65%)",
      ],
    },

    eyecare: {
      colorScheme: "light",
      colors: [
        "hsl(48 33% 85%)",
        "hsl(48 89% 75%)",
        "hsl(48 89% 65%)",
        "hsl(48 89% 55%)",
        "hsl(48 89% 45%)",
      ],
    },
  }[theme];

  return (
    <div className="border border-border rounded-xl p-5 bg-card hover-lift">
      <div className="flex items-center justify-between mb-3">

        <a
          href="https://github.com/IshaSah24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          View Profile →
        </a>
      </div>

      <div className="overflow-x-auto">
        <GitHubCalendar
          username="IshaSah24"
          blockSize={10}
          blockMargin={4}
          fontSize={12}
          colorScheme={calendarTheme.colorScheme}
          theme={{
            light: calendarTheme.colors,
            dark: calendarTheme.colors,
          }}
        />
      </div>
    </div>
  );
}
export default GithubCard;
