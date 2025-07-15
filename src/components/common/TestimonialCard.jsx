/* eslint-disable no-unused-vars */


import { motion } from "framer-motion";

const cardVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: ( i ) => ( {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.5,
               delay: i * 0.15,
               ease: 'easeOut'
          }
     } )
};
const TestimonialCard = ( { name, title, image, message, cuntry, link, index } ) => {
     return (
          <motion.div
               key={ index }
               variants={ cardVariants }
               initial="hidden"
               whileInView="visible"
               viewport={ { once: true, amount: 0.3 } }
               custom={ index }
               className="flex flex-col overflow-hidden shadow-xl rounded-2xl">
               <a href={ link } target='_blank' className="flex flex-col bg-gradient-to-br from-white/10 via-white/5 to-white/10 text-neutral-200 justify-between flex-1 p-6  lg:py-8 lg:px-7">

                    <div className="flex-1">
                         <div className="flex items-center">
                              { Array( 5 )
                                   .fill( 0 )
                                   .map( ( _, i ) => (
                                        <svg
                                             key={ i }
                                             className="w-5 h-5 text-[#FDB241]"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20"
                                             fill="currentColor"
                                        >
                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                   ) ) }
                         </div>

                         <blockquote className="flex-1 mt-8">
                              <p className="text-lg leading-relaxed  font-pj">“{ message }”</p>
                         </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                         <img
                              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                              src={ image }
                              alt={ name }
                         />
                         <div className="ml-4">

                              <p className="text-base font-bold  font-pj">{ name }</p>
                              <p className="mt-0.5 text-sm font-pj text-neutral-400">{ title }</p>
                              <p className="mt-0.5 text-sm font-pj text-neutral-400">
                                   { cuntry }
                              </p>


                         </div>
                    </div>
               </a>
          </motion.div>
     );
}

export default TestimonialCard