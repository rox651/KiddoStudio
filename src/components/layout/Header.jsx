import { useContext, useMemo } from "react";
import { clsx } from "clsx";

import { AppContext } from "../../context";
import { LinkHeader } from "./";
import { navLinks } from "../../data";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
   const { isDark, isOpen, openMenu } = useContext(AppContext);

   const path = useLocation().pathname;
   const isValidPath = useMemo(
      () => navLinks.map(link => link.redir == path).some(link => link == true),
      [path]
   );

   return (
      <>
         {isValidPath ? (
            <header className=" px-5 lg:px-20 py-9 w-full  border-b-2 border-[#70707067]">
               <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <Link to="/">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="128.827"
                        height="37.55"
                        viewBox="0 0 128.827 37.55"
                        className=" cursor-pointer"
                        fill={isDark ? "#fff" : "#000"}
                     >
                        <g
                           id="Grupo_131"
                           data-name="Grupo 131"
                           transform="translate(-253.07 -451.141)"
                        >
                           <g
                              id="Grupo_129"
                              data-name="Grupo 129"
                              transform="translate(375.876 461.642)"
                           >
                              <path
                                 id="Trazado_190"
                                 data-name="Trazado 190"
                                 d="M836.8,501.388h-2.5v-.546h2.5Zm-.943,2.547h-.6v-3.093h.6Zm1.985,0h-.579v-3.093h.711l.6,1.274.232.695.232-.695.562-1.274h.728v3.093h-.579v-1.307l.1-1.224-.265.695-.463,1.075h-.645L838,502.1l-.281-.695.116,1.24Z"
                                 transform="translate(-834.298 -500.842)"
                              />
                           </g>
                           <g
                              id="Grupo_130"
                              data-name="Grupo 130"
                              transform="translate(253.07 451.141)"
                           >
                              <path
                                 id="Trazado_191"
                                 data-name="Trazado 191"
                                 d="M257.033,451.141v29.913a22.371,22.371,0,0,1,2.033-6.789c3.343-7.065,9.959-12.647,15.783-12.647v4.859c-5.927,0-9.167,1.447-11.717,4l11.889,17.61H270.06l-9.58-14.2a15.977,15.977,0,0,0-1.068,2,27.484,27.484,0,0,0-2.378,12.2H253.07V451.141Z"
                                 transform="translate(-253.07 -451.141)"
                              />
                              <path
                                 id="Trazado_192"
                                 data-name="Trazado 192"
                                 d="M387.685,456.875h-3.694v-5.734h3.694Zm0,31.209h-3.694V461.562h3.694Z"
                                 transform="translate(-356.329 -451.141)"
                              />
                              <path
                                 id="Trazado_193"
                                 data-name="Trazado 193"
                                 d="M437.056,488.691a10.146,10.146,0,0,1-5.9-1.709,10.812,10.812,0,0,1-3.8-4.825,20.9,20.9,0,0,1,0-14.64,10.84,10.84,0,0,1,3.8-4.8,10.144,10.144,0,0,1,5.9-1.709,8.272,8.272,0,0,1,4.88,1.378,9.064,9.064,0,0,1,3,3.584,12.737,12.737,0,0,1,1.213,4.631l-.276,1.875a10,10,0,0,0-.827-4.08,7.273,7.273,0,0,0-2.509-3.06,7.347,7.347,0,0,0-4.328-1.186,7.815,7.815,0,0,0-5.983,2.591q-2.4,2.592-2.4,8.105,0,5.459,2.426,8.078a7.8,7.8,0,0,0,5.955,2.619,7.475,7.475,0,0,0,4.328-1.158,7.113,7.113,0,0,0,2.509-3,9.8,9.8,0,0,0,.827-4.053l.276,1.764a12.589,12.589,0,0,1-1.213,4.659,9.187,9.187,0,0,1-2.977,3.557A8.246,8.246,0,0,1,437.056,488.691Zm12.517-.607h-3.694V451.141h3.694Z"
                                 transform="translate(-389.484 -451.141)"
                              />
                              <path
                                 id="Trazado_194"
                                 data-name="Trazado 194"
                                 d="M580.506,488.691a10.146,10.146,0,0,1-5.9-1.709,10.813,10.813,0,0,1-3.8-4.825,20.906,20.906,0,0,1,0-14.64,10.841,10.841,0,0,1,3.8-4.8,10.144,10.144,0,0,1,5.9-1.709,8.271,8.271,0,0,1,4.879,1.378,9.065,9.065,0,0,1,3.005,3.584A12.733,12.733,0,0,1,589.6,470.6l-.276,1.875a10,10,0,0,0-.827-4.08,6.958,6.958,0,0,0-6.837-4.246,7.815,7.815,0,0,0-5.982,2.591q-2.4,2.592-2.4,8.105,0,5.459,2.426,8.078a7.8,7.8,0,0,0,5.955,2.619,7.475,7.475,0,0,0,4.328-1.158,7.116,7.116,0,0,0,2.509-3,9.8,9.8,0,0,0,.827-4.053l.276,1.764a12.586,12.586,0,0,1-1.213,4.659,9.187,9.187,0,0,1-2.978,3.557A8.245,8.245,0,0,1,580.506,488.691Zm12.516-.607h-3.694V451.141h3.694Z"
                                 transform="translate(-502.625 -451.141)"
                              />
                              <path
                                 id="Trazado_195"
                                 data-name="Trazado 195"
                                 d="M721.913,525.479a12.2,12.2,0,0,1-6.423-1.709,11.559,11.559,0,0,1-4.411-4.825,16.023,16.023,0,0,1-1.572-7.306,15.858,15.858,0,0,1,1.572-7.278,11.606,11.606,0,0,1,4.411-4.8,13.028,13.028,0,0,1,12.9,0,11.741,11.741,0,0,1,4.356,4.8,15.863,15.863,0,0,1,1.571,7.278,16.029,16.029,0,0,1-1.571,7.306,11.693,11.693,0,0,1-4.356,4.825A12.13,12.13,0,0,1,721.913,525.479Zm0-3.143a8.317,8.317,0,0,0,4.522-1.213,8.157,8.157,0,0,0,3.033-3.584,13.97,13.97,0,0,0,1.1-5.9,13.824,13.824,0,0,0-1.1-5.845,8.165,8.165,0,0,0-3.033-3.584A8.326,8.326,0,0,0,721.913,501a7.844,7.844,0,0,0-7.5,4.8,13.812,13.812,0,0,0-1.1,5.845,13.959,13.959,0,0,0,1.1,5.9,7.844,7.844,0,0,0,7.5,4.8Z"
                                 transform="translate(-613.068 -487.984)"
                              />
                           </g>
                        </g>
                     </svg>
                  </Link>
                  <nav
                     className={clsx(
                        isOpen && " invisible lg:visible",
                        isDark ? "bg-black" : "bg-white",
                        "   px-5 flex   flex-col justify-center fixed  left-0 top-0 w-full h-screen z-20  font-[Fixture] lg:font-[CabinetGrotesk-Extralight] lg:px-0 lg:static lg:h-auto lg:w-auto  lg:grid lg:grid-cols-2 lg:gap-y-3"
                     )}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#DF9EF4"
                        className="w-8 h-8 absolute top-10 right-5 cursor-pointer lg:hidden "
                        onClick={openMenu}
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                     {navLinks.map(link => (
                        <LinkHeader key={link.name} link={link} />
                     ))}
                  </nav>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke={isDark ? "#fff" : "#000"}
                     className="w-8 h-8 cursor-pointer lg:hidden"
                     onClick={openMenu}
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                     />
                  </svg>
               </div>
            </header>
         ) : (
            <Link
               to="/projects"
               className="absolute text-black font-black text-2xl top-20 -rotate-90"
            >
               Get Back
            </Link>
         )}
      </>
   );
};
