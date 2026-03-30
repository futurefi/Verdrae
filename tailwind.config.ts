import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0F1115',
        surface: '#151922',
        surfaceAlt: '#1B2230',
        borderSoft: '#2A3445',
        textPrimary: '#F3F1EA',
        textSecondary: '#B7BDC8',
        textMuted: '#8791A1',
        accentGreen: '#7FA6A1',
        accentBlue: '#8FA7BF',
        accentMoss: '#5E766E',
        accentWarm: '#C8B38E'
      },
      maxWidth: {
        content: '65ch'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.18)'
      },
      borderRadius: {
        panel: '28px'
      }
    }
  },
  plugins: []
};

export default config;
