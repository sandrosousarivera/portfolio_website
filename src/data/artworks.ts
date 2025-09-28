export interface Artwork {
  id: string;
  title: string;
  description: string;
  category: "painting" | "digital" | "photography" | "sculpture" | "mixed";
  year: number;
  dimensions?: string;
  medium?: string;
  images: {
    thumbnail: string;
    gallery: string;
    fullsize: string;
    additional?: string[];
  };
  tags: string[];
  available: boolean;
  price?: number;
  featured: boolean;
  createdAt: string;
}

export interface ArtCategory {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  artworkCount: number;
}

// Datos de ejemplo - aquí pondrás tus obras reales
export const artCategories: ArtCategory[] = [
  {
    id: "painting",
    name: "Paintings",
    description: "Oil and acrylic paintings exploring color and form",
    coverImage: "https://via.placeholder.com/600x400?text=Paintings",
    artworkCount: 12,
  },
  {
    id: "digital",
    name: "Digital Art",
    description: "Digital creations and experimental compositions",
    coverImage: "https://via.placeholder.com/600x400?text=Digital+Art",
    artworkCount: 8,
  },
  {
    id: "photography",
    name: "Photography",
    description: "Capturing moments and perspectives through the lens",
    coverImage: "https://via.placeholder.com/600x400?text=Photography",
    artworkCount: 15,
  },
];

export const artworks: Artwork[] = [
  // Ejemplo de obras - reemplaza con tus datos reales
  {
    id: "abstract-sunset-001",
    title: "Abstract Sunset",
    description:
      "A vibrant exploration of color and light inspired by Mediterranean sunsets",
    category: "painting",
    year: 2024,
    dimensions: "80x60 cm",
    medium: "Oil on canvas",
    images: {
      thumbnail:
        "https://via.placeholder.com/300x300?text=Abstract+Sunset+Thumb",
      gallery:
        "https://via.placeholder.com/800x600?text=Abstract+Sunset+Gallery",
      fullsize:
        "https://via.placeholder.com/1200x900?text=Abstract+Sunset+Full",
    },
    tags: ["abstract", "colorful", "sunset", "oil"],
    available: true,
    price: 450,
    featured: true,
    createdAt: "2024-03-15",
  },
  {
    id: "digital-landscape-002",
    title: "Digital Landscape",
    description: "A futuristic interpretation of natural landscapes",
    category: "digital",
    year: 2024,
    medium: "Digital illustration",
    images: {
      thumbnail:
        "https://via.placeholder.com/300x300?text=Digital+Landscape+Thumb",
      gallery:
        "https://via.placeholder.com/800x600?text=Digital+Landscape+Gallery",
      fullsize:
        "https://via.placeholder.com/1200x900?text=Digital+Landscape+Full",
    },
    tags: ["digital", "landscape", "futuristic"],
    available: true,
    featured: false,
    createdAt: "2024-02-20",
  },
  {
    id: "portrait-study-003",
    title: "Portrait Study",
    description: "A detailed study of light and shadow in portraiture",
    category: "photography",
    year: 2024,
    medium: "Black and white photography",
    images: {
      thumbnail:
        "https://via.placeholder.com/300x300?text=Portrait+Study+Thumb",
      gallery:
        "https://via.placeholder.com/800x600?text=Portrait+Study+Gallery",
      fullsize: "https://via.placeholder.com/1200x900?text=Portrait+Study+Full",
    },
    tags: ["portrait", "black-white", "study"],
    available: false,
    featured: true,
    createdAt: "2024-01-10",
  },
];

// Funciones de utilidad
export const getArtworksByCategory = (category: string): Artwork[] => {
  return artworks.filter((artwork) => artwork.category === category);
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter((artwork) => artwork.featured);
};

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.id === id);
};
