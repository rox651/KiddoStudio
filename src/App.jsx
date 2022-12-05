import clsx from "clsx";

import { useContext, useEffect } from "react";
import { AppContext } from "./context/";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer, Header } from "./components";
import { useLocation } from "react-router-dom";

export const App = () => {
   const { isDark } = useContext(AppContext);
   const path = useLocation().pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [path]);
   return (
      <div
         className={clsx(
            isDark && "bg-black",
            ` transition-colors duration-700 relative min-h-screen  overflow-hidden`
         )}
      >
         <Header />
         <AppRoutes />

         {path !== "/" && <Footer />}
      </div>
   );
};
