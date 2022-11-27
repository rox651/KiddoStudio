import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";
import { SEO } from "../components";

export const Projects = () => {
   const path = useLocation().pathname;

   return (
      <>
         <SEO title={"Projects"} description={""} />
         <main className={clsx(path == "/projects" && "lg:px-20 ")}>
            <Outlet />
         </main>
      </>
   );
};
