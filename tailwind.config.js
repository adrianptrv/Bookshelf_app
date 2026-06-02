/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

