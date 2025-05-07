/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c53735',
        secondary: '#8b8b8b',
        foreground: '#000000',
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-gotham)'],
      },
      animation: {
        'wave-slow': 'wave 8s ease-in-out infinite',
        'wave-medium': 'wave 6s ease-in-out infinite',
        'wave-fast': 'wave 4s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}
