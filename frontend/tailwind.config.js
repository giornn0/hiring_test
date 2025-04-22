/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 20s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '0.3'
          },
          '50%': {
            transform: 'translate(var(--tw-translate-x), var(--tw-translate-y))',
            opacity: '1'
          },
          '100%': {
            transform: 'translate(calc(var(--tw-translate-x) * 2), calc(var(--tw-translate-y) * 2))',
            opacity: '0.3'
          },
        },
      },
    },
  },
}
