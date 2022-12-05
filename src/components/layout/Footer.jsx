import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data";
import { LinkFooter } from "./LinkFooter";
import {
   BehanceIcon,
   DribbleIcon,
   FacebookIcon,
   InstagramIcon,
   MotionRoute,
   SpotifyIcon,
   Stamp,
} from "../common";

export const Footer = () => {
   const path = useLocation().pathname;
   return (
      <AnimatePresence>
         <MotionRoute>
            <footer
               className={clsx(
                  path === "/contact" && "hidden",
                  "text-center text-white bg-black   lg:px-20"
               )}
            >
               <section className=" grid lg:grid-cols-3   max-w-7xl mx-auto py-10  lg:py-10 ">
                  <article className=" grid col-start-1 col-end-3 ">
                     <h2 className="px-5 lg:px-0 relative text-[7rem] sm:text-center transition-colors hover:text-[#DF9EF4] group leading-[0.7] font-[Fixture] lg:text-[12rem] lg:text-start  xl:text-[12rem] text-start">
                        <Link to="/">Back to home</Link>
                     </h2>
                     <section className="lg:w-11/12 overflow-hidden mt-16 lg:mt-0">
                        <div className="bgTextFooter flex items-center gap-0 text-white w-[979px] lg:w-[1431px]  bg-center animate-textSlideFooterMobile  lg:animate-textFooterSlide h-[48px] lg:h-[71px] bg-white"></div>
                     </section>
                     <div className="px-5 lg:px-0 space-y-4 lg:space-y-2">
                        <h3 className="font-[Fixture] leading-none sm:text-center text-start text-[7rem] lg:text-start lg:text-7xl">
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
                        <p className="hidden lg:block text-base text-start font-semibold pt-8">
                           © 2022 Kiddo branding riot studio <br className="hidden lg:block"></br>
                           Cali, Colombia
                        </p>
                     </div>
                  </article>

                  <nav className="hidden lg:flex flex-col col-start-3 px-5 lg:px-0   text-start">
                     {navLinks.map(link => (
                        <LinkFooter key={link.name} link={link} />
                     ))}

                     <article className="flex items-center mt-10 justify-between  ">
                        <BehanceIcon />
                        <InstagramIcon />
                        <SpotifyIcon />
                        <FacebookIcon />
                        <DribbleIcon />
                     </article>
                     <div className="grid place-items-center mt-16">
                        <Stamp />
                     </div>
                  </nav>
                  <article
                     className="lg:hidden flex px-5 lg:px-0 
                  col-start-1 col-end-3   items-center mt-10 justify-between  "
                  >
                     <BehanceIcon />
                     <InstagramIcon />
                     <SpotifyIcon />
                     <FacebookIcon />
                     <DribbleIcon />
                  </article>
                  <p className="text-center text-sm lg:hidden col-span-2 pt-10 font-semibold">
                     © 2022 Kiddo branding riot studio <br className="hidden lg:block"></br>
                     Cali, Colombia
                  </p>
               </section>
            </footer>
         </MotionRoute>
      </AnimatePresence>
   );
};
