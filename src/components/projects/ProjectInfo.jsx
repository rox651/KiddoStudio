import clsx from "clsx";
import { urlFor } from "../../lib/sanity";
import { SEO } from "../common";
import { ProjectModal } from "./ProjectModal";

export const ProjectInfo = ({ data }) => {
   const { name, images, description } = data[0];

   return (
      <>
         <SEO title={`${name} | Kiddo Studio`} description={description} />
         {images &&
            images.map((image, index) => {
               return (
                  <img
                     key={image._key}
                     className={clsx(
                        5 % (index + 1) === 0 ? " lg:col-span-4" : "lg:col-span-2",
                        "w-full h-full object-cover"
                     )}
                     src={urlFor(image).url()}
                  />
               );
            })}
         <ProjectModal data={data[0]} />
      </>
   );
};
