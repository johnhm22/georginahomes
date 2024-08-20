import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   body: ['var(--font-nunito-sans)'],
      //   display: ['var(--font-nunito)']
      // }
      backgroundImage: {
        'contact-us':
          "url('https://images.prismic.io/georginahomes/ZsMK4kaF0TcGJC7V_adam-winger-t4oVP2xFMJ8-unsplash.jpg?auto=format,compress')"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5 rem',
        lg: '2 rem'
      }
    }
  },

  plugins: []
};

export default config;
