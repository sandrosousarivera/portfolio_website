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
        "art-accent": "#d4af37", // Dorado elegante
        "art-muted": "#8a8a8a", // Gris medio
        "art-dark": "#000000", // Negro absoluto
        // Blanco puro y variaciones basadas en #e1f0f0
        "art-white": {
          DEFAULT: "#e1f0f0",
          50: "#fbfefe",
          100: "#f7fcfc",
          200: "#e9f6f6",
          300: "#d9efee",
          400: "#cfe7e6",
          500: "#b7cbc9",
        },
        "white-pure": "#ffffff",
      },
      backgroundImage: {
        // Gradiente principal del portfolio artístico (variaciones de #e1f0f0)
        "art-gradient":
          "radial-gradient(at top left, #ffffff 0%, #f7fcfc 10%, #e1f0f0 30%, transparent 65%), \
     radial-gradient(at top right, #ffffff 0%, #f7fcfc 12%, #d9efee 32%, transparent 65%), \
     radial-gradient(at bottom left, #ffffff 0%, #f7fcfc 12%, #b7cbc9 32%, transparent 65%), \
     radial-gradient(at bottom right, #ffffff 0%, #fbfefe 10%, #e1f0f0 30%, transparent 65%), \
     radial-gradient(circle at center, #cfe7e6 12%, transparent 85%)",

        // Versión oscura con acentos más vivos y mayor profundidad
        "dark-art-gradient":
          "radial-gradient(at top left, #163e55 0%, #123846 28%, transparent 62%), \
     radial-gradient(at top right, #1a4a66 0%, #133b4f 28%, transparent 62%), \
     radial-gradient(at bottom left, #153642 0%, #0b232b 28%, transparent 62%), \
     radial-gradient(at bottom right, #0f2730 0%, #000811 28%, transparent 62%), \
     radial-gradient(circle at center, #000a0f 10%, transparent 90%)",
      },
    },
  },
  plugins: [],
};
