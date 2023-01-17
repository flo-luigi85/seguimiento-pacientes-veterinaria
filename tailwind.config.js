module.exports = {
  content: ["./src/**/*.{html,js.jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}