module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      
      boxShadow: {
         sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
         DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
         md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
         lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
         xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
         '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
         '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
         inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
         cst:  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
         none: 'none',
      },
      
      extend: {
         colors: {
            primary: "#fff",
            theme: "#BE185D",
            light: "#f6f7f9",
            light1: "#F3F4F6",
            light2: "#E5E7EB",
            light3: "#f4f3f8",
            dark1: "#1F2937",
            dark2: "#4B5563",
            dark3: "#9CA3AF",
            red1: "#DC2626",
            blue1: "#4169E1",
            blue2: "#ebe7fb",
            gray1: "#656565",
         },
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
            '1000': '1000px'
         },
         minWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'cst': '215px',
         },
         minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'cst': '35px',
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
