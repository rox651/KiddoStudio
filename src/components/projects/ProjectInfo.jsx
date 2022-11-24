import clsx from "clsx";
import { useState } from "react";
import { urlFor } from "../../lib/sanity";

export const ProjectInfo = ({ data }) => {
   const { name, images, description } = data[0];

   const [isOpenModal, setIsOpenModal] = useState(false);

   const toggleModal = () => {
      setIsOpenModal(!isOpenModal);
   };
   return (
      <>
         {images.map((image, index) => {
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
         <article className="text-white row-start-2 lg:col-start-3 lg:col-end-5 p-8 ">
            <h1 className="font-[Fixture] text-7xl mb-8">{name}</h1>
            <p className="lg:text-lg ">{description.slice(0, 250)}...</p>
            <button className="font-[Fixture] text-7xl float-right" onClick={toggleModal}>
               info
            </button>
         </article>
         <div
            className={clsx(
               !isOpenModal ? "opacity-0 hidden" : "opacity-1",
               " top-0 z-10 fixed w-full h-full px-5 lg:p-20"
            )}
         >
            <span
               onClick={toggleModal}
               className="inset-0 absolute w-full h-full bg-[#000000e6] z-0"
            ></span>
            <h2 className="font-[Fixture] text-[9rem] mb-3 relative z-20 max-w-max">{name}</h2>
            <p className="lg:text-lg relative z-20">{description}</p>
         </div>
      </>
   );
};
