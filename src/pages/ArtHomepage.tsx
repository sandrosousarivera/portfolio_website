import React from "react";
import { MainGallery } from "../components/art";
import { artworks } from "../data/artworks";

const ArtHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio Artístico
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Explora mi colección de obras de arte contemporáneo, donde la
            creatividad se encuentra con la innovación digital y las técnicas
            tradicionales.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Obras Destacadas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Una selección curada de mis trabajos más recientes y
              significativos
            </p>
          </div>

          {/* MainGallery Component */}
          <MainGallery className="mb-16" maxItems={8} images={artworks} />

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors">
              Ver Galería Completa
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre mi Arte
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Mi trabajo explora la intersección entre lo tradicional y lo
            contemporáneo, fusionando técnicas clásicas con herramientas
            digitales modernas. Cada pieza es una invitación a reflexionar sobre
            nuestra relación con el color, la forma y el espacio en el mundo
            actual.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArtHomepage;
