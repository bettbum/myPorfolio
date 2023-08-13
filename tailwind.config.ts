import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light_background: '#a0d2ff',
        dark_background: '#101729',
      },
      keyframes: {
        vertical_loop: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        "bounce-1s": "bounce 2s linear infinite",
        "bounce-2s": "bounce 4s linear infinite",
        "bounce-1.5s": "bounce 1.5s linear infinite",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui')['[data-theme]=dark'],
          'base-100': '#101729',
          'neutral': "#F1F1F1"
        },
        light: {
          ...require('daisyui')['[data-theme]=light'],
          'base-100': '#a0d2ff',
          'neutral': "#1D68AA"
        },
      },
    ],
  },
};
export default config;
