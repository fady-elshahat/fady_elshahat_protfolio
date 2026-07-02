/* eslint-disable no-unused-vars */

import { HERO_CONTENT } from './../constants';
import ProfilePic from './../assets/fady-hero.jpg';
import { RotateWords } from "./animations/RotateWords";
import { motion } from "framer-motion";


const container = ( delay ) => ( {
     hidden: { x: -100, opacity: 0 },
     show: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: delay }
     }

} )

const Hero = () => {
     return (
          <section className='hero min-h-[75vh] border-b border-neutral-900 pb-20 md:pb-24'>
               <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mt-6 md:mt-20 ">

                    <div className='w-full lg:w-1/2 text-center lg:text-left '>
                         <div className='flex flex-col items-center lg:items-start'>
                              <motion.h1
                                   variants={ container( 0 ) }
                                   initial="hidden"
                                   animate="show"
                                   className='pb-6 font-thin tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>
                                   Fady Elshahat
                              </motion.h1>

                              <div className="text-xl sm:text-2xl font-medium">
                                   <RotateWords
                                        text="I'm a"
                                        words={ [ "Front End Engineer", "Angular Engineer", "React Enthusiast" ] }
                                   />
                              </div>

                              <motion.p
                                   variants={ container( 0.5 ) }
                                   initial="hidden"
                                   animate="show"
                                   className='my-4 max-w-xl font-light tracking-tight text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed'>
                                   { HERO_CONTENT }
                              </motion.p>

                              <motion.div
                                   variants={ container( 0.7 ) }
                                   initial="hidden"
                                   animate="show"
                              >
                                   <a
                                        href="/Fady Elshahat Saied.pdf"
                                        download
                                        className="inline-block bg-purple-700  px-6 py-2 rounded-xl shadow-md hover:bg-purple-950 transition duration-300"
                                   >
                                        Download CV
                                   </a>
                              </motion.div>
                         </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center ">
                         <motion.div
                              initial={ { opacity: 0, x: 100 } }
                              animate={ { opacity: 1, x: 0 } }
                              transition={ { duration: 0.5, delay: 0.7 } }
                              className="flex items-center justify-center"
                         >
                              <motion.div
                                   animate={ { y: [ 0, -20, 0 ] } }
                                   transition={ { duration: 4, repeat: Infinity, ease: "easeInOut" } }
                                   className="w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-full h-full"
                                   >
                                        <defs>
                                             <linearGradient id="code-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                  <stop offset="0%" stopColor="#a855f7" />
                                                  <stop offset="100%" stopColor="#ec4899" />
                                             </linearGradient>
                                        </defs>

                                        <rect
                                             x="2"
                                             y="2"
                                             width="20"
                                             height="20"
                                             rx="4"
                                             fill="url(#code-gradient)"
                                             opacity="0.15"
                                        />

                                        <path
                                             d="M9.5 9.5L7 12L9.5 14.5"
                                             stroke="url(#code-gradient)"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             fill="none"
                                        />

                                        <path
                                             d="M14.5 9.5L17 12L14.5 14.5"
                                             stroke="url(#code-gradient)"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             fill="none"
                                        />
                                   </svg>
                              </motion.div>
                         </motion.div>
                    </div>


               </div>
          </section>

     );
};

export default Hero;
