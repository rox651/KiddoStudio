import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Projects, GetInTouch } from "../pages";
import { GridProject, Project } from "../components";
import { AnimatePresence } from "framer-motion";

export const AppRoutes = () => {
   const location = useLocation();
   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />}>
               <Route index element={<GridProject />} />
               <Route path=":slug" element={<Project />} />
            </Route>
            <Route path="contact" element={<GetInTouch />} />
         </Routes>
      </AnimatePresence>
   );
};
