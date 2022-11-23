import { formatData, orderData } from "../../helpers";
import { useFetch } from "../../hooks/useFetch";
import { GridItem } from "./GridItem";

export const GridProject = () => {
   const { data, isLoading } = useFetch('*[_type == "product"]');

   return (
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2  gap-2  mt-8 ">
         {isLoading ? (
            <h1 className="text-white">cargando</h1>
         ) : (
            formatData({ repeat: 3, data: orderData(data) }).map((project, index) => (
               <GridItem key={project.name} project={project} index={index} />
            ))
         )}
      </section>
   );
};
