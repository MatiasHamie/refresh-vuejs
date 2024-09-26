/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // esto va a mano
  theme: {
    extend: {
      fontFamily: {
        // personalizado
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        // personalizado
        "70/30": "70% 28%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
