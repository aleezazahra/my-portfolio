// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Assuming you have these fonts set up, e.g., via Google Fonts
        serif: ['"Playfair Display"', 'serif'], // or similar elegant serif
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        30: '7.5rem', // Add a custom spacing size
      },
      animation: {
        fall: 'fall linear infinite', // Define the falling animation
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg) translateX(0px)', opacity: '0.8' },
          '100%': { 
            // Move down, rotate randomly, and add a slight horizontal drift
            transform: 'translateY(110vh) rotate(720deg) translateX(100px)', 
            opacity: '0' 
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Add radial gradient utility
      },
    },
  },
  plugins: [],
}