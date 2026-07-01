/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          deep: '#070b16',
          DEFAULT: '#0a1020',
          soft: '#0f172e',
        },
        surface: {
          DEFAULT: '#131c36',
          raised: '#1a2447',
        },
        hairline: {
          DEFAULT: '#2a3658',
          soft: '#1d2640',
          strong: '#3d4a72',
        },
        brand: {
          gold: '#d4a85a',
          'gold-soft': '#e6c184',
          'gold-deep': '#a8843f',
          'gold-bg': '#1f1810',
          'gold-tint': '#3a2e1c',
          vermilion: '#e84a4a',
          'vermilion-soft': '#f87171',
          'vermilion-deep': '#b83838',
          jade: '#3dd4a8',
          'jade-soft': '#5eead4',
          'jade-deep': '#1a8e6e',
          azure: '#5fa8d3',
          amber: '#f0b85a',
        },
        ink: {
          DEFAULT: '#f0e8d8',
          soft: '#d4cbb8',
          mute: '#a89880',
          faint: '#6b6354',
        },
        'on-gold': '#1a1208',
        'on-dark': '#f5edd9',
        'on-dark-muted': 'rgba(245, 237, 217, 0.65)',
      },
      fontFamily: {
        'serif-cn': ['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', 'SimSun', 'serif'],
        'sans-cn': ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '20px',
        pill: '9999px',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '64px',
        'section-lg': '96px',
        hero: '120px',
      },
      boxShadow: {
        'glow-gold-sm': '0 0 16px rgba(212, 168, 90, 0.18)',
        'glow-gold-md': '0 0 24px rgba(212, 168, 90, 0.25)',
        'glow-gold-lg': '0 0 40px rgba(212, 168, 90, 0.30)',
        'glow-vermilion': '0 0 16px rgba(232, 74, 74, 0.15)',
        'glow-jade': '0 0 12px rgba(61, 212, 168, 0.30)',
        'glow-azure': '0 0 8px rgba(95, 168, 211, 0.50)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}