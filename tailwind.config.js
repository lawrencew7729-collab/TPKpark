/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        olive: { 900: '#3A4A3E', 800: '#4A5D4E', 700: '#5F7363' },
        charcoal: { 900: '#1F2022', 800: '#2E3033', 700: '#43464A', 300: '#9CA3AF', 100: '#F3F4F6', 500: '#6B7280' },
        gold: '#C5A059',
        light: '#F8F9F8',
        brand: { light: '#f3f4f6', gold: '#cba153', dark: '#1c1c1c', gray: '#5a5a5a' }
      },
      fontFamily: {
        futura: ['"Futura PT"', 'sans-serif'],
        century: ['"Century Gothic"', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseGold: { '0%, 100%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(203, 161, 83, 0.7)' }, '50%': { opacity: '.9', transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(203, 161, 83, 0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px) scale(0.95)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '200% center' }, '100%': { backgroundPosition: '-200% center' } }
      }
    }
  },
  plugins: []
}
