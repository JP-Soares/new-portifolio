module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 👈 REQUIRED
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          50: 'var(--color-woodsmoke-50)',
          100: 'var(--color-woodsmoke-100)',
          200: 'var(--color-woodsmoke-200)',
          300: 'var(--color-woodsmoke-300)',
          400: 'var(--color-woodsmoke-400)',
          500: 'var(--color-woodsmoke-500)',
          600: 'var(--color-woodsmoke-600)',
          700: 'var(--color-woodsmoke-700)',
          800: 'var(--color-woodsmoke-800)',
          900: 'var(--color-woodsmoke-900)',
          950: 'var(--color-woodsmoke-950)',
        },
      },
    },
  },
  plugins: [],
};