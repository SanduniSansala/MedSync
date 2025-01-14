/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lors: {
          "primary-color": "#007E85",
          "secondary-color": "#6EAB36",
          "background-color": "#ECECEC",
      }
    },
  },
  plugins: [],
}
}
