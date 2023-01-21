/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // override default
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      
      "2xl": "1368px",
      // => @media (min-width: 1368px) { ... }
      "3xl": "1440px",
      // => @media (min-width: 1368px) { ... }
    },

    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      // screens: {
      //   '3xl': '1600px',
      // }
      // SCSS
      // --------------------------------------------------------
      colors: {
        primary: {
          50: "#F7E9E9",
          100: "#EDD2D3",
          200: "#DBA5A7",
          300: "#CA787A",
          400: "#B84B4E",
          500: "#A61E22",
          600: "#7D171A",
          700: "#530F11",
          800: "#2A0809",
          900: "#110303",
        },
        grey: {
          50: "#F0F0F0",
          100: "#E0E0E0",
          200: "#C2C2C2",
          300: "#A3A3A3",
          400: "#858585",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
