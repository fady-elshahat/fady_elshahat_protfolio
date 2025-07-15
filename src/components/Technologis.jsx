/* eslint-disable no-unused-vars */
import { FaCss3Alt, FaSass, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { RiAngularjsLine, RiHtml5Line, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { SiBootstrap, SiTailwindcss } from 'react-icons/si';
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";

const iconAnimate = ( index ) => ( {
     initial: { y: 0 },
     animate: {
          y: [ 10, -10 ],
          transition: {
               duration: 1.5,
               ease: "easeInOut",
               repeat: Infinity,
               repeatType: "mirror",
               delay: index * 0.15,
          },
     },
} );

const Technologis = () => {
     return (
          <section className='about border-b border-neutral-900 pb-15 px-4 sm:px-6 lg:px-10'>
               <h2 className='my-10 md:my-20 text-center text-3xl md:text-4xl'>
                    TECHNOLOGIES
               </h2>
               <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                         variants={ iconAnimate( 1 ) }
                         initial="initial"
                         animate="animate"
                         className="rounded-2xl border-4 border-neutral-800 p-4">
                         <RiHtml5Line className='text-4xl' style={ { color: "#e34f26" } } />
                    </motion.div>

                    <motion.div
                         variants={ iconAnimate( 2 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaCss3Alt className='text-4xl' style={ { color: "#264de4" } } />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 3 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <SiBootstrap className='text-4xl' style={ { color: "#7952B3" } } />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 4 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <SiTailwindcss className='text-4xl' style={ { color: "#38BDF8" } } />
                    </motion.div>

                    <motion.div
                         variants={ iconAnimate( 5 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaSass className='text-4xl' style={ { color: "#cc6699" } } />
                    </motion.div>

                    <motion.div
                         variants={ iconAnimate( 6 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <RiJavascriptLine className='text-4xl' style={ { color: "#f7df1e" } } />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 7 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <TbBrandTypescript className='text-4xl' style={ { color: "#3178c6" } } />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 8 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaNodeJs className='text-4xl' style={ { color: "#339933" } } />
                    </motion.div>

                    <motion.div
                         variants={ iconAnimate( 9 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <RiAngularjsLine className='text-4xl' style={ { color: "#dd0031" } } />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 10 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <RiReactjsLine className='text-4xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                         variants={ iconAnimate( 11 ) }
                         initial="initial"
                         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaGitAlt className='text-4xl' style={ { color: "#F05032" } } />
                    </motion.div>



               </div>
          </section>
     )
}

export default Technologis