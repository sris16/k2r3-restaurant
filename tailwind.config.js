/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* =========================
         🎨 LUXURY COLOR SYSTEM
      ========================== */
      colors: {
        gold: "#d4af37",
        luxuryBlack: "#0f0f0f",
        warmBrown: "#6b4f2a",
        cream: "#f8f5f0",
      },

      /* =========================
         🔤 PREMIUM TYPOGRAPHY
      ========================== */
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },

      /* =========================
         ✨ LOADING ANIMATION
      ========================== */
      animation: {
        fadeScale: "fadeScale 1.2s ease-out forwards",
      },

      keyframes: {
        fadeScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};