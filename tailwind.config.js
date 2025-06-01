/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-900': '#0A0A1A',
        'dark-blue-800': '#1A1A33',
        'dark-blue-700': '#2A2A4D',
        'neon-purple': '#BF00FF',
        'neon-blue': '#00FFFF',
        'neon-green': '#00FF00',
        'neon-pink': '#FF00FF',
        'neon-yellow': '#FFFF00',
        'neon-red': '#FF3131',
        'neon-orange': '#FF8C00',
        'gray-futuristic': '#A0A0B0',
        'dark-gray-futuristic': '#33333D',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'syncopate': ['Syncopate', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow-purple': '0 0 10px #BF00FF, 0 0 20px #BF00FF, 0 0 40px #BF00FF, 0 0 80px #BF00FF',
        'neon-glow-blue': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 80px #00FFFF',
        'neon-glow-green': '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00, 0 0 80px #00FF00',
        'neon-glow-pink': '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 80px #FF00FF',
        'neon-glow-yellow': '0 0 10px #FFFF00, 0 0 20px #FFFF00, 0 0 40px #FFFF00, 0 0 80px #FFFF00',
        'neon-glow-red': '0 0 10px #FF3131, 0 0 20px #FF3131, 0 0 40px #FF3131, 0 0 80px #FF3131',
        'neon-glow-orange': '0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 40px #FF8C00, 0 0 80px #FF8C00',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'border-pulse': 'border-pulse 2s infinite',
        'text-glow': 'text-glow 1.5s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(191, 0, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7)' },
          '50%': { boxShadow: '0 0 15px rgba(191, 0, 255, 1), 0 0 25px rgba(0, 255, 255, 1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: '#BF00FF' },
          '50%': { borderColor: '#00FFFF' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 5px #BF00FF' },
          '50%': { textShadow: '0 0 15px #00FFFF' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'background-shine': {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}