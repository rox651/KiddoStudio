import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/sanity";

export const GridItem = ({ project, index }) => {
   const { isView, name, image, slug } = project;
   const isDivisble = !((index + 1) % 3);

   const imageURL = urlFor(image).url();
   return (
      <div
         className={clsx(
            isDivisble && "lg:mb-5",
            isView
               ? "col-span-1 row-span-2  min-h-[400px] lg:h-[600px] lg:mb-5 "
               : "h-[400px]  lg:h-[296px]",
            `text-white  w-full  relative flex justify-center flex-col group before:opacity-0 hover:before:opacity-100  before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00000094]  before:via-transparent before:to-[#00000094] before:transition-opacity`
         )}
      >
         <img src={imageURL} className="h-full w-full object-cover " alt="" />
         <h3 className="absolute -rotate-90 px-5 tracking-widest text-white font-black left-0 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity ">
            {name}
         </h3>
         <Link
            to={`/projects/${slug?.current}`}
            className="absolute rotate-90  right-0 px-5 tracking-widest text-white font-black hover:underline opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity "
         >
            Check this out
         </Link>
      </div>
   );
};
