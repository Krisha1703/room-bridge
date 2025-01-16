/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#FFC107",
      },
      clipPath: {
        'circle-0': 'circle(0% at 50% 50%)',
        'circle-150': 'circle(150% at 50% 50%)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-outline': {
          WebkitTextStroke: '1px white',
          color: 'transparent',
          position: 'relative',
          display: 'inline-block',
        },
        '.text-outline::before': {
          content: 'attr(data-text)',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          color: 'white',
          clipPath: 'circle(0% at 50% 50%)',
          transition: 'clip-path 2s ease',
        },
        '.text-outline:hover::before': {
          clipPath: 'circle(150% at 50% 50%)',
        },
        // You can also define your keyframes in here
        '@keyframes radial-fill': {
          '0%': {
            clipPath: 'circle(0% at 50% 50%)',
          },
          '100%': {
            clipPath: 'circle(150% at 50% 50%)',
          },
        },
      });
    },
  ],
};
