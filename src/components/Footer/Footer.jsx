//import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';


const socialLinks = [
  {
    path: "https://github.com/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>

          {/*-------------------- Social Media Icon ----------------- */}
         <div>
             <img src={logo} alt='' />
             <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              copyright © {year} developed by Bjeoui Wejden all right reseserved
             </p>

             <div className='flex items-center gap-3 mt-4'>
                {socialLinks.map((link, index) => (
                <Link 
                    to={link.path} 
                    key={index}
                    className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                    justify-center group hover:bg-primaryColor hover:border-none' >
                  {link.icon}    
                </Link>
                ))}
             </div>
         </div>
       

        {/*-------------------- */}
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;