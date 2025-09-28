import React, { useEffect, useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

interface ArtItem {
  publicId: string;
  alt: string;
  type: "image" | "video";
}

interface ArtGalleryProps {
  images?: Array<{ src: string; alt: string }>;
  className?: string;
}

const VideoPreview: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-auto object-cover"
      autoPlay
      muted
      playsInline
      preload="metadata"
    />
  );
};

const ArtGallery: React.FC<ArtGalleryProps> = ({ images, className = "" }) => {
  // Configurar Cloudinary con variables de entorno
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm",
    },
  });

  // Función para crear imágenes optimizadas
  const createOptimizedImage = (publicId: string) => {
    return cld
      .image(publicId)
      .format("auto") // Optimización automática de formato
      .quality("auto") // Optimización automática de calidad
      .resize(auto().gravity(autoGravity()).width(800).height(600));
  };

  // Default images and videos with Cloudinary publicIds
  const defaultArtItems: ArtItem[] = [
    { publicId: "art/Untitled_6", alt: "Artwork 1", type: "image" },
    { publicId: "art/Untitled_9_2_Editar", alt: "Artwork 2", type: "image" },
    { publicId: "art/Untitled_9", alt: "Artwork 3", type: "image" },
    { publicId: "art/baura_KFC_1", alt: "Artwork 4", type: "image" },
    {
      publicId: "art/potenzia_pa_tu_carro_hola_1",
      alt: "Artwork 5",
      type: "image",
    },
    {
      publicId: "art/potenzia_pa_tu_carro_hola_2",
      alt: "Artwork 6",
      type: "image",
    },
    {
      publicId: "art/potenzia_pa_tu_carrojtgtd_Editar",
      alt: "Artwork 7",
      type: "image",
    },
    { publicId: "art/sin_titulo_4", alt: "Artwork 8", type: "image" },
    { publicId: "art/06_09_25", alt: "Video Artwork 1", type: "video" },
    { publicId: "art/07_09_25", alt: "Video Artwork 2", type: "video" },
  ];

  const artItems = images
    ? images.map((img) => ({
        publicId: "publicId" in img ? img.publicId : img.src,
        alt: img.alt,
        type: "image" as const,
      }))
    : defaultArtItems;

  return (
    <>
      {/* Gallery Grid - Masonry Layout */}
      <div
        className={`columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 ${className}`}
      >
        {artItems.map((item, index) => {
          return (
            <div key={index} className="break-inside-avoid">
              {item.type === "video" ? (
                <VideoPreview
                  src={`https://res.cloudinary.com/${
                    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm"
                  }/video/upload/${item.publicId}.mov`}
                  alt={item.alt}
                />
              ) : (
                <AdvancedImage
                  cldImg={createOptimizedImage(item.publicId as string)}
                  alt={item.alt}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArtGallery;
