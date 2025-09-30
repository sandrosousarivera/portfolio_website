import React, { useState, useRef, useEffect } from "react";
import { Artwork } from "../../data/artworks";

interface MainGalleryProps {
  className?: string;
  maxItems?: number;
  images: Artwork[];
}

const MainGallery: React.FC<MainGalleryProps> = ({
  className = "",
  maxItems = 6,
  images,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Overlay modal refs/state (no browser Fullscreen API)
  const mediaRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayMediaRef = useRef<HTMLVideoElement | HTMLImageElement | null>(
    null
  );
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Lock body scroll while overlay is open
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOverlayOpen]);

  const openOverlay = (e?: React.SyntheticEvent) => {
    e && e.stopPropagation();
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    // pause video if present
    const v: any = overlayMediaRef.current;
    if (v && v.tagName && v.tagName.toLowerCase() === "video") {
      try {
        v.pause();
      } catch (_) {}
    }
    setIsOverlayOpen(false);
  };

  // Función para crear URLs de Cloudinary sin transformaciones forzadas
  const createThumbnailUrl = (publicId: string) => {
    return `https://res.cloudinary.com/${
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm"
    }/image/upload/w_400,f_auto,q_auto/${publicId}`;
  };

  // Función para crear URLs para vista completa
  const createFullUrl = (publicId: string) => {
    return `https://res.cloudinary.com/${
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm"
    }/image/upload/w_800,f_auto,q_auto/${publicId}`;
  };

  // Obtener obras limitadas
  const displayArtworks = images.slice(0, maxItems);

  const handleArtworkClick = (artwork: Artwork, index: number) => {
    if (selectedIndex === index) {
      // Si ya está seleccionada, cerrar
      setSelectedArtwork(null);
      setSelectedIndex(null);
    } else {
      // Seleccionar nueva obra
      setSelectedArtwork(artwork);
      setSelectedIndex(index);
    }
  };

  const handleClose = () => {
    setSelectedArtwork(null);
    setSelectedIndex(null);
  };

  // Función para determinar cuándo insertar la vista expandida
  const shouldInsertExpandedView = (index: number) => {
    if (selectedIndex === null) return false;

    // Calcular número de columnas según el breakpoint (usando valores fijos para SSR)
    const cols = 4; // Usamos 4 columnas como base, CSS se encarga del responsive
    const rowOfSelected = Math.floor(selectedIndex / cols);
    const rowOfCurrent = Math.floor(index / cols);
    const totalItems = displayArtworks.length;
    const isLastItem = index === totalItems - 1;

    // Insertar al final de la fila donde está la imagen seleccionada
    // O al final de toda la galería si la imagen seleccionada está en la última fila
    const shouldInsertAtEndOfRow =
      rowOfCurrent === rowOfSelected && (index + 1) % cols === 0;
    const shouldInsertAtEnd = isLastItem && rowOfCurrent === rowOfSelected;

    return shouldInsertAtEndOfRow || shouldInsertAtEnd;
  };

  return (
    <div className={`main-gallery py-8 md:py-12 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayArtworks.map((artwork: Artwork, index: number) => (
          <React.Fragment key={artwork.id}>
            <div className="flex flex-col h-full">
              <div
                className="relative cursor-pointer flex-1"
                onClick={() => handleArtworkClick(artwork, index)}
              >
                {artwork.type === "video" ? (
                  <video
                    src={`https://res.cloudinary.com/${
                      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm"
                    }/video/upload/w_400/${artwork.publicId}.mp4`}
                    className="w-full h-auto object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="metadata"
                    disableRemotePlayback
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget;
                      video.currentTime = 0;
                    }}
                    onTimeUpdate={(e) => {
                      const video = e.currentTarget;
                      if (video.currentTime >= 5) video.currentTime = 0;
                    }}
                    onEnded={(e) => {
                      const video = e.currentTarget;
                      video.currentTime = 0;
                      video.play();
                    }}
                  />
                ) : (
                  <img
                    src={createThumbnailUrl(artwork.publicId)}
                    alt={artwork.alt}
                    className="w-full h-auto"
                  />
                )}
              </div>
              <div className="w-full flex items-end">
                <span className="ml-2 mb-2 text-white text-sm font-semibold">
                  {artwork.title}
                </span>
              </div>
            </div>
            {/* Vista expandida - se inserta al final de la fila */}
            {shouldInsertExpandedView(index) && selectedArtwork && (
              <div className="col-span-full">
                <div className="animate-slideDown p-0 flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Lado izquierdo - Imagen */}
                    <div className="w-full lg:w-auto flex justify-center items-center">
                      {selectedArtwork.type === "video" ? (
                        <video
                          ref={(el: HTMLVideoElement | null) => {
                            mediaRef.current = el;
                            overlayMediaRef.current = el;
                          }}
                          src={`https://res.cloudinary.com/${
                            process.env.REACT_APP_CLOUDINARY_CLOUD_NAME ||
                            "dgmd7zrcm"
                          }/video/upload/w_800/${selectedArtwork.publicId}.mp4`}
                          className="w-full h-full max-w-full max-h-[40vh] lg:max-w-2xl lg:max-h-[80vh] object-contain cursor-zoom-in"
                          controls
                          preload="metadata"
                          onClick={(e) => {
                            e.stopPropagation();
                            openOverlay();
                          }}
                        />
                      ) : (
                        <img
                          ref={(el: HTMLImageElement | null) => {
                            mediaRef.current = el;
                            overlayMediaRef.current = el as any;
                          }}
                          src={createFullUrl(selectedArtwork.publicId)}
                          alt={selectedArtwork.alt}
                          className="w-full h-auto max-w-full lg:max-w-2xl object-contain cursor-zoom-in"
                          onClick={(e) => {
                            e.stopPropagation();
                            openOverlay();
                          }}
                        />
                      )}
                    </div>
                    {/* Lado derecho - Información y acciones */}
                    <div className="flex-1 min-w-0">
                      <div className="flex-1 h-auto">
                        {/* Título */}
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                          {selectedArtwork.title}
                        </h2>
                        {/* Metadatos */}
                        <div className="space-y-2 mb-6">
                          {selectedArtwork.year && (
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-medium">Año:</span>{" "}
                              {selectedArtwork.year}
                            </p>
                          )}
                          {selectedArtwork.medium && (
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-medium">Técnica:</span>{" "}
                              {selectedArtwork.medium}
                            </p>
                          )}
                          {selectedArtwork.category && (
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-medium">Categoría:</span>{" "}
                              {selectedArtwork.category}
                            </p>
                          )}
                        </div>
                        {/* Descripción */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Sobre esta obra
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm lg:text-base whitespace-pre-wrap">
                            {selectedArtwork.description}
                          </p>
                        </div>
                      </div>
                      {/* Precio y acciones */}
                      {/* ...eliminar sección de precio y botones... */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Fullscreen overlay with translucent blurred background */}
      {isOverlayOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center overlay-blur"
          onClick={() => closeOverlay()}
        >
          <div className="relative max-w-5xl w-full px-4">
            {/* Media inside overlay - no close button, clicking anywhere closes overlay */}
            <div className="flex items-center justify-center">
              {selectedArtwork?.type === "video" ? (
                <video
                  ref={(el: HTMLVideoElement | null) => {
                    overlayMediaRef.current = el;
                  }}
                  src={`https://res.cloudinary.com/${
                    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dgmd7zrcm"
                  }/video/upload/w_1600/${selectedArtwork?.publicId}.mp4`}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  ref={(el: HTMLImageElement | null) => {
                    overlayMediaRef.current = el as any;
                  }}
                  src={createFullUrl(selectedArtwork?.publicId || "")}
                  alt={selectedArtwork?.alt}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGallery;
