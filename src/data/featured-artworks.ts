export interface FeaturedArtwork {
  id: string;
  publicId: string;
  title: string;
  alt: string;
  type: "image" | "video";
  description: string;
  medium?: string;
  year?: number;
  category?: string;
  price?: string;
  available?: boolean;
  tags?: string[];
}

export const featuredArtworks: FeaturedArtwork[] = [
  {
    id: "artwork-1",
    publicId: "Untitled_9_2_-Editar_eff0jv",
    title: "Untitled IX - Edited",
    alt: "Contemporary digital artwork",
    type: "image",
    description:
      "Una reinterpretación digital de formas orgánicas, donde la tecnología se encuentra con la naturaleza. Esta obra representa la evolución del arte en la era digital.",
    medium: "Arte digital",
    year: 2024,
    category: "Digital",
    price: "$800",
    available: true,
    tags: ["digital", "contemporary", "organic"],
  },
  {
    id: "artwork-2",
    publicId: "art/Untitled_9_2_Editar",
    title: "Untitled IX - Edited",
    alt: "Contemporary digital art piece",
    type: "image",
    description:
      "Una reinterpretación digital de formas orgánicas, donde la tecnología se encuentra con la naturaleza. Esta obra representa la evolución del arte en la era digital.",
    medium: "Arte digital",
    year: 2024,
    category: "Digital",
    price: "$800",
    available: true,
    tags: ["digital", "organic", "modern"],
  },
  {
    id: "artwork-3",
    publicId: "art/Untitled_9",
    title: "Untitled IX",
    alt: "Original composition with geometric elements",
    type: "image",
    description:
      "Una composición geométrica que juega con la percepción del espacio y la profundidad. Los elementos se entrelazan creando un diálogo visual dinámico.",
    medium: "Acrílico sobre papel",
    year: 2024,
    category: "Geometric",
    price: "$950",
    available: false,
    tags: ["geometric", "composition", "depth"],
  },
  {
    id: "artwork-4",
    publicId: "art/baura_KFC_1",
    title: "Commercial Vision - KFC",
    alt: "Commercial artwork for KFC brand",
    type: "image",
    description:
      "Trabajo comercial que fusiona el arte conceptual con el branding comercial. Una exploración de cómo el arte puede transformar la identidad visual de una marca.",
    medium: "Diseño digital",
    year: 2024,
    category: "Commercial",
    price: "Sold",
    available: false,
    tags: ["commercial", "branding", "digital"],
  },
  {
    id: "artwork-5",
    publicId: "art/potenzia_pa_tu_carro_hola_1",
    title: "Automotive Dreams I",
    alt: "Automotive themed artwork",
    type: "image",
    description:
      "Primera pieza de la serie 'Sueños Automotrices', donde exploro la relación emocional entre las personas y sus vehículos a través del arte visual.",
    medium: "Ilustración digital",
    year: 2024,
    category: "Automotive",
    price: "$600",
    available: true,
    tags: ["automotive", "dreams", "illustration"],
  },
  {
    id: "artwork-6",
    publicId: "art/sin_titulo_4",
    title: "Sin Título IV",
    alt: "Expressive abstract piece",
    type: "image",
    description:
      "Una expresión libre de emociones a través de formas abstractas y colores expresivos. Esta pieza invita al espectador a crear su propia interpretación.",
    medium: "Óleo sobre lienzo",
    year: 2024,
    category: "Expressionist",
    price: "$1,500",
    available: true,
    tags: ["expressionist", "abstract", "emotional"],
  },
];

// Función helper para obtener obra por ID
export const getArtworkById = (id: string): FeaturedArtwork | undefined => {
  return featuredArtworks.find((artwork) => artwork.id === id);
};

// Función helper para obtener obras por categoría
export const getArtworksByCategory = (category: string): FeaturedArtwork[] => {
  return featuredArtworks.filter((artwork) => artwork.category === category);
};

// Función helper para obtener obras disponibles
export const getAvailableArtworks = (): FeaturedArtwork[] => {
  return featuredArtworks.filter((artwork) => artwork.available);
};
