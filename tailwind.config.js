const options = require('./config') //options from config.js

const allPlugins = {
	typography: require('@tailwindcss/typography'),
	forms: require('@tailwindcss/forms'),
	containerQueries: require('@tailwindcss/container-queries'),
}

const plugins = Object.keys(allPlugins)
	.filter(k => options.plugins[k])
	.map(k => {
		if (k in options.plugins && options.plugins[k]) {
			return allPlugins[k]
		}
	})

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '3rem',
				xl: '5rem',
			},
		},
		extend: {
			colors: {
				lead: '#111111',
				beige: '#DCC1AB',
				'impure-white': '#F5F0EC',
				'hover-white': '#D5D0CB',
				green: '#1B5B31',
				'dark-green': '#134329',
				'filter-white': 'rgba(255, 255, 255, 0.1)',
			},
		},
	},
	plugins: plugins,
}
