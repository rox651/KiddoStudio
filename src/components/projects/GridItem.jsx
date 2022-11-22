import React from "react";

export const GridItem = ({ project, index }) => {
   const { isView, name } = project;
   return (
      <>
         {isView ? (
            <div className="col-span-1 row-span-2 bg-[#FF0000] w-full  lg:h-[500px] mb-5   ">
               {name}
            </div>  
         ) : (
            <div className={` bg-[#FF0000] w-full ${!((index + 1) % 3) ? "mb-5" : ""}`}>{name}</div>
         )}
      </>
   );
};
