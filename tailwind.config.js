module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        1: "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
