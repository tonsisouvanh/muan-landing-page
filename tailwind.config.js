/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-bg": "url('/assets/primary_bg.jpg')",
      },
      animation: {
        "shake-ludr": "shake-ludr 3s infinite",
      },
      keyframes: {
        "shake-ludr": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-5px, -5px)" },
          "50%": { transform: "translate(5px, 5px)" },
          "75%": { transform: "translate(-5px, 5px)" },
        },
      },
    },
  },
  plugins: [],
};
