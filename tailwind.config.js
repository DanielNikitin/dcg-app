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
      sm: '280px',
      sm2: '350px',
      md: '768px',
      lg: '960px',
      xl: '1350px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#d23c41',
        teal: '#008080',
        yellowpr: '#fba417',
        whitett: '#FFFFFF',
        oceantt: '#92b2a3',
        orangett: '#fe5809',
        roadtt: '#372929',
        browntt: '#393535',
        browntt2: '#1a140b',
        test_c: '#191f22',
        test_c2: '#3e3b45',
      },
      backgroundImage: {
        main: 'url("/porsche.png")',
        main_sm: 'url("/e92_2.png")',
        about: 'url("/ttrs.png")',
        about_sm: 'url("/porsche_black.png")',
        services_left: 'url("/tts.png")',
        services_right: 'url("/tts2.png")',
        rs5: 'url("/rs5.png")',
        srt: 'url("/srt.png")',
        por_white: 'url("/porsche_white.png")',
        r8: 'url("/r8.png")',
        r8_front: 'url("/r8front.png")',
        cayman: 'url("/cayman.png")',
        porsche_blue: 'url("/porsche_blue.png")',
        porsche_blue2: 'url("/porsche_blue2.png")',
        rs_acceleration: 'url("/rs_acceleration.png")',
        table: 'url("/table.png")',
        xc90: 'url("/xc90.png")',
        xc90_2: 'url("/xc90_2.png")',
        turbo: 'url("/turbo_ref.png")',
        site: 'url("/bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'shadow-pulse': 'shadowPulse 2.5s infinite',
        'sm-shadow-pulse': 'smshadowPulse 2.5s infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        roboto: [`var(--font-roboto)`, 'sans-serif'],
      },
      keyframes: {
        shadowPulse: {
          '50%': {
            boxShadow: '0px 0px 20px rgba(100, 0, 0, 0.3)',
          },
        },
        smshadowPulse: {
          '50%': {
            boxShadow: '0px 0px 20px rgba(0, 128, 128, 0.3)',
          },
        },
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
