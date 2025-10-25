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
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
          {/* Improved background effects */}
          <div className="fixed inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px] opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px] opacity-50 animate-pulse delay-1000"></div>
          </div>

          {/* Main content with smooth scroll */}
          <div className="relative z-10 scroll-smooth">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Hero />
              <SectionDivider />
              <About />
              <SectionDivider />
              <MyProjects />
              <SectionDivider />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
