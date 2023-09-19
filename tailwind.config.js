/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrain: ['JetBrains Mono', "monospace"],
        opensans: ['Open Sans', "sans"]
      }
    },
  },
  plugins: [],
}

