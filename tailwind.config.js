/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      massive: { max: "1540px" },
      Lar: { max: "1400px" },
      extLar: { max: "1397px" },
      larger: { max: "1262px" },
      large: { max: "1193px" },
      med: { max: "1062px" },
      small: { max: "968px" },
      smo: { max: "600px" },
      smaller: { max: "500px" },
      mob: { max: "417px" },
      Smob: { max: "361px" },
      smallest: { max: "320px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pmRed: "#EA0000",
        borderP: "#E5E5E5",
        borderC: "#F5F5F5",
        darkP: "#1A1A1A",
        grayP: "#707070",
        darkLight: "#3F4A57",
        textLight: "#BDC7D1",
        darkMid: "#323A44",
        darkBorder: "#4E5C6C",
        pmGray: "#707070",
      },
    },
  },
  plugins: [],
};
