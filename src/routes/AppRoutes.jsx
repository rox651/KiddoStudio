import { Routes, Route } from "react-router-dom";
import { Home, About, Projects } from "../pages";
import { GridProject, Project } from "../components";

export const AppRoutes = () => {
   return (
      <Routes>
         <Route index path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="projects" element={<Projects />}>
            <Route index element={<GridProject />} />
            <Route path=":slug" element={<Project />} />
         </Route>
      </Routes>
   );
};
