import { Description, HeroAbout, MotionRoute, SEO } from "../components";

export const About = () => {
   return (
      <MotionRoute>
         <SEO title={"Kiddo?"} description={""} />
         <section className=" px-5 lg:px-20 ">
            <HeroAbout />
            <Description />
         </section>
      </MotionRoute>
   );
};
