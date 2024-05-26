/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#FFA435",
          default: "#EF8300",
          dark: "#B96601",
        },
        secondary: {
          light: "#3F44BD",
          default: "#1D217C",
          dark: "#00045B",
        },
        green: {
          default: "#66E52A",
        },
        red: {
          default: "#E52A2A",
        },
        yellow: {
          default: "#E5B12A",
        },
        input: {
          default: "#FCE7CF",
        },
      },
    },
  },
  plugins: [],
};
