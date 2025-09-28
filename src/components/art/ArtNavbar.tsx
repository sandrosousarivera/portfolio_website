import React, { useState, useEffect } from "react";

const ArtNavbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("art-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("art-dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.remove("art-dark");
    } else {
      // Default to light mode for art portfolio
      setIsDarkMode(false);
      document.body.classList.remove("art-dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("art-dark");
      localStorage.setItem("art-theme", "dark");
    } else {
      document.body.classList.remove("art-dark");
      localStorage.setItem("art-theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Sandro Sousa
            </h1>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleTheme}
              className="text-white font-semibold hover:text-white/80 transition-colors duration-200"
            >
              {isDarkMode ? "LIGHT" : "DARK"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ArtNavbar;
