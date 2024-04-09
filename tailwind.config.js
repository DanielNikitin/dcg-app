/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0px',
      },
    },
    screens: {
      sm: '350px',
      md: '768px',
      lg: '960px',
      xl: '1000px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#d23c41',
      },
      backgroundImage: {
        main: 'url("/porsche.png")',
        main_sm: 'url("/bmw3.png")',
        about: 'url("/ttrs.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.sv")',
        site: 'url("/bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        roboto: [`var(--font-roboto)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
