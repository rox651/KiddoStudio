import { useContext } from "react";
import { AppContext } from "../../../context";

export const Xmark = () => {
   const { openMenu } = useContext(AppContext);

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="#DF9EF4"
         className="w-8 h-8 absolute top-10 right-5 cursor-pointer lg:hidden "
         onClick={openMenu}
      >
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
   );
};
