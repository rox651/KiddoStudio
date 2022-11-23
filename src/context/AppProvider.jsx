import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { client } from "../lib/sanity";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
   //get path
   const path = useLocation().pathname;
   //color conditional
   const isDark = useMemo(() => path !== "/" && path !== "/about", [path]);
   //open or close menu state
   const [isOpen, setIsOpen] = useState(true);

   const openMenu = () => {
      setIsOpen(!isOpen);
   };

   const contextValue = {
      path,
      openMenu,
      isOpen,
      isDark,
   };

   return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
