import React from "react";
import Navbar from "../components/molecules/navbar";
import Hero from "../components/molecules/hero";
import About from "../components/molecules/about";
import Projects from "../components/molecules/projects";
import Skills from "../components/molecules/skills";
import Contact from "../components/molecules/contact";
import Footer from "../components/molecules/footer";
import FloatingContactButton from "../components/atoms/FloatingContactButton";
import LanguageTransition from "../components/atoms/LanguageTransition";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-blue">
      <Navbar />
      <LanguageTransition>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </LanguageTransition>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Portfolio;
