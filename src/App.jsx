import { useContext } from "react";

import { AppContext } from "./context/";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer, Header } from "./components";
import clsx from "clsx";

export const App = () => {
   const { isDark, path } = useContext(AppContext);
   return (
      <div className={clsx(isDark && "bg-black", `relative min-h-screen`)}>
         <Header />
         <AppRoutes />
         {path !== "/" && <Footer />}
      </div>
   );
};
