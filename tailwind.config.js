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
      fontFamily: {
        bethanyElingston: ["var(--font-bethany-elingston)"],
        manRope: ["var(--font-manrope)"]
      },
      backgroundColor: {
        "main": 'rgb(251 250 237)',
        'cta-black': 'rgba(40, 40, 40, 1)'
      },
      colors: {
        'baby-pink': '#EE4875',
        'main-text': 'rgb(34, 36, 39)',
        'cta-black': 'rgba(40, 40, 40, 1)',
        'custom-white': 'rgba(251, 250, 237, 1)'
      }
    },
  },
  plugins: [],
};
