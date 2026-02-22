import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode (default) - these are the base colors
        space: {
          DEFAULT: '#F8FAFC', // Light background
          light: '#F1F5F9',   // Slightly darker light bg
          surface: '#E2E8F0', // Surface/card backgrounds
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
        },
        text: {
          primary: '#1E293B',   // Dark text for light mode
          secondary: '#64748B', // Muted text for light mode
        },
        // Dark mode colors (used with dark: prefix)
        'dark-space': {
          DEFAULT: '#0A0E1A',
          light: '#111827',
          surface: '#1E293B',
        },
        'dark-text': {
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
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
