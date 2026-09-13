/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#14B8A6',
          dark: '#0F9488',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2A4E7A',
        },
        mint: '#D1FAE5',
        ink: '#1F2937',
        cloud: '#F9FAFB',
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['52px', { lineHeight: '1.08', fontWeight: '800' }],
        'h1-mobile': ['32px', { lineHeight: '1.15', fontWeight: '800' }],
        'h2-desktop': ['36px', { lineHeight: '1.15', fontWeight: '800' }],
        'h2-mobile': ['24px', { lineHeight: '1.2', fontWeight: '800' }],
      },
      boxShadow: {
        premium: '0 20px 50px -12px rgba(30, 58, 95, 0.25)',
        card: '0 4px 24px rgba(30, 58, 95, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
