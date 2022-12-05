import { Hero, MotionRoute, SEO } from "../components/";
export const Home = () => {
   return (
      <MotionRoute>
         <SEO title={"Kiddo Studio"} description={""} />
         <Hero />
      </MotionRoute>
   );
};
