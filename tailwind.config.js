/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#FAF7F3',
        'background-secondary': '#F3ECE7',
        'surface': '#EFE6DC',
        // Legacy coffee/brown tones (kept for compatibility)
        'brand-dark': '#221500',
        'brand-mid': '#6B4F35',
        'brand-gold': '#c9a84c',
        // Primary palette tokens
        'gold-accent': '#6B4F35',
        'gold-light': '#A67C52',
        'text-primary': '#2B2B2B',
        'text-secondary': '#6B5B4A',
        'text-muted': '#8C7F73',
        'success': '#4ade80',
        'error': '#fb7185',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        ' warm': '0 4px 6px -1px rgba(201, 168, 76, 0.2), 0 2px 4px -1px rgba(201, 168, 76, 0.1)',
        ' warm-lg': '0 10px 15px -3px rgba(201, 168, 76, 0.3), 0 4px 6px -2px rgba(201, 168, 76, 0.2)',
      },
    },
  },
  plugins: [],
}