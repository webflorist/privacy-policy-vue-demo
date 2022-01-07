const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const primaryColor = colors.purple

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					...primaryColor,
					DEFAULT: primaryColor[600],
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
