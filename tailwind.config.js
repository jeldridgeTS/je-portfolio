/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        lighttheme: {
          primary: "#fa8072",
          secondary: "#add8e6",
          accent: "#0081ff",
          neutral: "#180806",
          "base-100": "#fef3c7",
          info: "#20b2aa",
          success: "#00ffc7",
          warning: "#ffc100",
          error: "#ff7a85",
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
