/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,jsx,ts,tsx}",
        "./resources/**/*.vue",
    ],
    theme: {
        fontSize: {
            '2xl': ['1.5rem', {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
            }],
            '3xl': ['1.875rem', {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            }],
            '4xl': ['1.875rem', {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            }],
        },
        extend: {
            colors: {
                dark_primary: "#06223F",
                bg_light_primary: "#F5F9FD",
                gray: "#B7C5D3",
            },
            dropShadow: {
                primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
            },
            backgroundImage: {
            'hero-cover': "url('/resources/js/assets/images/hero-cover.jpg')",
            'hero-profile': "url('/resources/js/assets/images/hero-profile.jpg')",
          },
        },
    },
    plugins: [],
  }
