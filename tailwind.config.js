module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 👈 REQUIRED
  theme: {
    extend: {
      colors: {
        'jacksons-purple': {
          50: 'var(--color-jacksons-purple-50)',
          100: 'var(--color-jacksons-purple-100)',
          200: 'var(--color-jacksons-purple-200)',
          300: 'var(--color-jacksons-purple-300)',
          400: 'var(--color-jacksons-purple-400)',
          500: 'var(--color-jacksons-purple-500)',
          600: 'var(--color-jacksons-purple-600)',
          700: 'var(--color-jacksons-purple-700)',
          800: 'var(--color-jacksons-purple-800)',
          900: 'var(--color-jacksons-purple-900)',
          950: 'var(--color-jacksons-purple-950)',
        },
      },
    },
  },
  plugins: [],
};