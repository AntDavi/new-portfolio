import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1280px'
		},
		fontFamily: {
			primary: ['var(--font-jetbrainsMono)', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: '#3A72EC',
					hover: '#3B82F6'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
