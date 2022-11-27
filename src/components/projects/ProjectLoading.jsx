import { SEO } from "../common";

export const ProjectLoading = () => {
   return (
      <>
         <SEO title={"Loading..."} description={"Loading..."} />
         <div className="h-[400px] lg:h-screen text-3xl lg:text-5xl grid place-items-center col-span-full">
            Loading project...
         </div>
      </>
   );
};
