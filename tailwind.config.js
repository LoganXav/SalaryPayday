/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#656464',      
        secondary: '#1C468A',      
        tertiary: '#FC8900', 
        background: '#F2F5FA'     
      },
    },
  },
  plugins: [],
}