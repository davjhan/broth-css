const colors = require('tailwindcss/colors')
module.exports = {
    colors: {
        transparent: 'transparent',
        white: colors.white,
        ink: {
            DEFAULT: colors.black,
            primary: colors.amber[600],
            secondary: colors.gray[500],
            error: colors.red[600],
            success: colors.green[600],
        },
        accent: {
            primary: colors.amber[300],
        },
        shade: {
            DEFAULT: colors.gray[100],
            dark: colors.gray[200],
            primary: colors.amber[100],
            'primary-dark': colors.amber[200],
            success: colors.green[100],
            error: colors.red[100],
            'error-dark': colors.red[200],
        },
    },
}