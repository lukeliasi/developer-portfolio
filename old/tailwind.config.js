const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.{html,njk,ejs,11ty.js,.js}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1em"
    },
    fontFamily: {
      "mukta": ["Mukta", "sans-serif"],
      "ibm-plex-mono": ["IBM Plex Mono", "sans-serif"],
      "sans": ["Mukta", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      navy: {
        DEFAULT: '#000025'
      },
      mint: {
        DEFAULT: '#15FF93',
        '50': '#CDFFE8',
        '100': '#B8FFDE',
        '200': '#8FFFCB',
        '300': '#67FFB9',
        '400': '#3EFFA6',
        '500': '#15FF93',
        '600': '#00DC76',
        '700': '#00A458',
        '800': '#006C3A',
        '900': '#00341C'
      },
      orange: {
        '50': '#F9E0C5',
        '100': '#F7D6B2',
        '200': '#F3C28D',
        '300': '#F0AE68',
        '400': '#EC9B43',
        '500': '#E8871E',
        '600': '#BB6A13',
        '700': '#884D0E',
        '800': '#553009',
        '900': '#221303'
      },
      blue: {
        DEFAULT: '#352BD1',
        '50': '#C4C1F2',
        '100': '#B4B0EF',
        '200': '#948FE8',
        '300': '#746DE1',
        '400': '#534BDA',
        '500': '#352BD1',
        '600': '#2921A2',
        '700': '#1D1874',
        '800': '#120E45',
        '900': '#060517'
      },
      silver: {
        DEFAULT: '#8491A3',
        '50': '#EDEFF2',
        '100': '#E1E4E9',
        '200': '#CAD0D7',
        '300': '#B3BBC6',
        '400': '#9BA6B4',
        '500': '#8491A3',
        '600': '#667589',
        '700': '#4E5969',
        '800': '#363E48',
        '900': '#1E2228'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
