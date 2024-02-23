/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--heading-color), <alpha-value>)",
      },
      fontFamily: {
        Poppins: ['"Poppins"'],
      },
      backgroundImage: {
        hero: "url('https://smkn65jkt.sch.id/wp-content/uploads/2022/04/WhatsApp-Image-2022-03-23-at-09.55.28.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
