/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // status color
        "light-red": "hsla(0, 100%, 67%)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",

        // section gradients
        "slate-blue": "hsl(252, 100%, 67%)",
        "royal-blue": "hsl(241, 81%, 54%)",

        // circle gradients
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",

        // neutral color, include white
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lav": "hsl(241, 100%, 89%)",
        "dark-gb": "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
