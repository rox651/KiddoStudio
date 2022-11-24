import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";
import { GridProject } from "../components/";

export const Projects = () => {
   const path = useLocation().pathname;

   return (
      <main className={clsx(path == "/projects" && "lg:px-20 ")}>
         <Outlet />
      </main>
   );
};
