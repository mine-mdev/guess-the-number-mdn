/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "js/main.js"],
  theme: {
    extend: {
      colors: {
        primaire: "#263238",
        secondaire: "#E9E9E9",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      fontSize: {
        titre: "60px",
        texte: "24px",
        titre_mobile: "24px",
        texte_mobile: "18px"
      }
    },
  },
  plugins: [],
}

