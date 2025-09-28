// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LightIcon from "../../assets/light.svg";
import DarkIcon from "../../assets/dark.svg";
import LanguageToggle from "../atoms/LanguageToggle";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      document.body.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="bg-blue text-white px-6 py-4 dark:bg-dark-blue dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
          <div className="text-golden text-xl font-bold dark:text-dark-golden">
            Sandro Sousa
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-golden dark:hover:text-dark-golden transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/art"
              className="text-white hover:text-golden dark:hover:text-dark-golden transition-colors"
            >
              Art
            </Link>
          </div>

          <LanguageToggle />
          <button
            onClick={toggleTheme}
            className="hover:text-silver dark:hover:text-dark-silver transition"
          >
            <img
              src={isDarkMode ? LightIcon : DarkIcon}
              alt="Theme Toggle"
              className="w-6 h-6"
              style={{ filter: "invert(1)" }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
