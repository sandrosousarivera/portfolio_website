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
        // Gradiente principal del portfolio artístico
        "art-gradient":
          "linear-gradient(180deg, rgba(26, 26, 26, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        "art-gradient-reverse":
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(26, 26, 26, 1) 100%)",
        "art-subtle":
          "linear-gradient(180deg, rgba(248, 248, 248, 0.95) 0%, rgba(255, 255, 255, 1) 100%)",
      },
    },
  },
  plugins: [],
};
