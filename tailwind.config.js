module.exports = {
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      boxShadow: {
        header: '0 5px 2px -2px #f3f4f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
