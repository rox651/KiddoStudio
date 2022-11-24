import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import { LinkFooter } from "./LinkFooter";

export const Footer = () => {
   return (
      <footer className="text-center text-white bg-black  px-5 lg:px-20">
         <section className=" grid grid-cols-3  max-w-7xl mx-auto py-32 ">
            <article className=" grid col-start-1 col-end-3 gap-16 ">
               <h2 className="relative text-[8rem]  transition-colors hover:text-[#DF9EF4] group leading-[0.7] font-[Fixture] lg:text-[12rem]   xl:text-[12rem] text-start">
                  <Link to="/">Back to home</Link>
               </h2>
               <div>
                  <h3 className="font-[Fixture] text-start text-7xl">Get in touch</h3>
                  <a className="block text-start font-semibold" href="mailto:gutt@kiddoestudio.com">
                     gutt@kiddoestudio.com
                  </a>
                  <a className="block text-start font-semibold" href="tel:573005593515">
                     +57 300 559 3515
                  </a>
                  <p className="text-start font-semibold mt-16">
                     © 2022 Kiddo branding riot studio <br></br>Cali, Colombia
                  </p>
               </div>
            </article>

            <article className="flex flex-col col-start-3  text-start">
               {navLinks.map(link => (
                  <LinkFooter key={link.name} link={link} />
               ))}

               <div className="flex justify-between mt-20">
                 
               </div>
            </article>
         </section>
      </footer>
   );
};
