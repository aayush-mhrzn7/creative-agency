/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
      },
      fontWeight: {
        heading: "600",
      },
      colors: {
        MainbackgroundColor: "#faf2f0",
        primary: "#c25d51",
        secondary: "#dc958f",
        accent: "#d37369",
        shadowColor: "#D373691A",
      },
    },
  },
  plugins: [],
};
