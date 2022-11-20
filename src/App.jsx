import { useContext } from "react";

import { AppContext } from "./context/AppContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer, Header } from "./layout/";
import clsx from "clsx";

export const App = () => {
   const { isDark } = useContext(AppContext);
   return (
      <div className={clsx(isDark && "bg-black", `relative min-h-screen`)}>
         <Header />
         <AppRoutes />
         <Footer />
      </div>
   );
};
