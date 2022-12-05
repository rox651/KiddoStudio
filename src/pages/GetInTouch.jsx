import { HeroContact, MotionRoute, SEO } from "../components";

export const GetInTouch = () => {
   return (
      <MotionRoute>
         <SEO title={"Get in Touch"} description={""} />
         <HeroContact />
      </MotionRoute>
   );
};
