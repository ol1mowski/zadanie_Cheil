/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#000000',
        background: '#F8F8F8',
        lightText: '#767676',
        green: '#009949',
        darkBlue: '#1428A0',
        dark: '#1C1C1C',
        lightBlue: '#007AFF',
        white: '#FFFFFF',
      },
      fontSize: {
        'heading': '1.5rem',
        'subheading': '1.25rem',
        'body': '1rem',
        'small': '0.875rem',
        'tiny': '0.75rem',
      },
      fontFamily: {
        sans: ['SamsungOne', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

