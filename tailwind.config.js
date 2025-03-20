/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          100: "#A8B5DB",
          100: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          100: "#0f0d23",
          100: "#",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
