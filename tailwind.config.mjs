/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'text-main': '#000000',
        'text-sub': '#262626',
        'text-muted': '#737373',
        'accent-blue': '#4361EE',
        'image-bg': '#F1F1F1',
        divider: '#E5E5E5',
      },
      borderRadius: {
        'radius-1': '8px',
        'radius-2': '12px',
        '1': '8px',
        '2': '12px',
      },
      spacing: {
        'section-gap': '112px',
        'section-gap-mobile': '72px',
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.05', fontWeight: '600', letterSpacing: '-0.02em' }],
        h2: ['40px', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.015em' }],
        h4: ['20px', { lineHeight: '1.25', fontWeight: '500', letterSpacing: '-0.01em' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
