import { useContext } from "react";
import { AppContext } from "../../../context";

export const Bars = () => {
   const { isDark, openMenu } = useContext(AppContext);

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke={isDark ? "#fff" : "#000"}
         className="w-8 h-8 cursor-pointer lg:hidden"
         onClick={openMenu}
      >
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
   );
};
