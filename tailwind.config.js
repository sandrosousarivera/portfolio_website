/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Usa la clase 'dark' para activar el tema oscuro
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Atkinson Hyperlegible Mono"', "sans-serif"],
      },
      colors: {
        // Tema claro - Portfolio desarrollador
        golden: "#F6B62D",
        carmin: "#9D2D2F",
        silver: "#B6B4B5",
        bottle: "#6B8994",
        blue: "#303E51",

        // Tema oscuro - Portfolio desarrollador
        "dark-golden": "#F19D05",
        "dark-carmin": "#81020F",
        "dark-blue": "#0B1025",
        "dark-bottle": "#2D6370",
        "dark-silver": "#6E8FB0",

        // Paleta de colores para Portfolio Artístico
        "art-primary": "#1a1a1a", // Negro profundo
        "art-secondary": "#f8f8f8", // Blanco casi puro
        "art-accent": "#d4af37", // Dorado elegante
        "art-muted": "#8a8a8a", // Gris medio
        "art-light": "#ffffff", // Blanco puro
        "art-dark": "#000000", // Negro absoluto
      },
      backgroundImage: {
        // Gradiente principal del portfolio artístico (Light con más contraste)
        "art-gradient":
          "radial-gradient(at top left, #ffffff 0%, #e8f3f3 35%, transparent 70%), \
     radial-gradient(at top right, #eef7f7 0%, #cbe0e1 35%, transparent 70%), \
     radial-gradient(at bottom left, #d9eaea 0%, #bed5d5 35%, transparent 70%), \
     radial-gradient(at bottom right, #cbe0e1 0%, #97adad 35%, transparent 70%), \
     radial-gradient(circle at center, #2b3a3a 15%, transparent 80%)",

        // Versión oscura con más contraste
        "dark-art-gradient":
          "radial-gradient(at top left, #506b85 0%, #2f4254 35%, transparent 70%), \
     radial-gradient(at top right, #5c7a95 0%, #34495e 35%, transparent 70%), \
     radial-gradient(at bottom left, #3e5469 0%, #1c2a36 35%, transparent 70%), \
     radial-gradient(at bottom right, #2f4254 0%, #141b22 35%, transparent 70%), \
     radial-gradient(circle at center, #0a0f14 15%, transparent 85%)",
      },
    },
  },
  plugins: [],
};
