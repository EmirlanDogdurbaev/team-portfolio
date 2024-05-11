module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js'
    },
    autoprefixer: {}
  }
};