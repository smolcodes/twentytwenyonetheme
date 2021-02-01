
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ['Palanquin', 'sans-serif'],
        serif: ['Bitter', 'serif'],
    },
    typography: {
      DEFAULT: {
        css: {
          "code::before": false,
          "code::after": false,
          "blockquote p:first-of-type::before": false,
          "blockquote p:last-of-type::after": false,
          color: '#333',
          strong: {
            color: '#EF4444',
          },
          i: {
              fontWeight: '700',
              color: '#2563EB',
              fontFamily: 'Bitter',
          },
          h1: {
             fontFamily: 'Bitter',
          },
          h2: {
            fontFamily: 'Bitter',
         },
         h3: {
          fontFamily: 'Bitter',
          },
          h4: {
            fontFamily: 'Bitter',
         },
          a: {
            backgroundColor: '#FFFBEB',
            fontWeight: '700',
            color: '#6B7280',
            transition: '1s',
            borderRadius: '5px',
            padding:'3px 6px',
            '&:hover': {
            background: '#FEF2F2',
            color: '#EF4444',
            },
          },
          blockquote: {
            borderLeftColor: '#F59E0B',
            borderLeftWidth: '4px',
            padding: '10px',
            color: '#4B5563',
            backgroundColor: '#FFFBEB',
            borderRadius: '10px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
           },
           code: {
             backgroundColor: '#E5E7EB',
             borderRadius: '5px',
             padding:'3px 6px',
           },
           pre: {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
           code: {
            backgroundColor: 'transparent',
            borderRadius: '5px',
            padding:'none',
            whiteSpace: 'pre-wrap',
          },
        },
        img: {
            borderRadius: '5px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        },
      },
    },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
};