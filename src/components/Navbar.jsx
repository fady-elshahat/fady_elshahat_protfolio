import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GradualSpacing } from "./animations/GradualSpacing";
import { CONTACT } from '../constants';
import { FaUpwork } from "react-icons/fa6";


const Navbar = () => {

     return (
          <nav className="navbar py-8 px-4 sm:px-6 lg:px-10">
               <div className="flex justify-between items-center flex-shrink-0 w-full">
                    <div className="logo">
                         <GradualSpacing text="FADY." />
                    </div>
                    <div className="links-icon flex justify-between gap-3 md:gap-4 items-center text-2xl">
                         <a className="cursor-pointer " href={ CONTACT.linkedIn } target="_blank" >
                              <FaLinkedin />
                         </a>
                         <a className="cursor-pointer " href={ `https://wa.me/${ CONTACT.phoneNo }` } target="_blank" >
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
               </div>
          </nav>
     );
};

export default Navbar