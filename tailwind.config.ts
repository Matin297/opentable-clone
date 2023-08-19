import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'linear-gradient(to right, rgba(47, 45, 65, 0.7), rgba(47, 45, 65, 0.7)), url("//cdn.otstatic.com/cfe/14/images/us-1040px-e7df7b.webp")',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(236px, 1fr))'
      },
      colors: {
        'placeholder': '#9CA3AF'
      }
    },
  },
  plugins: [],
}
export default config
