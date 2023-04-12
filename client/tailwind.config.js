/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["poppins", "sans-serif"],
        bodyFont: ["montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
       

      },
      animation: {
        pop: "pop 3s ease-in-out",
      },
      keyframes: {
        pop: {
          '0%': {
            transform: 'scale(1,1)'
          },
          '50%': {
            transform: 'scale(1.1,1.1)'
          },'100%': {
            transform: 'scale(1,1)'
          }
        }},
      colors: {
        bgBody: "",
      },
    },
  },
  plugins: [],
};
