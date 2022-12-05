/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      keyframes: {
         shimmer: {
            "100%": { transform: "translateX(100%)" },
         },
         slide: {
            to: { backgroundPosition: "2400px" },
         },
         slideMobile: {
            to: { backgroundPosition: "1520px" },
         },
         slideFooter: {
            to: { backgroundPosition: "1434px" },
         },
         slideFooterMobile: {
            to: { backgroundPosition: "979px" },
         },
      },
      animation: {
         textSlide: "slide 10s linear infinite",
         textSlideMobile: "slideMobile 10s linear infinite",
         textFooterSlide: "slideFooter 10s linear infinite",
         textSlideFooterMobile: "slideFooterMobile 10s linear infinite",
      },
   },
   plugins: [],
};
