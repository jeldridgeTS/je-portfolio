/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        darktheme: {
          primary: "#00ADB5",
          secondary: "#FF22CB",
          accent: "#FFC522",
          neutral: "#EEEEEE",
          "base-100": "#303841",
          info: "#8FBC8F",
          success: "#65c400",
          warning: "#f8b700",
          error: "#ff7982",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
