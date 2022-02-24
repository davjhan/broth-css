const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const nesting = require('tailwindcss/nesting')

module.exports = {
    plugins: [
        nesting,
        // Some plugins, like postcss-nested, need to run before Tailwind
        tailwindcss,
        // But others, like autoprefixer, need to run after
        autoprefixer,
    ],
}