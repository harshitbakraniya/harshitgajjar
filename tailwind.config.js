/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        bottomToTop: {
          "0%": { transform: "translate(-50%, 100%)", opacity: "0" },
          "100%": { transform: "translate(-50%, 0)", opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: 0.5, left: "50%" },
          "50%": { opacity: 0.4, left: "49.8%" },
        },
        spread: {
          "0%": { left: "50%", top: "50%", opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        bottomToTop: "bottomToTop 1s ease-in-out",
        spin: "spin 50s linear infinite", // Custom spin with 2 seconds duration
        flicker: "flicker 0.5s infinite",
        spread: "spread 2s ease-out forwards",
      },
    },
  },
  safelist: [
    'bg-[#01a0e2]',
    'bg-[#275df5]',
    'bg-[#002589]',
    'bg-[#f1593c]',
  ],
  plugins: [],
};
