/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#12121c",
        space: "#091926",
        space2: "#080814",
        surface: "#208fff",
        lighter: "#a4ecff",
        lightest: "#E4faff",
        words: "#B6CFCA",
        primary: "#ffffff",
        secondary: "#ffffff",
        faint: "#f7f7f7",
        category: "#e3e9e4",
        faintest: "#F0F7F6",
        almostwhite: "#fcfcfc",
        darkest: "#242525",
        dark: "#282929",
      },
      maxWidth: {
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
        half: "25%",
      },
      screens: {
        "3xl": "1921px",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(228, 250, 255, 0.1)",
          "0 0px 50px rgba(228, 250, 255, 0.1)",
        ],
      },
      animation: {
        "asteroid-one": "asteroid-one 100s infinite linear",
        "rotate-forward-underline": "rotate-forward 5s infinite linear",
        "rotate-backward-underline": "rotate-backward 5s infinite linear",
        "rotate-forward-faster": "rotate-forward 30s infinite linear",
        "rotate-forward-slower": "rotate-forward 50s infinite linear",
        "rotate-backward-faster": "rotate-backward 30s infinite linear",
        "rotate-backward-slower": "rotate-backward 50s infinite linear",
        "html-circle-one": "html-circle-one 20s infinite linear",
        "html-circle-two": "html-circle-two 50s infinite linear",
        "javascript-rotate": "rotate-javascript 50s infinite linear",
        "shooting-star": "shooting-star 0.5s ease-in 5s",
      },
      keyframes: {
        "asteroid-one": {
          "0%": { transform: "translateX(105vw) rotate(0deg)" },
          "100%": { transform: "translateX(-20vw) rotate(180deg)" },
        },
        "rotate-forward": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-backward": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "rotate-javascript": {
          "0%": { transform: "rotate(-174.5deg)" },
          "100%": { transform: "rotate(185.5deg)" },
        },
        "html-circle-one": {
          "0%": { opacity: "100%", "stroke-dashoffset": "283" },
          "50%": { "stroke-dashoffset": "0" },
          "100%": { opacity: "100%", "stroke-dashoffset": "-283" },
        },
        "html-circle-two": {
          "0%": { "stroke-dashoffset": "-283" },
          "50%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "283" },
        },
        "shooting-star": {
          "0%": { transform: "translateX(0) translateY(0) rotate(-35deg)" },
          "100%": {
            transform: "translateX(-120vw) translateY(-120vh) rotate(-35deg)",
          },
        },
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
