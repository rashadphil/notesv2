const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")[
            "[data-theme=lofi]"
          ],
          "base-200": "#FAFAF9",
          "base-300": "#F1F1F1",
        },
      },

      {
        dark: {
          ...require("daisyui/src/theming/themes")[
            "[data-theme=black]"
          ],
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
