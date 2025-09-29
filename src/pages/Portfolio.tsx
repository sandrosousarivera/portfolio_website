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
import MainGallery from "../components/art/MainGallery";
import { artworks } from "../data/artworks";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-blue">
      <Navbar />
      <LanguageTransition>
        <Hero />
        <About />
        <Projects />

        {/* Art Gallery Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Galería de Arte
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explora mi trabajo artístico más reciente
              </p>
            </div>
            <MainGallery maxItems={6} images={artworks} />
            <div className="text-center mt-8">
              <a
                href="/art"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Ver Portfolio Completo
              </a>
            </div>
          </div>
        </section>

        <Skills />
        <Contact />
      </LanguageTransition>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Portfolio;
