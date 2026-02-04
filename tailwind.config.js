import '@tailwindcss/postcss/nesting'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E7B8F',
        secondary: '#FDB913',
        accent: '#4ECDC4',
      },
    },
  },
  plugins: [],
}
