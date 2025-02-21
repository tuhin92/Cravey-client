/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0393B7',
        secondary: '#fb923c',
        accent: '#0381A1',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: .5,
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
    addVariablesForColors,
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ["light"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--primary)
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}