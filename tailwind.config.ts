/** @type {import('tailwindcss').Config} */
const spacing = () => {
  let spacArr: any = {}
  for (let i = 0; i <= 375; i++) {
    spacArr[2 * i] = 2 * i + 'px'
  }
  spacArr = {
    ...spacArr,
    '100vh': '100vh',
    main: '540px',
    xl:'1140px',
    lg:'960px',
    md:'720px',

  }
  return spacArr
}
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    backgroundSize: {
      full: '100% 100%'
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '34': '34px',
      '36': '36px'
    },
    borderRadius: {
      2: '2px',
      4: '4px',
      6: '6px',
      '8': '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      full: '1000px'
    },
    fontWeight: {
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900'
    },
    spacing: spacing(),
    extend: {
      lineHeight: {
        // leading-40
        40: "40rpx",
        1: 1,
        1.2: 1.2,
        1.3: 1.3,
        1.4: 1.4,
        1.5: 1.5,
        1.6: 1.6,
        1.7: 1.7,
        1.8: 1.8,
        90: "90rpx",
        82: "82rpx",
        2: 2,
      },
      colors: {
        main: '#ff4f4f',
        fff: '#fff',
        '000': '#000',
        'fff-9': 'rgba(255, 255, 255, .9)',
        '000-9': 'rgba(0,0,0,.9)',
        'fff-8': 'rgba(255, 255, 255, .8)',
        '000-8': 'rgba(0,0,0,.8)',
        'fff-7': 'rgba(255, 255, 255, .7)',
        '000-7': 'rgba(0,0,0,.7)',
        'fff-6': 'rgba(255, 255, 255, .6)',
        '000-6': 'rgba(0,0,0,.6)',
        'fff-5': 'rgba(255, 255, 255, .5)',
        '000-5': 'rgba(0,0,0,.5)',
        'fff-4': 'rgba(255, 255, 255, .4)',
        '000-4': 'rgba(0,0,0,.4)',
        'fff-3': 'rgba(255, 255, 255, .3)',
        '000-3': 'rgba(0,0,0,.3)',
        'fff-2': 'rgba(255, 255, 255, .2)',
        '000-2': 'rgba(0,0,0,.2)',
        'fff-1': 'rgba(255, 255, 255, .1)',
        '000-1': 'rgba(0,0,0,.1)',
        'fff-0': 'rgba(255, 255, 255, 0)',
        '000-0': 'rgba(0,0,0,0)'
      },
      zIndex: {
        'full': '9999',
      }
    },
    boxShadow: {
      'header': '0px 9px 40px -13px rgba(0, 0, 0, 0.75);',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
}
