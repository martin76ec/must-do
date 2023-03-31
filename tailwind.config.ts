/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...colors,
			paleYellow: '#fec806',
			fangGray: '#f8f8f8',
			oldGray: '#cccccc',
		}
	},
	plugins: [],
}
