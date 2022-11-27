import { SEO } from "../common";

export const GridLoading = () => {
   return (
      <>
         <SEO title={"Loading Projects..."} />
         <div
            className={`col-span-1 row-span-2 bg-slate-800 w-full min-h-[400px]  lg:h-[600px] `}
         ></div>
         <div className={`text-white bg-slate-800 w-full h-[400px]   lg:h-auto`}></div>
         <div className={`text-white bg-slate-800 w-full h-[400px]   lg:h-auto `}></div>
      </>
   );
};
