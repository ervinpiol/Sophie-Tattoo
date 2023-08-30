/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        YellowGreen: "rgb(209, 243, 72)",
        Gray: "rgb(84, 86, 99)",
        LightGray: "rgb(177, 179, 189)",
        DarkBlue: "rgb(0, 2, 20)",
        LightBlue: "rgb(20,23,39)",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
