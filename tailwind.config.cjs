/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'offwhite' : '#EBECF0',
				'offblack' : '#122C3B',
				'offoj' : '#F9BC19'
			},
			backgroundImage:{
				'noise' : "url('/noise.png')",
			},
	    	fontFamily: {
	        	sans: ["Metropolis", ...defaultTheme.fontFamily.sans],
	    	},
		},
	},
	plugins: [],
}
