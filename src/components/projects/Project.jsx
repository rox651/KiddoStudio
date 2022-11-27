import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLoading } from "./ProjectLoading";

export const Project = () => {
   const { slug } = useParams();
   const { data, isLoading } = useFetch(`*[slug.current == "${slug}"]`);

   return (
      <section className="text-white  grid lg:grid-cols-4 gap-3">
         {isLoading ? <ProjectLoading /> : <ProjectInfo data={data} />}
      </section>
   );
};
