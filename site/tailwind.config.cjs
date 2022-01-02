const colors = require('tailwindcss/colors')
const theme = require('../broth/tailwind.theme.cjs')
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
    theme: {
        extend: {
            ...theme
        }
    }
}