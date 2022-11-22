import React from "react";

export const GridItem = ({ project, index }) => {
   const { isView, name } = project;


   const isDivisble = !((index + 1) % 3)

   const gridPrincipal = (
      <div className="col-span-1 row-span-2 bg-[#FF0000] w-full min-h-[400px]  lg:h-[500px] lg:mb-5   ">{name}</div>
   );

   const gridDefault = (
      <div className={` bg-[#FF0000] w-full h-[400px]  lg:h-auto ${isDivisble ? "lg:mb-5 " : ""}`}>{name}</div>
   );

   return <>{isView ? gridPrincipal : gridDefault}</>;
};
