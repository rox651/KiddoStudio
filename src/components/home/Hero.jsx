import { FiArrowLeft } from "react-icons/fi";
import { TfiEye } from "react-icons/tfi";
import { Link } from "react-router-dom";
export const Hero = () => {
   return (
      <section className=" px-5 h-[70vh] lg:px-20 md:h-[70vh]">
         <div className=" max-w-7xl h-full  grid sm:mx-auto sm:justify-center  md:grid-cols-2  lg:justify-start items-center ">
            <article className=" order-2 md:order-1">
               <img className="" src="" alt="gif" />
            </article>
            <article className="order-1 md:order-2">
               <h2 className=" relative text-[8rem]  transition-colors hover:text-[#DF9EF4] group leading-[0.7] font-[Fixture] lg:text-[12rem]   xl:text-[16rem]">
                  <Link to="/projects">
                     Let’s
                     <span className="absolute text-4xl top-14 left-36 font-light h-24 overflow-y-clip lg:top-16 lg:left-52  lg:text-7xl xl:text-8xl xl:top-24 xl:left-64  ">
                        <FiArrowLeft className=" absolute group-hover:-translate-y-24 transition-transform" />
                        <TfiEye className=" absolute translate-y-24 group-hover:translate-y-0 transition-transform" />
                     </span>
                     <br />
                     start a riot
                  </Link>
               </h2>
            </article>
         </div>
      </section>
   );
};
