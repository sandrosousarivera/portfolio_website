import React from "react";
import { Link } from "react-router-dom";
import { Artwork } from "../../data/artworks";
import { Eye, Calendar, Tag } from "lucide-react";

interface ArtCardProps {
  artwork: Artwork;
  className?: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ artwork, className = "" }) => {
  return (
    <Link
      to={`/art/piece/${artwork.id}`}
      className={`group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={artwork.images.gallery}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Available badge */}
        {artwork.available && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Available
            </span>
          </div>
        )}

        {/* Featured badge */}
        {artwork.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-golden dark:bg-dark-golden text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue dark:text-white mb-2 group-hover:text-golden dark:group-hover:text-dark-golden transition-colors">
          {artwork.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {artwork.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{artwork.year}</span>
          </div>

          {artwork.medium && (
            <span className="text-silver dark:text-dark-silver">
              {artwork.medium}
            </span>
          )}
        </div>

        {/* Tags */}
        {artwork.tags.length > 0 && (
          <div className="flex items-center space-x-1 mb-4">
            <Tag className="w-3 h-3 text-gray-400" />
            <div className="flex flex-wrap gap-1">
              {artwork.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {artwork.tags.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{artwork.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        {artwork.price && artwork.available && (
          <div className="text-right">
            <span className="text-lg font-bold text-golden dark:text-dark-golden">
              ${artwork.price}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ArtCard;
