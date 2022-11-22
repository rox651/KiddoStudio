import { Link } from "react-router-dom";
import { BehanceIcon } from "../";
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
                  <BehanceIcon />
                  {/* <svg
                     id="_3sAKVP"
                     data-name="3sAKVP"
                     xmlns="http://www.w3.org/2000/svg"
                     width="25.667"
                     height="25.66"
                     viewBox="0 0 25.667 25.66"
                  >
                     <g id="Grupo_84" data-name="Grupo 84">
                        <path
                           id="Trazado_166"
                           data-name="Trazado 166"
                           d="M261.688,221.343c0,1.553-.005,3.106,0,4.659a7.912,7.912,0,0,1-1.809,5.208,7.755,7.755,0,0,1-5.011,2.851,10.241,10.241,0,0,1-1.446.1c-3.089.009-6.179,0-9.268,0a7.939,7.939,0,0,1-4.8-1.527,7.778,7.778,0,0,1-3.107-4.69,8.721,8.721,0,0,1-.208-1.859q-.03-4.746-.007-9.493a8.034,8.034,0,0,1,8.136-8.089q4.609.006,9.218,0a8.732,8.732,0,0,1,2.45.3,7.918,7.918,0,0,1,4.54,3.33,8.02,8.02,0,0,1,1.315,4.594C261.68,218.271,261.688,219.807,261.688,221.343Zm-12.829-10.428c-1.553,0-3.107-.02-4.659.01a7.336,7.336,0,0,0-1.7.226,5.589,5.589,0,0,0-4.059,5.476c-.006,3.139-.012,6.279.009,9.418a6.751,6.751,0,0,0,.226,1.653,5.592,5.592,0,0,0,5.477,4.059q4.709.009,9.419,0a5.9,5.9,0,0,0,1.243-.122,5.6,5.6,0,0,0,4.469-5.56q.014-4.734,0-9.468a5.337,5.337,0,0,0-.494-2.356,5.528,5.528,0,0,0-5.217-3.327C252,210.893,250.429,210.915,248.859,210.915Z"
                           transform="translate(-236.023 -208.507)"
                           fill="#fff"
                        />
                        <path
                           id="Trazado_167"
                           data-name="Trazado 167"
                           d="M416.992,382.963a6.414,6.414,0,1,1-6.4-6.434A6.421,6.421,0,0,1,416.992,382.963Zm-6.412-4.027a4.007,4.007,0,1,0,4,4A4.028,4.028,0,0,0,410.581,378.936Z"
                           transform="translate(-397.743 -370.113)"
                           fill="#fff"
                        />
                        <path
                           id="Trazado_168"
                           data-name="Trazado 168"
                           d="M731.155,343.112a.86.86,0,0,1-.875-.841.857.857,0,1,1,.875.841Z"
                           transform="translate(-711.404 -336.323)"
                           fill="#fff"
                        />
                     </g>
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30.359"
                     height="30.359"
                     viewBox="0 0 30.359 30.359"
                  >
                     <g
                        id="Componente_16_3"
                        data-name="Componente 16 – 3"
                        transform="translate(1.55 1.551)"
                     >
                        <path
                           id="Trazado_170"
                           data-name="Trazado 170"
                           d="M6734.561,251.77a13.627,13.627,0,1,1,13.343-13.9A13.635,13.635,0,0,1,6734.561,251.77Z"
                           transform="translate(-6720.65 -224.517)"
                           fill="none"
                           stroke="#fff"
                           stroke-miterlimit="10"
                           stroke-width="3.1"
                        />
                        <path
                           id="Trazado_171"
                           data-name="Trazado 171"
                           d="M6890.462,596.239a.836.836,0,0,1-1.169.248,10.511,10.511,0,0,0-3.3-1.163,15.538,15.538,0,0,0-6.2.179,1.368,1.368,0,0,1-.677-.025.776.776,0,0,1-.485-.794.764.764,0,0,1,.609-.74,19.446,19.446,0,0,1,2.019-.389c.745-.1,1.5-.12,2.25-.176a13.574,13.574,0,0,1,6.192,1.424c.137.071.275.141.407.222A.913.913,0,0,1,6890.462,596.239Z"
                           transform="translate(-6871.806 -577.445)"
                           fill="#fff"
                        />
                        <path
                           id="Trazado_172"
                           data-name="Trazado 172"
                           d="M6876.742,512.64a.944.944,0,0,1-1.271.365,13.965,13.965,0,0,0-7.42-1.693,19.7,19.7,0,0,0-3.954.471,1.623,1.623,0,0,1-.557.051.961.961,0,0,1-.086-1.887c.876-.186,1.759-.354,2.648-.464.8-.1,1.613-.109,2.184-.144a16.235,16.235,0,0,1,7.5,1.6,7.018,7.018,0,0,1,.665.375A.988.988,0,0,1,6876.742,512.64Z"
                           transform="translate(-6856.578 -497.036)"
                           fill="#fff"
                        />
                        <path
                           id="Trazado_173"
                           data-name="Trazado 173"
                           d="M6852.153,414.248a1.177,1.177,0,0,1-1.69.442,15.176,15.176,0,0,0-4.595-1.682,19.962,19.962,0,0,0-5.989-.264c-1.165.124-2.319.349-3.476.546a1.212,1.212,0,0,1-1.444-.86,1.135,1.135,0,0,1,.891-1.461c1.37-.256,2.749-.463,4.13-.648.645-.086,1.305-.072,1.713-.092a20.662,20.662,0,0,1,8.53,1.625c.474.212.936.456,1.391.708A1.27,1.27,0,0,1,6852.153,414.248Z"
                           transform="translate(-6829.98 -402.207)"
                           fill="#fff"
                        />
                     </g>
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="14.966"
                     height="29.366"
                     viewBox="0 0 14.966 29.366"
                  >
                     <path
                        id="Trazado_165"
                        data-name="Trazado 165"
                        d="M397.687,235.531c-.585.013-1.18.019-1.757.024-.383,0-.778.007-1.169.013a2.737,2.737,0,0,0-1.938.664,2.65,2.65,0,0,0-.688,1.94c-.014.793-.011,1.565-.007,2.383,0,.348,0,.709,0,1.067v.909l.908.042.141.008c.105.006.215.012.331.012h4.025v.036c0,1.8,0,3.187,0,4.477-.5,0-1.061,0-1.743,0h-3.659V260.5c0,.113,0,.2,0,.276-.077,0-.174,0-.3,0h-4.4v-.034q0-4.489,0-8.977v-4.528l-.9-.053-.132-.009c-.108-.008-.22-.016-.344-.017h-2.023l-1.3,0h-.009c-.005-1.364-.005-2.822,0-4.458,0-.007,0-.014,0-.021h4.7v-.952c0-.064,0-.124,0-.181,0-.107,0-.2,0-.288.009-.459.009-.922.009-1.37,0-1.009,0-1.962.084-2.917a6.287,6.287,0,0,1,.583-2.182,5.764,5.764,0,0,1,1.246-1.715,5.832,5.832,0,0,1,1.786-1.153,6.42,6.42,0,0,1,2.222-.475c.589-.022,1.23-.032,2.018-.032.464,0,.939,0,1.4.007l.908.006C397.694,232.821,397.694,234.2,397.687,235.531Z"
                        transform="translate(-382.726 -231.41)"
                        fill="#fff"
                     />
                  </svg>
                  <svg
                     id="Componente_18_3"
                     data-name="Componente 18 – 3"
                     xmlns="http://www.w3.org/2000/svg"
                     width="29.858"
                     height="29.826"
                     viewBox="0 0 29.858 29.826"
                  >
                     <path
                        id="Trazado_174"
                        data-name="Trazado 174"
                        d="M356.779,575.627a14.775,14.775,0,0,1-15.282-1.873,18.832,18.832,0,0,1,11.922-10.009A61.112,61.112,0,0,1,356.779,575.627Z"
                        transform="translate(-335.732 -547.123)"
                        fill="#fff"
                     />
                     <path
                        id="Trazado_175"
                        data-name="Trazado 175"
                        d="M230.84,233.926a59.611,59.611,0,0,1,6.182,9.234,34.879,34.879,0,0,1-14.592,1.945A14.573,14.573,0,0,1,230.84,233.926Z"
                        transform="translate(-222.161 -232.53)"
                        fill="#fff"
                     />
                     <path
                        id="Trazado_176"
                        data-name="Trazado 176"
                        d="M232.267,467.763l1.346,2.833a19.96,19.96,0,0,0-7.394,3.895,20.3,20.3,0,0,0-5.192,6.487c-2.292-1.306-4.872-7.844-4.357-11.079A36.773,36.773,0,0,0,232.267,467.763Z"
                        transform="translate(-216.604 -455.572)"
                        fill="#fff"
                     />
                     <path
                        id="Trazado_177"
                        data-name="Trazado 177"
                        d="M442.492,204.4a14.414,14.414,0,0,1,7.114-.48,14.756,14.756,0,0,1,7.948,4.168,34.843,34.843,0,0,1-8.984,5.554A60.5,60.5,0,0,0,442.492,204.4Z"
                        transform="translate(-432.064 -203.682)"
                        fill="#fff"
                     />
                     <path
                        id="Trazado_178"
                        data-name="Trazado 178"
                        d="M640.369,562.087a61.1,61.1,0,0,0-3.248-11.43,18.648,18.648,0,0,1,10.222,1.158A15.158,15.158,0,0,1,640.369,562.087Z"
                        transform="translate(-617.708 -534.394)"
                        fill="#fff"
                     />
                     <path
                        id="Trazado_179"
                        data-name="Trazado 179"
                        d="M593.563,336.312l-1.423-3.1a36.641,36.641,0,0,0,9.347-5.814,15.023,15.023,0,0,1,3.169,9.871A20.336,20.336,0,0,0,593.563,336.312Z"
                        transform="translate(-574.804 -321.688)"
                        fill="#fff"
                     />
                  </svg> */}
               </div>
            </article>
         </section>
      </footer>
   );
};
