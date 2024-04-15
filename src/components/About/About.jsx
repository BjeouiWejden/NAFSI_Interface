import aboutImg from '../../assets/images/hopital.jpg';
import aboutCardImg from '../../assets/images/about_cardD.png';
import { Link } from 'react-router-dom';

const About = () => {
     return (
     <section>
         <div className="container">
             <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*___________________________________ About img ______________________________________ */}

                 <div className="relative w-3/4 lg:w-1/2 xl:w-[630px] z-10 order-2 lg:order-1">
                     <img src={aboutImg} alt="" />
                     {/*<div className='absolute z-20 bottom-4 w-[100px] md:w-[300px] right-[-30%] md:right-[-7%]
                     lg:right-[22%]'>
                         <img src={aboutCardImg} alt='' />
                        </div>*/}

                    {/*-------------------------- Statistic of hopital ---------------------------------------------- */}    

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
        

                {/*___________________________________ About content __________________________________ */}

             <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                  <h2 className='heading'>L&apos;Hopital Razi Manouba</h2>
                  <p className='text_para'>
                   L&apos;Hopital Razi Manouba, situé dans la banlieue nord-ouest de Tunis, est un établissemet de santé publique Tunisienne.Fondé
                   en 1931, il se spécialise principalement dans le domaine de la Psychiatrie.Son role englobe les soins, la prévention,
                   l&apos;ensignement et la la recherche dans ce domaine.<br/>
                   Parmi les services disponibles,on trouve:<br/>
                   - Neurologie <br/>
                   - Psychiatrie <br/>
                   - Médecine interne <br/>
                   - Biologie médicale
                </p>

                <p className='text_para mt-[30px]'>
                   L&apos;Hopital Razi joue un role essentiel dans la prise en charge des patients souffrant de troubles mentaux tels que la 
                   Psychiatrie adulte, la pédosychiatrie, la neurologie, la maladie d&apos;Alzheimer, et la sclérose en plaques.......
                </p>

                <Link to="/">
                    <button className='btn'>Apprendre encore plus</button>
                </Link>
             </div>   
            </div>
        </div>
    </section>
    
  );
};

export default About;