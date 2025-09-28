import React, { useState, useEffect } from "react";
import ArtNavbar from "../components/art/ArtNavbar";

const ArtPortfolio: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.body.classList.contains("art-dark"));
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const baseGradient = isDarkTheme ? "bg-dark-art-gradient" : "bg-art-gradient";

  return (
    <div
      className={`min-h-screen relative transition-all duration-300 ease-out ${baseGradient}`}
    >
      <ArtNavbar />
      {/* Contenido de la página */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
              Art Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Explora mi universo creativo a través de diferentes medios y
              expresiones artísticas
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Tradición & Innovación
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed drop-shadow">
              La fusión perfecta entre técnicas tradicionales y enfoques
              contemporáneos. Cada obra cuenta una historia única, creada con
              pasión y dedicación.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Pintura</h3>
                <p className="text-white/70">
                  Óleos, acrílicos y técnicas mixtas
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Digital</h3>
                <p className="text-white/70">
                  Arte digital y manipulación fotográfica
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fotografía
                </h3>
                <p className="text-white/70">
                  Capturas artísticas del mundo que nos rodea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
                Inspiración
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow">
                Cada creación surge de la observación profunda del mundo que nos
                rodea, transformando lo cotidiano en algo extraordinario.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Naturaleza
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    La belleza infinita de los paisajes, la delicadeza de las
                    flores, la fuerza de los océanos... La naturaleza es mi musa
                    eterna.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Humanidad
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Las emociones, las historias, las conexiones invisibles que
                    nos unen. El arte como puente entre almas.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Abstracción
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Más allá de lo visible, explorando formas, colores y
                    texturas que expresan lo inefable.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Memoria
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Capturando momentos efímeros, preservando emociones,
                    recordando lo que el tiempo intenta borrar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Proceso Creativo
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed drop-shadow">
              Desde la primera idea hasta la obra final, cada paso es una
              oportunidad de descubrimiento y crecimiento artístico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">01</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Observación
                </h4>
                <p className="text-white/60 text-sm">
                  Mirar con atención, sentir con el alma
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">02</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Concepción
                </h4>
                <p className="text-white/60 text-sm">
                  Dejar que las ideas fluyan libremente
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">03</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Creación
                </h4>
                <p className="text-white/60 text-sm">
                  Dar forma a lo intangible
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">04</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Reflexión
                </h4>
                <p className="text-white/60 text-sm">
                  Aprender de cada trazo, cada color
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Call to Action */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Explora Mi Mundo
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed drop-shadow">
              Cada obra es una ventana a mi universo creativo. ¿Te atreves a
              entrar?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300">
                Ver Colecciones
              </button>
              <button className="bg-white text-art-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300">
                Contactar
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtPortfolio;
