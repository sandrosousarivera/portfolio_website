import React, { useState, useEffect } from "react";
import ArtNavbar from "../components/art/ArtNavbar";

const Gallery: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.body.classList.contains("art-dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const baseGradient = isDarkTheme ? "bg-dark-art-gradient" : "bg-art-gradient";

  return (
    <div className={`min-h-screen ${baseGradient}`}>
      <ArtNavbar />
      {/* Página vacía con nuevo diseño de galería artística */}
      <div className="pt-20">{/* Contenido aquí */}</div>
    </div>
  );
};

export default Gallery;
