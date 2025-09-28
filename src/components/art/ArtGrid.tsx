import React from "react";
import { Artwork } from "../../data/artworks";
import ArtCard from "./ArtCard";

interface ArtGridProps {
  artworks: Artwork[];
  className?: string;
}

const ArtGrid: React.FC<ArtGridProps> = ({ artworks, className = "" }) => {
  if (artworks.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No artworks found
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      {artworks.map((artwork) => (
        <ArtCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default ArtGrid;
