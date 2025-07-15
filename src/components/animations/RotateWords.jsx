/* eslint-disable no-unused-vars */

import { AnimatePresence, motion } from "framer-motion";

import { useState, useEffect } from "react";
export function RotateWords( { text = "I'm a", words = [ "word 1", "word 2", "word 3" ] } ) {
     const [ index, setIndex ] = useState( 0 );

     useEffect( () => {
          const interval = setInterval( () => {
               setIndex( ( prevIndex ) => ( prevIndex + 1 ) % words.length );
          }, 5000 );
          return () => clearInterval( interval );
     }, [ words.length ] );

     return (
          <div className="flex items-center justify-between  gap-2 text-2xl lg:text-3xl  font-bold">
               <span className="block min-w-[60px] h-[2.5rem] leading-[1.4]">{ text }</span>
               <div className="relative leading-[1.4] md:mx-auto  min-w-[216px] md:min-w-[400px] h-[2.5rem] overflow-hidden text-left">
                    <AnimatePresence mode="wait">
                         <motion.span
                              key={ words[ index ] }
                              initial={ { opacity: 0, y: 30 } }
                              animate={ { opacity: 1, y: 0 } }
                              exit={ { opacity: 0, y: -30 } }
                              transition={ { duration: 0.5 } }
                              className="absolute left-0 top-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                         >
                              { words[ index ] }
                         </motion.span>
                    </AnimatePresence>
               </div>
          </div>
     );
}
