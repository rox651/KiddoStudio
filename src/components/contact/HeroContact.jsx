import { BehanceIcon, DribbleIcon, FacebookIcon, InstagramIcon, SpotifyIcon } from "../common";

export const HeroContact = () => {
   return (
      <main className="space-y-6 grid place-items-center px-5  pb-5 lg:p-0 min-h-[80vh] ">
         <h1 className="text-center text-[7rem] leading-none lg:text-[10rem]  xl:text-[14rem] text-white font-[Fixture] ">
            Let’s start your project
         </h1>
         <a className="text-center block text-2xl text-white lg:hidden" href="#">
            New business?<br></br> We want to meet you!
         </a>
         <section className=" text-center lg:space-y-5">
            <a
               className="block text-[2.1rem] lg:text-6xl xl:text-7xl text-white font-semibold"
               href="mailto:gutt@kiddoestudio.com"
            >
               gutt@kiddoestudio.com
            </a>
            <a
               className="block text-[2.1rem] lg:text-6xl xl:text-7xl text-white  font-semibold"
               href="tel:573005593515"
            >
               +57 300 559 3515
            </a>
         </section>
         <footer className="flex gap-7 flex-col lg:flex-row text-white items-center">
            <h3 className=" font-black text-xl xl:text-3xl">What are you waiting for?</h3>
            <article className="flex  items-center gap-10  ">
               <BehanceIcon />
               <InstagramIcon />
               <SpotifyIcon />
               <FacebookIcon />
               <DribbleIcon />
            </article>
         </footer>
      </main>
   );
};
