/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0D0F',
        panel: '#13161A',
        line: '#23272D',
        signal: '#00FF9C',
        alert: '#FF4C4C',
        muted: '#6B7280',
        ink: '#E8E8E8',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        vcr: ['"VCR OSD Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
