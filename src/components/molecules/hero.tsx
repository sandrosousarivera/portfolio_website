import React from "react";
import Button from "../atoms/Button";
import profileImg from "../../assets/profile1.jpeg";

const Hero: React.FC = () => {
  const scrollToContactForm = () => {
    // Priorizar el formulario específico, fallback a la sección
    const contactForm = document.querySelector("#contact-form");
    const contactSection = document.querySelector("#contact");
    
    const targetElement = contactForm || contactSection;
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Centra el formulario en la pantalla
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue to-bottle dark:from-dark-blue dark:to-dark-bottle pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="relative w-56 h-56 mx-auto mb-8 flex items-center justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full border-4 border-golden dark:border-dark-golden"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Owner & Web Developer
          </h1>
          <p className="text-lg text-silver max-w-2xl mx-auto">
            specializing in high-performance, user-focused applications. Trying
            to blend frontend excellence with strategic product thinking to
            deliver solutions that drive measurable business growth.
          </p>
          <div className="mt-8">
            <Button onClick={scrollToContactForm} className="bg-golden text-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
