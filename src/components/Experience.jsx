/* eslint-disable no-unused-vars */

import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const containerStart = ( delay ) => ( {
     hidden: { x: -100, opacity: 0 },
     show: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: delay }
     }

} )

const containerEnd = ( delay ) => ( {
     hidden: { x: 100, opacity: 0 },
     show: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: delay }
     }

} )
const Experience = () => {
     return (
          <section className='experience border-b border-neutral-900 pb-4 px-4 sm:px-6 lg:px-10'>
               <h2 className='my-10 md:my-20 text-center text-3xl md:text-4xl'>
                    EXPERIENCE
               </h2>
               <div>
                    { EXPERIENCES.map( ( experience, index ) => (
                         <div key={ index } className='mb-8 flex flex-wrap items-baseline lg:justify-center'>
                              <motion.div
                                   variants={ containerStart( 0.5 ) }
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={ { once: true, amount: 0.3 } }

                                   className='w-full lg:w-1/4'>
                                   <p className='text-sm text-neutral-400 mb-2'>{ experience.year }</p>
                              </motion.div>
                              <motion.div
                                   variants={ containerEnd( 0.5 ) }
                                   initial="hidden"
                                   whileInView="show"
                                   viewport={ { once: true, amount: 0.3 } }

                                   className='w-full max-w-xl lg:w-3/4'>
                                   <h4 className='text-lg font-semibold'>{ experience.role }

                                        <span className='text-sm bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent ps-5'>
                                             { experience.company }
                                        </span>
                                   </h4>
                                   <p className='mb-4 text-neutral-400'>{ experience.description }</p>
                                   { experience.technologies.map( ( tech, techIndex ) => (
                                        <span key={ techIndex } className='me-2 mt-4 rounded-xl bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-900'>
                                             { tech }
                                        </span>
                                   ) ) }
                              </motion.div>
                         </div>
                    ) ) }
               </div>
          </section>
     )
}

export default Experience