import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {
      colors: {
        bgBlue : "#1c2838",
        accentBlue : "#4e8fd7",
        lightBlue: "#263344",
        textWhite: "#e3e8ed",
        textRed: "#d65060",
        textGreen: "#8ab052",
        darkBlack: "#0c131d",
      },
    },
  },
  plugins: [],
}
export default config
