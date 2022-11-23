import { clsx } from "clsx";
import { urlFor } from "../../lib/sanity";

export const GridItem = ({ project, index }) => {
   const { isView, name, image } = project;

   const isDivisble = !((index + 1) % 3);

   const gridPrincipal = (
      <div
         className={`col-span-1 row-span-2  text-white w-full min-h-[400px]  lg:h-[600px] lg:mb-5`}
      >
         <img src={urlFor(image).url()} className="h-full w-full object-cover" alt="" />
      </div>
   );

   const gridDefault = (
      <div className={clsx(isDivisble && "lg:mb-5", `text-white   w-full h-[400px]  lg:h-[296px] `)}>
         <img src={urlFor(image).url()} className="h-full w-full object-cover" alt="" />
      </div>
   );

   return <>{isView ? gridPrincipal : gridDefault}</>;
};
