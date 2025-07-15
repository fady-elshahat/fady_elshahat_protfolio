/* eslint-disable no-unused-vars */
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const cardVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: ( i ) => ( {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.5,
               delay: i * 0.2,
               ease: 'easeOut'
          }
     } )
};

const Projects = () => {
     return (
          <section className="projects border-b border-neutral-900 pb-16 px-4 sm:px-6 lg:px-20 ">
               <h2 className="my-10 md:my-20 text-center text-3xl md:text-4xl">
                    PROJECTS
               </h2>

               <div className="flex flex-col gap-12">
                    { PROJECTS.map( ( project, index ) => (
                         <motion.div
                              key={ index }
                              className="flex flex-col md:flex-row gap-6 justify-center "
                              variants={ cardVariants }
                              initial="hidden"
                              whileInView="visible"
                              viewport={ { once: true, amount: 0.2 } }
                              custom={ index }
                         >
                              {/* Image */ }
                              <div className="w-full md:w-1/5">
                                   <img
                                        src={ project.image }
                                        alt={ project.title }

                                        className="rounded-xl object-cover w-full max-h-52"
                                   />
                              </div>

                              {/* Content */ }
                              <div className="w-full md:w-2/3">
                                   <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                        { project.title }
                                   </h3>
                                   <p className="text-sm text-neutral-400 mb-3">
                                        { project.description }
                                   </p>

                                   <div className="flex flex-wrap gap-2 mb-3">
                                        { project.technologies.map( ( tech, techIndex ) => (
                                             <span
                                                  key={ techIndex }
                                                  className="bg-neutral-800 px-2 py-1 rounded text-xs text-purple-300"
                                             >
                                                  { tech }
                                             </span>
                                        ) ) }
                                   </div>

                                   { project.link && (
                                        <a
                                             href={ project.link }
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="text-sm text-purple-400 underline underline-offset-2 hover:text-purple-300 transition"
                                        >
                                             Live Demo
                                        </a>
                                   ) }
                              </div>
                         </motion.div>
                    ) ) }
               </div>
          </section>
     );
};

export default Projects;
