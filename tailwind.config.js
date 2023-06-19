/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#166534",
        "light-green": "#16a34a",
        "v-dark-green": "#052e16",
        green: "#22c55e",
        "grey-white": "#f5f5f5",
        dark: "#1e293b",
        background: "#f1f5f9"

      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "dashboard-card": "0px 2px 2px 2px rgba(0, 0, 0, 0.6)",

      },
    },
  },
  plugins: [],
}

