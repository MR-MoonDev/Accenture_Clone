import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '276': '276px',
        '424': '424px',
      },
      keyframes: {
        'forward-icon': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(5px)' }, // Adjust the distance as needed
        },
      },
      animation: {
        'forward-icon': 'forward-icon 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
