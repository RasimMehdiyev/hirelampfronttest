// const tailwindcss = require("tailwindcss");

// module.exports = {
//   purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   darkMode: false,
//   theme: {
//     extend: {
//       colors: {
//         "custom-blue": "#0096FF",
//       },
//       animation: ["group-hover"],
//     },
//   },
//   variants: {
//     textColor: ["responsive", "hover", "focus", "group-hover"],
//     backgroundColor: ["responsive", "hover", "focus", "group-hover"],
//     display: ["group-hover"],
//   },
//   plugins: [],
// };

const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0096FF",
      },
      animation: ["group-hover"],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
