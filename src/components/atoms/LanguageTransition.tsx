import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const LanguageTransition: React.FC<LanguageTransitionProps> = ({
  children,
  className = "",
}) => {
  const { i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsTransitioning(true);

      // Transición muy sutil de 300ms
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
      }`}
    >
      {children}
    </div>
  );
};

export default LanguageTransition;
