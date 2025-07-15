/* eslint-disable no-unused-vars */

import { TESTIMONIALS } from '../constants';
import TestimonialCard from './common/TestimonialCard';
import { motion } from "framer-motion";


const Testimonial = () => {
     return (
          <section className='about border-b border-neutral-900 pb-15 px-4 sm:px-6 lg:px-10'>
               <h2 className='my-20 text-center text-4xl'>
                    TESTIMONIALS
               </h2>
               <div className="flex flex-col items-center">
                    <div className="text-center">
                         <p className="text-lg font-medium  font-pj">
                              +50 people have said how good Fady
                         </p>
                         <h2 className="mt-4 text-2xl font-bold  sm:text-4xl xl:text-5xl font-pj">
                              Our happy clients say about us
                         </h2>
                    </div>



                    <div className="relative mt-10 md:mt-24 md:order-2">
                         <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                              <div
                                   className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-20 blur-2xl filter"
                                   style={ {
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                                   } }
                              ></div>
                         </div>

                         <div class="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                              { TESTIMONIALS.map( ( testimonial, index ) => (

                                   
                                   <TestimonialCard
                                        key={ index }
                                        index={ index }
                                        name={ testimonial.name }
                                        title={ testimonial.title }
                                        cuntry={ testimonial.cuntry }
                                        message={ testimonial.message }
                                        image={ testimonial.image }
                                        link={ testimonial.link }

                                   />

                              ) ) }
                         </div>


                    </div>
               </div>
          </section>

     );
};

export default Testimonial;
