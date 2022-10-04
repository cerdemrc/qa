/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: '#faa81a',
				white: {
					DEFAULT: '#ffffff',
					100: '#dedede',
				},
				red: '#F07564',
				green: '#4ADB4A',
			},
		},
	},
	plugins: [],
};
