import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom"; // or HashRouter
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDevider";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen text-gray-950 bg-gray-200  bg-gradient-to-br from-gray-900 via-black to-gray-800 ">
        {/* Parent Container for the Background Elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
            aria-hidden="true"
          ></div>
          <div
            className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10">
          <Header />
          <Hero />
          <SectionDivider />
          <About />
          <MyProjects />
          <Contact />
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
