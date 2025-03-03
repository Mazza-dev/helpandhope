import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0077BE', // The blue from your logo
        'brand-green': '#4CAF50', // The green from your logo
      },
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
