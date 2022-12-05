import { SEO } from "../common";

export const ProjectLoading = () => {
   return (
      <>
         <SEO title={"Loading..."} description={"Loading..."} />
         <div className="h-screen fixed inset-0 bg-black z-50 text-3xl lg:text-5xl grid place-items-center col-span-full">
            Loading project...
         </div>
      </>
   );
};
