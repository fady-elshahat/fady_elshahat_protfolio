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
          <section className='hero min-h-screen border-b border-neutral-900 pb-4 mb-15 md:mb-24  px-4 sm:px-6 lg:px-10'>
               <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 ">

                    <div className='w-full lg:w-1/2 text-center lg:text-left'>
                         <div className='flex flex-col items-center lg:items-start'>
                              <motion.h1
                                   variants={ container( 0 ) }
                                   initial="hidden"
                                   animate="show"
                                   className='pb-6 font-thin tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 lg:mt-16'>
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
                                   className='my-4 max-w-xl font-light tracking-tight text-sm sm:text-base md:text-lg text-gray-300'>
                                   { HERO_CONTENT }
                              </motion.p>

                              <motion.div
                                   variants={ container( 0.7 ) }
                                   initial="hidden"
                                   animate="show"
                              >
                                   <a
                                        href="../../public/FADY ELSHAHAT SAIED_CV.pdf"
                                        download
                                        className="inline-block bg-purple-700  px-6 py-2 rounded-xl shadow-md hover:bg-purple-950 transition duration-300"
                                   >
                                        Download CV
                                   </a>
                              </motion.div>
                         </div>
                    </div>

                    <div className='w-full lg:w-1/3 flex justify-center'>
                         <motion.img
                              initial={ { opacity: 0, x: 100 } }
                              animate={ { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7 } } }
                              src={ ProfilePic }
                              alt="Fady Elshahat"
                              className='rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover shadow-lg'
                         />
                    </div>



               </div>
          </section>

     );
};

export default Hero;
