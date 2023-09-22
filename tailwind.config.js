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
        "inter-400": ["var(--font-inter)"],
        "poppins-400": ["var(--font-poppins)"],
      },
      boxShadow: {
        "success-box": ["0px 10px 60px 0px rgba(38, 45, 118, 0.08)"],
        "creators-shadow": ["2px 2px 10px 2px rgba(0, 0, 0, 0.25)"],
        "meeting-shadow": [" 2px 2px 10px 1px rgba(0, 0, 0, 0.25)"],
      },
      colors: {
        "light-teal": "#49BBBD",
        "normal-teal": "#33EFA0",
        "dark-teal": "#00CBB8",
        "normal-purple": "#2F327D",
        "light-purple": "#C583FF",
        "grey-600": "#696984",
      },
    },
  },
  plugins: [],
};
