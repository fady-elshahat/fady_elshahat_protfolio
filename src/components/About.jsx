import aboutImg from '../assets/about-fady.png';
import { ABOUT_TEXT } from './../constants';

const About = () => {
     return (


          <section className="about border-b border-neutral-900 pb-20 md:pb-24">
               <h2 className="my-16 md:my-20 text-center text-2xl md:text-4xl font-bold tracking-tight">
                    ABOUT <span className="text-neutral-500">Me</span>
               </h2>

               <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                   

                    <div className="w-full lg:w-1/2 lg:p-8">
                         <div className="flex justify-center lg:justify-start">
                              <p className="my-2 max-w-xl text-base sm:text-lg text-center lg:text-left text-neutral-300 leading-loose">
                                   { ABOUT_TEXT }
                              </p>
                         </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:p-8">
                         <div className="flex justify-center items-center">
                              <img
                                   src={ aboutImg }
                                   alt="Fady About"
                                   className="rounded-2xl w-64 sm:w-80 md:w-96 lg:w-full max-w-md object-cover shadow-lg"
                              />
                         </div>
                    </div>

               </div>
          </section>


     )
}

export default About