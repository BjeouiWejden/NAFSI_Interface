//import React from 'react'
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
 <>
    <div>
        <div>
            {/*_____________________________ Inf about Dr _____________________________ */}

             <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
               About of
                 <span className="text-irisBlueColor font-blod text-[24px] leading-9">
                   Muhibur Rahman
                 </span>
             </h3>
                 <p className="text-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Excepturi sit a sed cupiditate, totam quo reprehenderit 
                  rem dolorum nisi enim ipsum saepe praesentium expedita iste, 
                  corrupti soluta veritatis reiciendis itaque?
                </p>
        </div>

            {/*_________________________________ Formation of Dr _____________________*/}
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                  <div> 
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                    {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                         PHP in Surgeon
                    </p>
                    </div> 
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                         New Apollo Hospital, New York.
                    </p>  
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                  <div> 
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                    {formateDate("07-04-2010")} - {formateDate("07-04-2010")}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                         PHP in Surgeon
                    </p>
                    </div> 
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                         New Apollo Hospital, New York.
                    </p>  
                </li>
            </ul>
        </div>

        {/*______________________________________ Experience ________________________ */}

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Experience
            </h3>


           <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
              <li className="p-4 rounded bg-[#fff9ea]">
                  <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formateDate("07-04-2010")} - {formateDate("07-04-2010")}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                         Sr. Surgeon
                  </p>

                  <p className="text-[14px] leading-5 font-medium text-textColor">
                         New Apollo Hospital, New York.
                    </p>
              </li>

          {/*____________________________________________________________ */}
          <li className="p-4 rounded bg-[#fff9ea]">
                  <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formateDate("07-04-2010")} - {formateDate("07-04-2010")}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                         Sr. Surgeon
                  </p>

                  <p className="text-[14px] leading-5 font-medium text-textColor">
                         New Apollo Hospital, New York.
                    </p>
              </li>    

           </ul>
        </div>

    </div>
    </>
  );
};

export default DoctorAbout;