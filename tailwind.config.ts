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
        space: {
          DEFAULT: '#0A0E1A',
          light: '#111827',
          surface: '#1E293B',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
export default config
