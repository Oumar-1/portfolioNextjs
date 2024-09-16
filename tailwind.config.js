/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    colors: {
      light: '#CCCCFF',
      dark: 'hsl(230deg 54% 7%)',
      black: '#010101',
      accent: 'hsl(336deg 48% 48%)',
      secondary: 'hsl(188deg, 61%, 40%)',
      gradient: {
        100: 'hsl(188deg, 61%, 40%)',
        200: 'hsl(212deg 42% 41%)',
        300: 'hsl(336deg 42% 36%)',
      },
    },
    extend: {
      screens: {
        sm: '411px',
      },
      borderRadius: { blob: '31% 69% 69% 31% / 37% 63% 37% 63%' },
      boxShadow: {
        soft: '2px 4px ',
        softer: '0 0px 40px -10px',
      },
      keyframes: {
        unblur: {
          from: 'filter: blur(10)',
        },
      },
    },
  },
  plugins: [],
};
