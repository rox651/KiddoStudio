import { clsx } from "clsx";
import { urlFor } from "../../lib/sanity";

export const GridItem = ({ project, index }) => {
   const { isView, name, image } = project;

   const isDivisble = !((index + 1) % 3);

   const gridPrincipal = (
      <div
         className={`col-span-1 row-span-2  bg-[url(${urlFor(
            image
         ).url()})]  bg-cover bg-center text-white w-full min-h-[400px]  lg:h-[600px] lg:mb-5`}
      >
         <h3>{name}</h3>
         <p></p>
      </div>
   );

   const gridDefault = (
      <div
         className={clsx(
            isDivisble && "lg:mb-5",
            ` bg-[url(${urlFor(
               image
            ).url()})] bg-cover bg-center text-white   w-full h-[400px]  lg:h-auto `
         )}
      >
         <h3>{name}</h3>
         <p></p>
      </div>
   );

   return <>{isView ? gridPrincipal : gridDefault}</>;
};
