import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import { LinkFooter } from "./LinkFooter";

export const Footer = () => {
   return (
      <footer className="text-center text-white bg-black  px-5 lg:px-20">
         <section className=" grid lg:grid-cols-3  max-w-7xl mx-auto py-16  lg:py-32 ">
            <article className=" grid col-start-1 col-end-3 lg:gap-16 ">
               <h2 className="relative text-[7rem] sm:text-center  transition-colors hover:text-[#DF9EF4] group leading-[0.7] font-[Fixture] lg:text-[12rem]   lg:text-start  xl:text-[12rem] text-start">
                  <Link to="/">Back to home</Link>
               </h2>
               <div>
                  <h3 className="font-[Fixture] sm:text-center text-start text-[7rem] lg:text-start lg:text-7xl">
                     Get in touch
                  </h3>
                  <a
                     className="block  text-3xl sm:text-center lg:text-start lg:text-base text-start font-semibold"
                     href="mailto:gutt@kiddoestudio.com"
                  >
                     gutt@kiddoestudio.com
                  </a>
                  <a
                     className="block  text-3xl sm:text-center lg:text-start lg:text-base text-start font-semibold"
                     href="tel:573005593515"
                  >
                     +57 300 559 3515
                  </a>
                  <p className="text-center text-sm lg:text-base lg:text-start font-semibold mt-16">
                     © 2022 Kiddo branding riot studio <br className="hidden lg:block"></br>Cali, Colombia
                  </p>
               </div>
            </article>

            <nav className="hidden lg:flex flex-col col-start-3  text-start">
               {navLinks.map(link => (
                  <LinkFooter key={link.name} link={link} />
               ))}

               <div className="flex justify-between mt-20"></div>
            </nav>
         </section>
      </footer>
   );
};
