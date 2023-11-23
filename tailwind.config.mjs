/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {

				"calibre": [ "Calibre Regular", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" ],
				"calibre_medium": [ "Calibre Medium", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" ],
				"calibre_semibold": [ "Calibre Semibold", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" ],
				"calibre_bold": [ "Calibre Bold", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" ],
			},

			colors: {

				"thoughtbot_light_red": "#e03131",
				"thoughtbot_red": "#ce2d2d",
				"thoughtbot_black": "#29292c",
				"thoughtbot_slate": "#494a51",
				"thoughtbot_gray": "#67676e",
				"thoughtbot_lavender": "#f0f0f8",
				"thoughtbot_zinc": "#b5b5c0",
				"thoughtbot_light_orange": "#e96f6f"

			}

		},
	},
	plugins: [],
}
