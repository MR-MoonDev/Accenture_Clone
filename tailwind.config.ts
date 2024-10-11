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
          '100%': { transform: 'translateX(5px)' }, 
        }, 
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        'forward-icon': 'forward-icon 0.3s ease-in-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        fadeDown: 'fadeDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
