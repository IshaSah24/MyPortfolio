import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Sections/HeaderSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import CodingProfilesSection from "./components/Sections/CodingProfilesSection";
import EducationCertificationsSection from "./components/Sections/EducationCertificationsSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import FooterSection from "./components/FooterSection";
import FixedBottomNav from "./components/FixedBottomNav";

import ChatBot from "./components/ChatBot";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    document.documentElement.classList.remove("dark", "eyecare");
    if (savedTheme !== "light") {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("dark", "eyecare");
    if (newTheme !== "light") {
      document.documentElement.classList.add(newTheme);
    }
  };

  return (
    <div className="app-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 lg:py-8 pb-20 lg:pb-24">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <HeaderSection theme={theme} />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingProfilesSection />
        <EducationCertificationsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <FooterSection />

      <FixedBottomNav theme={theme} toggleTheme={toggleTheme} />

      <ChatBot />
    </div>
  );
}

export default App;
