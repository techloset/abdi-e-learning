/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "buenos-aires": ["Buenos Aires", "sans-serif"],
        "buenos-airesLight": ["Buenos Aires Light", "sans-serif"],
        "buenos-airesBold": ["Buenos Aires Bold", "sans-serif"],
        "nunito-sans": ["var(--font-nunito)"],
        "roboto-imp": ["var(--font-roboto)"],
      },
      boxShadow: {
        "success-box": ["0px 10px 60px 0px rgba(38, 45, 118, 0.08)"],
      },
    },
  },
  plugins: [],
};
