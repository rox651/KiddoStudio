import { Description, HeroAbout, SEO } from "../components";

export const About = () => {
   return (
      <>
         <SEO title={"Kiddo?"} description={""} />
         <section className=" px-5 lg:px-20 ">
            <HeroAbout />
            <Description />
         </section>
      </>
   );
};
