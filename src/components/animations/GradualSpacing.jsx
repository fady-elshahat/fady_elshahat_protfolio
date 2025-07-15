/* eslint-disable no-unused-vars */
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';



const container = ( delay ) => ( {
     hidden: { x: -100, opacity: 0 },
     show: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: delay }
     }

} )


export const GradualSpacing = ( { text = 'Gradual Spacing', className = '' } ) => {
     const [ resetKey, setResetKey ] = useState( 0 );
     const ref = useRef( null );
     const isInView = useInView( ref, { once: false } );

     useEffect( () => {
          const totalDuration = text.length * 0.05 * 2000 + 10000;

          const interval = setInterval( () => {
               setResetKey( ( prev ) => prev + 1 );
          }, totalDuration );

          return () => clearInterval( interval );
     }, [ text ] );

     return (
          <motion.div
               ref={ ref } className={ `flex space-x-1 justify-center ${ className } bebas-neue-regular` }>
               <AnimatePresence mode="popLayout" key={ resetKey }>
                    { text.split( '' ).map( ( char, i ) => (
                         <motion.span
                              key={ i }
                              initial={ { opacity: 0, y: 10 } }
                              animate={ isInView ? { opacity: 1, y: 0 } : {} }
                              exit={ { opacity: 0, y: -10 } }
                              transition={ { duration: 0.4, delay: i * 0.05 } }
                              className="text-2xl font-bold"
                         >
                              { char === ' ' ? '\u00A0' : char }
                         </motion.span>
                    ) ) }
               </AnimatePresence>
          </motion.div>
     );
};
