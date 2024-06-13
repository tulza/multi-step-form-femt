/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        marineBlue: "hsla(var(--marineBlue) / <alpha-value>)",
        purplishBlue: "hsla(var(--purplishBlue) / <alpha-value>)",
        pastelBlue: "hsla(var(--pastelBlue) / <alpha-value>)",
        lightBlue: "hsla(var(--lightBlue) / <alpha-value>)",
        strawberryRed: "hsla(var(--strawberryRed) / <alpha-value>)",
        coolGray: "hsla(var(--coolGray) / <alpha-value>)",
        lightGray: "hsla(var(--lightGray) / <alpha-value>)",
        magnolia: "hsla(var(--magnolia) / <alpha-value>)",
        alabaster: "hsla(var(--alabaster) / <alpha-value>)",
        white: "hsla(var(--white) / <alpha-value>)",
      },
      screens: {},
      transitionProperty: {},
    },
  },
  plugins: [],
};
