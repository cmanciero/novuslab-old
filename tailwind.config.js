/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				color: {
					primary: 'rgb(252, 153, 0)',
					secondary: 'rgb(36, 144, 255)',
					red: 'rgb(237, 89, 78)',
					orange: 'rgb(251, 153, 0)',
					pink: 'rgb(231, 154, 134)',
					green: 'rgb(63, 180, 143)',
					black: 'rgb(0, 0, 0)',
					white: 'rgb(255, 255, 255)',
				},
			},
		},
	},
	plugins: [],
};
