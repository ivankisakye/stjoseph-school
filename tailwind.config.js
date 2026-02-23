/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef4ff',
          100: '#dce8ff',
          500: '#3b6fd4',
          600: '#2d5bb8',
          700: '#1e4496',
          800: '#163478',
        },
        accent: {
          50:  '#f0faf4',
          100: '#dcf5e7',
          500: '#2e9e5b',
          600: '#238048',
          700: '#1a6237',
        },
        warm: {
          50:  '#fff5f5',
          100: '#ffe8e8',
          500: '#c94040',
          600: '#a83030',
        },
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(59,111,212,0.08)',
        card: '0 2px 16px rgba(30,44,96,0.10)',
        glow: '0 0 32px rgba(59,111,212,0.18)',
      },
    },
  },
  plugins: [],
}