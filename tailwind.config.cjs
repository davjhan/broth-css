const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{svelte,js,ts,jsx,tsx,html,css}'],
    theme: {

        colors: {
            white: colors.white,
            ink: {
                DEFAULT: colors.black,
                primary: colors.amber[600],
                secondary: colors.gray[500],
            },
            accent: {
                primary: colors.amber[300],
            },
            shade: {
                DEFAULT: colors.gray[100],
                primary: colors.amber[100],
                success: colors.green[300]
            },
        }

    }
}