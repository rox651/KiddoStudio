import { useContext } from "react";
import { AppContext } from "../context";
import { dataProjects } from "../data/dataProjects";

export const Projects = () => {
   // const [projectData, setProjectData] = useState([])
   const { data, isLoading } = useContext(AppContext);

   return (
      <main className="px-5 lg:px-20 ">
         {isLoading ? (
            <h1 className="text-white">cargando</h1>
         ) : (
            data?.result.map(elemet => <h1 className="text-white">{elemet.name}</h1>)
         )}
         {dataProjects.map((element, index) => {
            return (
               <section
                  key={index}
                  className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:h-[70vh] gap-3 mt-10 "
               >
                  {element.map((project, index) => {
                     return (
                        <article
                           key={index}
                           className={`${
                              index % 3 === 0 ? "col-span-1 row-span-2" : ""
                           } bg-red-500 w-full  h-[300px]  lg:h-full`}
                        >
                           {project.name}
                        </article>
                     );
                  })}
               </section>
            );
         })}
      </main>
   );
};
