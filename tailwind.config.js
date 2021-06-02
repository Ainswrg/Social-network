module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      
      extend: {
         animation: {
            custom: 'custom 1s cubic-bezier(0.88, 0.19,0.37, 1.11 ) 1; ',
         },
         keyframes: {
            custom: {
               "0%": { transform: "rotate(0deg)" },
               "100%": { transform: "rotate(360deg)" },
            },
         },
         maxWidth: {
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            'cst': "93%",
         },
         minWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'cst': '215px',
         },
      },

      variants: {
         extend: {
            animation: {
               custom: 'custom 1s cubic-bezier(0.88, 0.19,0.37, 1.11 ) 1; ',
            },
            keyframes: {
               custom: {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
               },
            },
         },
      },
      plugins: [],
   },
};
