/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green":"#02b796",
        "custom-light-green":"#f1fbfa",
      },
      fontFamily: {
        "mono": ["ui-monospace", "SFMono-Regular"]
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}