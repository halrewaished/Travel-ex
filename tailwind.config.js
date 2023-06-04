/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        orangeColor: "#FA793C",
        whiteColor: "#FFFFFF",
      },
      fontFamily: {
        title: "ABeeZee-Regular",
        subTitle: "Kanit-Regular",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        pic1: "url('/public/assets/images/Rectangle 1.png')",
        pic2: "url('/public/assets/images/Rectangle 6.png')",
        pic3: "url('/public/assets/images/Rectangle 9.png')",
        pic4: "url('/public/assets/images/Rectangle 11.png')",
        pic5: "url('/public/assets/images/Rectangle 12.png')",
        pic6: "url('/public/assets/images/Rectangle 13.png')",
        pic7: "url('/public/assets/images/Rectangle 15.png')",
        pic8: "url('/public/assets/images/Rectangle 17.png')",
        pic9: "url('/public/assets/images/Rectangle 19.png')",
      },
    },
  },
  plugins: [],
}
