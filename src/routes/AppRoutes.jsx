import { Routes, Route } from "react-router-dom";
import { Home, About, Projects } from "../pages";

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="projects" element={<Projects />} />
      </Routes>
   );
};
