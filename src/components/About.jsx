import aboutImg from '../assets/about-fady.png';
import { ABOUT_TEXT } from './../constants';
import { motion } from "framer-motion";

const About = () => {
     return (


          <section className="about border-b border-neutral-900 pb-20 md:pb-24">
               <h2 className="my-16 md:my-20 text-center text-2xl md:text-4xl font-bold tracking-tight">
                    ABOUT <span className="text-neutral-500">Me</span>
               </h2>

               <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                   

                    <div className="w-full lg:w-2/3 lg:py-8">
                         <div className="flex justify-center lg:justify-start">
                              <p className="my-2 max-w-xl text-base sm:text-lg text-center lg:text-left text-neutral-300 leading-loose">
                                   { ABOUT_TEXT }
                              </p>
                         </div>
                    </div>

                    <div className="w-full lg:w-1/3 lg:py-8">
                         <div className="flex justify-center items-center">
                              <motion.div
                                   initial={ { opacity: 0, x: -80 } }
                                   animate={ { opacity: 1, x: 0 } }
                                   transition={ { duration: 0.5, delay: 0.4 } }
                                   className="flex items-center justify-center"
                              >
                                   <motion.div
                                        animate={ { y: [ 0, -12, 0 ] } }
                                        transition={ { duration: 4, repeat: Infinity, ease: "easeInOut" } }
                                        className="w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]"
                                   >
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24"
                                             className="w-full h-full"
                                        >
                                             <defs>
                                                  <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                                                  fill="url(#about-gradient)"
                                                  opacity="0.14"
                                             />

                                             <circle
                                                  cx="12"
                                                  cy="9"
                                                  r="2.3"
                                                  stroke="url(#about-gradient)"
                                                  strokeWidth="1.6"
                                                  fill="none"
                                             />

                                             <path
                                                  d="M8.2 15.5C9.2 13.7 10.8 12.8 12 12.8C13.2 12.8 14.8 13.7 15.8 15.5"
                                                  stroke="url(#about-gradient)"
                                                  strokeWidth="1.6"
                                                  strokeLinecap="round"
                                                  fill="none"
                                             />

                                             <circle
                                                  cx="17.2"
                                                  cy="7.4"
                                                  r="0.9"
                                                  fill="url(#about-gradient)"
                                                  opacity="0.95"
                                             />
                                        </svg>
                                   </motion.div>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </section>


     )
}

export default About