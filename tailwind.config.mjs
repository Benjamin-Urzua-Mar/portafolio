/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			'mbl':'414px',
			'tbt':'607px',
			'ltb':'1024px',
			'hd':'1366px',
			'uhd':'1920px',
		}
		,
		extend: {
			fontFamily: {
				'raleway': ['Raleway', 'sans-serif'],
			},
		},
	},
	plugins: [nextui()],
}
