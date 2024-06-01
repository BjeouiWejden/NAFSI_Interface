import heroImg1 from '../../src/assets/images/img_H1.jpg';
import heroImg2 from '../../src/assets/images/img_H3.jpg';
import heroImg3 from '../../src/assets/images/img_H2.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img01.jpg';
import faqImg from '../assets/images/faq-img02.jpg';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar_icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';



const Home = () => {
  return (
      <>
     {/*__________________________________ bg hero-section_____________________________ */}

     <section className="hero_section pt-[60px] 2xl:h-[800px]">
       <div className="container">
         <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          {/*_______________________________ hero content _______________________________ */}

           <div>
             <div className="lg:w-[670px]">
               <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[46px] md:leading-[70px]">
                Renforcer Votre Santé Mentale
               </h1>

               <p className="text_para">
                NAFSI est un site Web dédié à la santé mentale des jeunes. Notre approche personnalisée du bien-étre combine
                un suivi innovant de l&apos;énergie avec un soutien expert en matière de santé .
                NAFSI s&apos;engage à répondre à ce besoin crucial en offrant des services de santé mentale professionnels,pratiques et abordables pour tous.
               </p>

               <button className="btn">Demander un rendez-vous</button>
             </div>

            {/*___________________________ hero counter/Statistical _______________________ */}
           
             <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
               <div>
                 <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">50+</h2>
                 <span className="w-[76px] h-2 bg-yellowColor rounded-full block mt-[-10px]"></span>
                 <p className="text_para">Années d expérience </p>
               </div>

               <div>
                 <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">860</h2>
                 <span className="w-[80px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                 <p className="text_para">Collaborateurs</p>
               </div>

               <div>
                 <h2 className="text-[36px] leading-[56px] lg:text-[36px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                 <span className="w-[80px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                 <p className="text_para">Satisfaction Des Patients</p>
               </div>
             </div>
           </div>

          {/*___________________________ hero content/Img right ___________________________ */}
          
           <div className='flex gap-[30px] justify-end'>
             <div>
               <img className='w-full' src={heroImg1} alt='' />
             </div>

             <div className='mt-[30px]'>
               <img src={heroImg2} alt='' className='w-full mb-[30px]'/>
               <img src={heroImg3} alt='' className='w-full'/>
             </div> 
           </div>
         </div>
       </div>
     </section>

     {/*________________________________ hero section/Part 2  ____________________________ */}

     <section>
       <div className='container'>
         <div className='lg:w-[470px] mx-auto'>
           <h2 className='heading text-center'>Offrir les meilleurs services pour le support mental</h2>
           <p className='text_para text-center'>
           Assurer un soutien mental de qualité supérieure, offrant les meilleurs services pour le bien-être psychologique.
           </p>
         </div>

      {/*------------------------------ Position of icon 01   ---------------------------- */}

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
         <div className='py-[30px] px-5'>
           <div className='flex items-center justify-center'>
             <img src= {icon01} alt='' />
           </div>

      {/*----------------------------- Part write under icon 01 -------------------------- */}

         <div className='mt-[30px]'>
             <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Trouver un PSY </h2>
             <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
             Connectez-vous avec un psychologue expérimenté en quelques étapes simples sur notre plateforme
             </p>

      {/*----------------------------- Arrow and circle part ------------------------------- */}

           <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
             mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
             <BsArrowRight className='group-hover:text-white w-6 h-5'/>
           </Link>
         </div>
         </div>

         
      {/*-------------------------------- Position of icon 02 --------------------------------- */}

         <div className='py-[30px] px-5'>
           <div className='flex items-center justify-center'>
             <img src= {icon02} alt='' />
           </div>

      {/*---------------- part write under icon 02 ------------------- */}
           <div className='mt-[30px]'>
               <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Trouver un emplacement
               </h2>
               <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
               Découvrez rapidement l&apos;emplacement idéal grâce à notre outil de recherche intuitif.
               </p>

      {/*------------------------ Arrow and circle part -------------- */}

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
              mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
           </div>
         </div>
         {/*____________________________________________________________ */}
          {/*----------------- Position of icon 03   ------------------- */}
          <div className='py-[30px] px-5'>
           <div className='flex items-center justify-center'>
             <img src= {icon03} alt='' />
           </div>
      {/*---------------- part write under icon 03 ------------------- */}
           <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Prendre rendez-vous
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Planifiez facilement votre rendez-vous en quelques clics sur notre site.
              </p>

      {/*--------------------- Arrow and circle part -------------- */}
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
              mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
           </div>
         </div>

      </div>
    </div>
    </section>
     {/*------------------------ Call of Function About ---------------- */}
    
     <About/>


     {/*_______________________ Services section _______________________ */}

     <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'> Troubles Mentaux chez les jeunes </h2>
          <p className='text_para text-center'>
            Les troubles mentaux chez les jeunes peuvent inclure la dépression, 
            l&apos;anxiété et le trouble de l&apos;attention, affectant leur bien-être émotionnel 
            et leur fonctionnement quotidien.
          </p>
        </div>
        <ServiceList/>
      </div>
     </section>

     {/*_______________________ Services section end ___________________ */}


     {/* ______________________ Feature section start __________________ */}
    <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
          {/*___________________ Feature content _______________________ */}
           <div className='xl:w-[670px]'>
            <h2 className='heading'> Get Virtual treatment <br/> anytime.</h2>

            <ul className='pl-4'>
              <li className='text_para'>1.Prendre rendez-vous directement</li>
              <li className='text_para'>2.Recherchez votre médecin ici et contactez son cabinet.</li>
              <li className='text_para'>
                3.Consultez nos médecins qui acceptent de nouveaux patients, utilisez loutil
                 de planification en ligne pour sélectionner une heure de rendez-vous.
              </li>  
            </ul>

            <Link to='/'>
              <button className='btn'>Learn More </button>
            </Link>
           </div>

           {/*__________________ Feature img __________________________ */}
           <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 '>
             <img src={featureImg} className='w-3/4' alt='' />

             {/*--------------------- Date+Border of img ---------------------------- */}
             <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
             md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue,24
                    </p>

                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                       10:00AM 
                    </p>
                  </div>
                  
                  {/*--------------------- Add icon video ------------------------ */}
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                  bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                       <img src={videoIcon} alt=''/>
                  </span>
                </div>

                {/*------------------------ btn Consultation ----------------------------- */}

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px]
                text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500]
                mt-2 lg:mt-4 rounded-full'>
                      consultation 
                </div>
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                  text-headingColor'>
                    Wayne Collins
                  </h4>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>

     {/* ______________________ Feature section end __________________ */}

     {/*_______________________ Our great doctors start ____________________ */}
     <section>
      <div className='container'>
        <div className='xl:W-[470px] mx-auto'>
           <h2 className='heading text-center'>Our Great Doctors</h2>
           <p className='text_para text-center'>
             world-class care of everyone . our health system offers unmatched,
             expert health care.  
           </p>
        </div>

        <DoctorList/>
      </div>
     </section>
     {/*_______________________ Our great doctors end ____________________ */}

     {/*_______________________ faq section _____________________________ */}
     <section>
      <div className='container'>
         <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
                <img src={faqImg} alt=''/>
            </div> 

         <div className='w-full md:w-1/2'>
          <h2 className='heading'>
            Most questions by our beloved patients
          </h2>

        <FaqList/>
         </div>
         </div>  
      </div>
     </section>
     {/*_______________________ faq section end _________________________ */}

    </>
    
  );
};

export default Home;