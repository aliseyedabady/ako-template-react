/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "6px",
      },
      colors: {
        primary: "#5F40D3",
        text: "#151515",
        subText: "#2C2C2C",
        headText: "#080808",
      },
    },
  },
  plugins: [],
};
