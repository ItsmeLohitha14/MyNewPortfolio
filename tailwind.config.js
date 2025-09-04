export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899',
          },
          '50%': {
            textShadow: '0 0 10px #f472b6, 0 0 20px #f472b6, 0 0 30px #f472b6',
          },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
      },
      colors: {
        pinkPrimary: '#ec4899',
        pinkLight: '#f9a8d4',
      },
    },
  },
  plugins: [],
};
