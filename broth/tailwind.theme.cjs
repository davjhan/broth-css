const colors = require('tailwindcss/colors')
module.exports = {
    colors: {
        transparent: 'transparent',
        white: colors.white,
        ink: {
            DEFAULT: colors.black,
            primary: colors.amber[600],
            secondary: colors.gray[500],
            error: colors.red[500],
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