/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': {min: '320px', max: '820px'},
      // => @media (min-width: 640px) { ... }

      'md': {min: '821px', max: '1024px'},
      // => @media (min-width: 1024px) { ... }

      'lg': {min: '1025px', max: '1280px'},
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        "ppWhite": "#FFFFFF",
        "ppBlack": "#2A3547",
        "ppBlue": "#5D87FF",
        "ppGray": "#5A6A85",
        "ppLightGray": "#7C8FAC",
        "ppVeryLightGray": "#868EAB",
        "ppHoverBlue": "#539BFF",
        "ppMoveBlue": "#4673F4",
      },
    },
  },
  plugins: [],
};
