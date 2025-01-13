const { faParagraph } = require("@fortawesome/free-solid-svg-icons");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: "true",
  		padding: "0.9375rem"
  	},
  	screens: {
  		sm: "640px",
  		md: "768px",
  		lg: "960px",
  		xl: "1200px"
  	},
  	colors: {
  		white: "rgba(255 255 255 / 1)",
  		black: "rgba(39 48 41 / 1)",
  		soft_green: {
  			DEFAULT: "rgba(133 199 220 / 1)",
  			secondary: "rgba(243 249 251 / 1)"
  		},
		green: "rgba(0 53 49 / 1)",
  		grey: {
  			DEFAULT: "rgba(136 136 136 / 1)",
  			secondary: "rgba(86 86 86 / 1)"
  		},
  		orange: "rgba(242 153 74 / 1)",
  		outline: "rgba(241 241 241 / 1)",
  		pink: "rgba(243 209 215 / 1)",
  		body: "rgba(229 229 229 / 1)",
		divider: "rgba(203 231 228 / 1)",
  	},
  	extend: {
		fontFamily: {
			script: "var(--font-script)",
			circularBlack: "var(--font-circularBlack)",
			circularMedium: "var(--font-circularMedium)",
			circularBook: "var(--font-circularBook)",
		 },
  		colors: {
  			border: "hsl(var(--border))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			accent: {
  				DEFAULT: "rgba(12 162 150 / 1)",
				secondary: "rgba(255 199 0 / 1)",
  				foreground: "hsl(var(--accent-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			input: "hsl(var(--input))",
  			chart: {
  				"1": "hsl(var(--chart-1))",
  				"2": "hsl(var(--chart-2))",
  				"3": "hsl(var(--chart-3))",
  				"4": "hsl(var(--chart-4))",
  				"5": "hsl(var(--chart-5))"
  			}
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		},
  		keyframes: {
  			"accordion-down": {
  				from: {
  					height: "0"
  				},
  				to: {
  					height: "var(--radix-accordion-content-height)"
  				}
  			},
  			"accordion-up": {
  				from: {
  					height: "var(--radix-accordion-content-height)"
  				},
  				to: {
  					height: "0"
  				}
  			}
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out"
  		}
  	},
  	backgroundImage: {
		main: "url(/hero/main.png)",
  		hero: "url(/hero/bg-1.png)",
		shore: "url(/footer/shore_path.svg)",
  	}
  },
  plugins: [require("tailwindcss-animate")],
}