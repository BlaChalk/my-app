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
        '6xl': ['16rem', {
          lineHeight: '16rem',
        }],
        '9xl': ['24rem', {
          lineHeight: '20rem',
        }],
        '12xl': ['48rem', {
          lineHeight: '40rem',
        }],
      },
    },
  },
  plugins: [],
}
export default config
