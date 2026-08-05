/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#14b8a6',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(15, 118, 110, 0.22)',
        glass: '0 16px 50px rgba(15, 118, 110, 0.12)'
      },
      backgroundImage: {
        'clinic-gradient': 'radial-gradient(circle at top left, rgba(20,184,166,0.18), transparent 32%), radial-gradient(circle at top right, rgba(15,118,110,0.14), transparent 28%), linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        'hero-grid': 'linear-gradient(rgba(15, 118, 110, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.05) 1px, transparent 1px)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 1.6s linear infinite'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
};
