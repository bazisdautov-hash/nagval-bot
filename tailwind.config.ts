import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        neutral: {
          25: '#fcfcfd',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
