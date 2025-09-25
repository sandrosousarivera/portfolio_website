import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

const FloatingContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición del botón "Get in Touch" original
      const heroSection = document.querySelector("#hero");
      const contactSection = document.querySelector("#contact");

      if (heroSection && contactSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const contactTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Mostrar el botón floating cuando:
        // 1. El hero section ya no esté visible (heroBottom < 100px del top)
        // 2. La sección de contacto aún no esté cerca (contactTop > 200px del viewport)
        const shouldShow = heroBottom < 100 && contactTop > 200;
        setIsVisible(shouldShow);
      }
    };

    // Ejecutar al montar y en scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
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
    <>
      {/* Solo visible en mobile */}
      <button
        onClick={scrollToContact}
        className={`
          fixed bottom-6 right-6 z-50
          w-16 h-16 
          bg-golden dark:bg-dark-golden 
          text-white 
          rounded-full 
          shadow-lg hover:shadow-2xl
          flex items-center justify-center
          transition-all duration-700 ease-out
          transform hover:scale-110 active:scale-95
          md:hidden
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-6 scale-75 pointer-events-none"
          }
        `}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          animation: isVisible
            ? "heartbeat 2s ease-in-out infinite 0.7s"
            : "none",
        }}
        aria-label="Contact me"
      >
        <Mail
          size={26}
          className={`
            drop-shadow-sm 
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        />
      </button>
    </>
  );
};

// Agregar los estilos CSS para la animación de latidos
const style = document.createElement("style");
style.textContent = `
  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.05);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(1);
    }
  }
`;
if (!document.querySelector("#heartbeat-animation")) {
  style.id = "heartbeat-animation";
  document.head.appendChild(style);
}

export default FloatingContactButton;
