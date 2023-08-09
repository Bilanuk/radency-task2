/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#2f2f2f',
        primary: '#ffffff',
        secondary: '#e7e7e7',
        text: '#ccc',
        buttonBg: '#2f2f2f',
        trBg: '#3f3f3f',
        buttonHover: '#000000',
        modalBackdrop: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
}
