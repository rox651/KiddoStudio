import { BehanceIcon, DribbleIcon, FacebookIcon, InstagramIcon, SpotifyIcon } from "../common";
import TextsImgContact from "../../assets/text-mobile-img.png";

export const HeroContact = () => {
   return (
      <main className="space-y-8 lg:grid lg:place-items-center sm:min-h-[90vh] py-12   pb-5  lg:py-0 lg:pb-10 lg:px-0 lg:min-h-min ">
         <h1 className="text-white lg:hidden text-6xl text-start px-5 font-semibold">
            Get in touch
         </h1>
         <h2 className=" px-5 text-center text-[7rem] leading-none lg:text-[10rem]  xl:text-[14rem] text-white font-[Fixture] ">
            Let’s start your project
         </h2>
         <a className=" text-center block text-2xl text-white lg:hidden" href="#">
            New business?<br></br> We want to meet you!
         </a>
         <section className="w-full overflow-hidden">
            <div className="bgText flex items-center gap-0 text-white w-[1520px] lg:w-[2400px] bg-center animate-textSlideMobile  lg:animate-textSlide h-[44px] lg:h-[69px] bg-[#DF9EF4]"></div>
         </section>

         <section className=" text-center lg:space-y-5 ">
            <a 
               className="max-[380px]:text-2xl px-5 block text-[2.1rem] lg:text-6xl xl:text-7xl text-white font-semibold transition-colors hover:text-[#DF9EF4]"
               href="mailto:gutt@kiddoestudio.com"
            >
               gutt@kiddoestudio.com
            </a>
            <a
               className="max-[380px]:text-2xl  px-5 block text-[2.1rem] lg:text-6xl xl:text-7xl text-white  font-semibold transition-colors hover:text-[#DF9EF4]"
               href="tel:573005593515"
            >
               +57 300 559 3515
            </a>
         </section>
         <footer className="px-5 flex gap-7 flex-col lg:flex-row text-white items-center">
            <h3 className=" font-black text-xl xl:text-3xl">What are you waiting for?</h3>
            <article className="flex  items-center gap-10   justify-center flex-wrap">
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
