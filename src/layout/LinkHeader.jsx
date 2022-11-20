import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import { AppContext } from "../context";

export const LinkHeader = ({ link }) => {
   const { name, redir } = link;
   const { isDark } = useContext(AppContext);

   return (
      <NavLink
         className={({ isActive }) =>
            isActive
               ? `text-[#DF9EF4] text-center max-w-max relative font-normal  lg:min-h-5 lg:font-semibold lg:px-2 lg:overflow-hidden lg:rounded-xl  lg:border-[1px] lg:border-[#DF9EF4] `
               : `${
                    isDark ? "text-white" : "text-black"
                 } relative group hover:text-[#DF9EF4] font-normal lg:font-semibold transition-colors lg:min-h-5  lg:overflow-y-clip `
         }
         to={redir}
      >
         <span
            className={
               "text-7xl  lg:text-base lg:inline-block lg:group-hover:-translate-y-8 transition-transform"
            }
         >
            {name}
         </span>
         <span className="hidden lg:inline-block absolute left-0 translate-y-8 group-hover:translate-y-0 transition-transform">
            <BsArrowRightShort className="absolute -left-5 top-1" /> {name}
         </span>
      </NavLink>
   );
};
