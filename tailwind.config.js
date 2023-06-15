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
        dark: "#1e293b"

      }
    },
  },
  plugins: [],
}

