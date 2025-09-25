import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === "es" ? "EN" : "ES";

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center space-x-1 px-3 py-2 
        text-sm font-medium text-white dark:text-white
        hover:text-golden dark:hover:text-dark-golden
        transition-colors duration-300
        rounded-lg hover:bg-white/10 dark:hover:bg-gray-800
      "
      aria-label={`Switch to ${i18n.language === "en" ? "Spanish" : "English"}`}
    >
      <Globe size={16} />
      <span>{currentLang}</span>
    </button>
  );
};

export default LanguageToggle;
