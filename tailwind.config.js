/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#282C33",
          deep: "#22252B",
          raised: "#2F343D",
        },
        line: "#3A4049",
        fog: "#ABB2BF",
        accent: {
          DEFAULT: "#6CBBFF",
          soft: "rgba(108, 187, 255, 0.12)",
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 8px 40px -8px rgba(108, 187, 255, 0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
