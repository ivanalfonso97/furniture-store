import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#242424',
        sub: '#909090',
        bg: '#F5F5F5',
        secondary: '#E0E0E0',
        success: '#27AE60',
        warning: '#F2C94C',
        danger: '#EB5757',
        disable: '#B3B3B3',
      },
    },
  },
  plugins: [],
}
export default config
