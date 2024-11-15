/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter_regular: ['Inter_400Regular'],
        inter_medium: ['Inter_500Medium'],
        inter_bold: ['Inter_700Bold']
      }
    },
  },
  plugins: [],
};