export interface Artwork {
  id: string;
  publicId: string;
  title: string;
  description: string;
  year?: string;
  technique?: string;
  medium?: string;
  category?: string;
  tags?: string[];
  alt?: string;
  type?: "image" | "video";
}

export const artworks: Artwork[] = [
  {
    id: "obra-1",
    publicId: "Untitled_9_2_-Editar_eff0jv",
    title: "Obra de ejemplo",
    description: "Esta es una obra de ejemplo para la galería.",
    year: "2025",
    technique: "Óleo sobre lienzo",
    medium: "Óleo",
    category: "Pintura",
    tags: ["ejemplo", "galería"],
    alt: "Obra de ejemplo 1",
    type: "image",
  },
  {
    id: "obra-2",
    publicId: "Untitled_6_jgk25p",
    title: "Obra de ejemplo",
    description: "Esta es una obra de ejemplo para la galería.",
    year: "2025",
    technique: "Óleo sobre lienzo",
    medium: "Óleo",
    category: "Pintura",
    tags: ["ejemplo", "galería"],
    alt: "Obra de ejemplo 2",
    type: "image",
  },
  {
    id: "obra-3",
    publicId: "potenzia_pa_tu_carrojtgtd-Editar_rcjljd",
    title: "Obra de ejemplo",
    description: "Esta es una obra de ejemplo para la galería.",
    year: "2025",
    technique: "Óleo sobre lienzo",
    medium: "Óleo",
    category: "Pintura",
    tags: ["ejemplo", "galería"],
    alt: "Obra de ejemplo 3",
    type: "image",
  },
  {
    id: "obra-4",
    publicId: "IMG_0183_zpxpvu",
    title: "Obra de ejemplo",
    description: "Esta es una obra de ejemplo para la galería.",
    year: "2025",
    technique: "Óleo sobre lienzo",
    medium: "Óleo",
    category: "Pintura",
    tags: ["ejemplo", "galería"],
    alt: "Obra de ejemplo 4",
    type: "image",
  },
  {
    id: "obra-5",
    publicId: "07_-_09_-_25_vdptdh",
    title: "Obra de ejemplo",
    description: "Esta es una obra de ejemplo para la galería.",
    year: "2025",
    technique: "Óleo sobre lienzo",
    medium: "Óleo",
    category: "Pintura",
    tags: ["ejemplo", "galería"],
    alt: "Obra de ejemplo 5",
    type: "video",
  },
];
