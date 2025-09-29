import React, { useState, useEffect } from "react";
import ArtNavbar from "../components/art/ArtNavbar";
import MainGallery from "../components/art/MainGallery";
import { artworks } from "../data/artworks";

const ArtPortfolio: React.FC = () => {
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

      {/* Gallery Content */}
      <div className="pt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <MainGallery images={artworks} />
        </div>
      </div>
    </div>
  );
};

export default ArtPortfolio;
