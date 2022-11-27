import { useContext, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

import { AppContext } from "../../context";
import { navLinks } from "../../data";
import { Bars, Logo, Xmark } from "../common";
import { LinkHeader } from "./";

export const Header = () => {
   const { isDark, isOpen } = useContext(AppContext);

   const path = useLocation().pathname;
   const isValidPath = useMemo(
      () => navLinks.map(link => link.redir == path).some(link => link == true),
      [path]
   );

   const phraseForURL = useMemo(() => navLinks.filter(link => link.redir == path)[0], [path]);
   return (
      <>
         <header
            className={clsx(
               !isValidPath && "lg:hidden",
               path === "/" && " border-[#70707067] border-b-2",
               " px-5 lg:px-20 pt-12 pb-8 w-full   "
            )}
         >
            <div className="max-w-7xl mx-auto flex justify-between items-center relative">
               <Link to="/">
                  <Logo />
               </Link>
               <div
                  className={clsx(
                     isDark && "text-white",
                     "hidden lg:flex absolute right-[230px] items-end gap-4 h-full"
                  )}
               >
                  <h2 className="font-[Fixture] text-8xl">{phraseForURL?.phrase?.title}</h2>
                  <p className=""> {phraseForURL?.phrase?.text}</p>
               </div>
               <nav
                  className={clsx(
                     isOpen && " invisible lg:visible",
                     isDark ? "bg-black" : "bg-white",
                     "   px-5 flex   flex-col justify-center fixed  left-0 top-0 w-full h-screen z-20  font-[Fixture] lg:font-[CabinetGrotesk-Extralight] lg:px-0 lg:relative lg:h-auto lg:w-auto  lg:grid lg:grid-cols-2 lg:gap-y-3 "
                  )}
               >
                  <Xmark />
                  {navLinks.map(link => (
                     <LinkHeader key={link.name} link={link} />
                  ))}
               </nav>
               <Bars />
            </div>
         </header>

         <Link
            to="/projects"
            className={clsx(
               !isValidPath && "lg:block",
               "hidden absolute text-black font-black text-2xl top-20 -rotate-90"
            )}
         >
            Get Back
         </Link>
      </>
   );
};
