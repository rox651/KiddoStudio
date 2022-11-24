import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/sanity";

export const GridItem = ({ project, index }) => {
   const { isView, name, image, slug } = project;
   const isDivisble = !((index + 1) % 3);

   return (
      <div
         className={clsx(
            isDivisble && "lg:mb-5",
            isView
               ? "col-span-1 row-span-2  min-h-[400px] lg:h-[600px] lg:mb-5"
               : "h-[400px]  lg:h-[296px]",
            `text-white  w-full  relative flex justify-center flex-col `
         )}
      >
         <img src={urlFor(image).url()} className="h-full w-full object-cover" alt="" />
         <h3 className="absolute -rotate-90 px-5 tracking-widest text-black font-black underline">
            {name}
         </h3>
         <Link
            to={`/projects/${slug?.current}`}
            className="absolute rotate-90  right-0 px-5 tracking-widest text-black font-black underline"
         >
            Check this out
         </Link>
      </div>
   );
};
