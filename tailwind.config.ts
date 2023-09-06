import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        PtypeDisplay: 'PtypeDisplay, sans-serif',
        PtypeText: 'PtypeText, sans-serif',
        Quakerhack: 'Quakerhack, sans-serif',
      },
      fontSize: {
        'lg': ['1.2rem', {
          lineHeight: '1.2rem',
        }],
        'xl': ['2rem', {
          lineHeight: '2rem',
        }],
        '3xl': ['8rem', {
          lineHeight: '8rem',
        }],
        '6xl': ['16rem', {
          lineHeight: '14rem',
        }],
        '9xl': ['24rem', {
          lineHeight: '20rem',
        }],
        '12xl': ['48rem', {
          lineHeight: '40rem',
        }],
      },
      colors: {
        accent: '#ff3c31',
        second: '#f2f3f4',
      },
      rotate: {
        '-20': '-20deg',
      }

    },
  },
  plugins: [],
}
export default config
