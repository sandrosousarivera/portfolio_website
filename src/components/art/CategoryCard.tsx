import React from "react";
import { Link } from "react-router-dom";
import { ArtCategory } from "../../data/artworks";
import { ArrowRight, Image } from "lucide-react";

interface CategoryCardProps {
  category: ArtCategory;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  className = "",
}) => {
  return (
    <Link
      to={`/art/gallery/${category.id}`}
      className={`group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={category.coverImage}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Image className="w-4 h-4 text-golden dark:text-dark-golden" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {category.artworkCount}{" "}
              {category.artworkCount === 1 ? "piece" : "pieces"}
            </span>
          </div>
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-golden dark:bg-dark-golden rounded-full p-2">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            {category.name}
          </h3>
          <p className="text-gray-200 text-sm line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Explore collection
          </span>
          <ArrowRight className="w-4 h-4 text-golden dark:text-dark-golden transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
