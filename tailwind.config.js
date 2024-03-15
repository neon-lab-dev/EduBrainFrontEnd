/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        xs: '475px',
      },
      colors: {
        primary: '#246BFD',
        'primary/10': '#246BFD1A',
        background: '#0C0C0D',
        neutral: '#F4F4F4',
        'neutral/10': '#F5F8FF',
        'neutral/40': '#ABAEB2',
        'neutral/60': '#7A7C80',
        'neutral/90': '#313233',
        'neutral/95': '#252526',
        'neutral/100': '#141414',
        coral: '#FF9300',
        cardBgColor: '#121721',
      },
    },
  },
  plugins: [],
}
