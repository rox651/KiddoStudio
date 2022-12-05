import { useState } from "react";
import clsx from "clsx";

export const ProjectModal = ({ data }) => {
   const { name, description } = data;
   const [isOpenModal, setIsOpenModal] = useState(false);

   const toggleModal = () => {
      setIsOpenModal(!isOpenModal);
   };
   return (
      <>
         <article className="text-white row-start-1 flex flex-col  justify-center lg:row-start-2 lg:col-start-3 lg:col-end-5 p-8 ">
            <h1 className="font-[Fixture] text-7xl mb-8">{name}</h1>
            <p className="lg:text-lg ">{description.slice(0, 250)}...</p>
            <button className="font-[Fixture] text-7xl self-end " onClick={toggleModal}>
               info
            </button>
         </article>
         <div
            className={clsx(
               !isOpenModal ? "opacity-0 hidden" : "opacity-1",
               " top-0 z-10 fixed w-full h-full grid place-items-center place-content-center gap-3 lg:place-items-start px-5 lg:p-20"
            )}
         >
            <span
               onClick={toggleModal}
               className="inset-0 absolute w-full h-full bg-[#000000e6] z-0"
            ></span>
            <h2 className="font-[Fixture] text-7xl lg:text-[9rem] mb-3 relative z-20 max-w-max">
               {name}
            </h2>
            <p className=" text-base lg:text-lg leading-loose lg:leading-normal relative z-20">
               {description}
            </p>
         </div>
      </>
   );
};
