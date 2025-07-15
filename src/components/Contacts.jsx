import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const Contacts = () => {
     return (
          <section className='experience border-b border-neutral-900 pb-4 px-4 sm:px-6 lg:px-10'>
               <h2 className='my-10 md:my-20 text-center text-3xl md:text-4xl bg-gradient-to-r from-pink-300   to-purple-300 bg-clip-text text-transparent'>
                    GET IN TOUCH
               </h2>
               <div className='text-center  text-lg tracking-tighter '>
                    <p className='my-3'>
                         { CONTACT.address }
                    </p>

                    <p className='my-3'>
                         { CONTACT.phoneNo }
                    </p>
                    <a className='my-3 border-b' href={ `mailto:${ CONTACT.email }` } >
                         { CONTACT.email }
                    </a>

               </div>
               <div className="links-icon mt-6 w-50 mx-auto  mb-4 flex justify-between gap-2 md:gap-4 items-center text-2xl">
                    <a className="cursor-pointer " href={ CONTACT.linkedIn } target="_blank" >
                         <FaLinkedin />
                    </a>
                    <a className="cursor-pointer " href={ `https://wa.me/${ CONTACT.phoneNo }}` } target="_blank" >
                         <FaWhatsapp />
                    </a>
                    <a className="cursor-pointer " href={ CONTACT.upwork } target="_blank" >
                         <FaUpwork />
                    </a>
                    <a className="cursor-pointer " href={ CONTACT.github } target="_blank" >
                         <FaGithub />
                    </a>
                    <a className="cursor-pointer " href="https://www.instagram.com/fad_y_y?igsh=anBvd3ZveWx4aDV1&utm_source=qr" target="_blank" >
                         <FaInstagram />
                    </a>
               </div>

          </section >
     )
}

export default Contacts