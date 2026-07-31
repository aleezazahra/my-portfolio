module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        30: '7.5rem',
      },
      animation: {
        fall: 'fall linear infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg) translateX(0px)', opacity: '0.8' },
          '100%': { 
            transform: 'translateY(110vh) rotate(720deg) translateX(100px)', 
            opacity: '0' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}