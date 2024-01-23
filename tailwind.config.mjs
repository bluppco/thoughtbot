/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
		keyframes: {
			"accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
		letterSpacing: {

			tightest: '-.075em',
			tighter: '-.05em',
			t: '-.04em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em'

		  },

		screens: {

			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'mac': '1440px',
			'2xl': '1536px'

		},

		fontFamily: {

			"calibre": [ "Calibre", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" ],
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
  plugins: [require("tailwindcss-animate")],
}