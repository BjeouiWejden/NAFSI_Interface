import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.jpg';
import userImg from '../../assets/images/avatar_icon.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

 const navLinks = [
  {
    path:"/home", 
    display: 'Accueil',
  },
  {
    path:"/doctors",
    display: 'Trouver un PSY',
  },
  {
    path:"/services",
    display: 'Services',
  },
  {
    path:"/contact",
    display: 'Contact'
  },
 ];

 const Header = () => {

   const headerRef = useRef(null)
   const menuRef = useRef(null)

   const handleStickyHeader = ()=> {
     window.addEventListener('scroll', ()=>{
       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
       }else{
        headerRef.current.classList.remove('sticky_header')
       }
     })
    }

   useEffect(()=>{
    handleStickyHeader();

    return ()=> window.removeEventListener('scroll', handleStickyHeader);
   });

   const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return (
     <header className='header flex items-center' ref={headerRef}>
       <div className='container'>
         <div className='flex items-center justify-between'>

          {/* _________________________ Logo NAFSI ____________________*/}
          
           <div>
              <img src={logo} alt='' />
           </div>



          {/*__________________________ Menu __________________________*/}

           <div className='navigation' ref={menuRef} onClick={toggleMenu}>
             <ul className='menu flex items-center gap-[2.7rem]'>
               {navLinks.map((link,index) => (
                 <li key={index}>
                   <NavLink 
                     to={link.path} 
                     className={navClass => 
                     navClass.isActive 
                     ? "text-primaryColor text-[16px] leading-7 font-[600]" 
                     : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                     }
                     >
                     {link.display}
                   </NavLink>
                 </li>
              ))}
             </ul>
           </div>

          {/* __________________________ nav right Login _____________________ */}

           <div className='flex items-center gap-4'>
             <div className='hidden'>
               <Link to='/'>
                 <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                 <img src={userImg} className='w-full rounded-full' alt=''/>
                 </figure>
               </Link>
             </div>

               <Link to='/login'>
                 <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center 
                 justify-center rounded-[50px]'>Login</button>
               </Link>  

               <span className='md:hidden' onClick={toggleMenu}>
                 <BiMenu className="w-6 h-6 cursor-pointer" />
               </span>
           </div>

         </div>
       </div>
     </header>
   );
 };

export default Header;
