import { clsx } from "clsx";
import { formatData, orderData } from "../../helpers";
import { useFetch } from "../../hooks/";
import { GridItem } from "./";
import { GridLoading } from "./";

export const GridProject = () => {
   const { data, isLoading } = useFetch('*[_type == "product"]');

   const skeletonClass =
      "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg overflow-hidden before:animate-[shimmer_0.8s_infinite]";

   return (
      <>
         <section
            className={clsx(
               isLoading && skeletonClass,
               "max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-2  mt-8 relative "
            )}
         >
            <h1
               className={clsx(
                  isLoading && "hidden",
                  "text-white lg:hidden text-6xl px-5 font-semibold"
               )}
            >
               Check this out to blow your mind
            </h1>

            {isLoading ? (
               <GridLoading />
            ) : (
               formatData({ repeat: 3, data: orderData(data) }).map((project, index) => (
                  <GridItem key={project.name} project={project} index={index} />
               ))
            )}
         </section>
      </>
   );
};
