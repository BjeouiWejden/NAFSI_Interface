//import React from 'react'
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";


const FeedbackForm = () => {

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handeleSubmitReview = async e => {
        e.preventDefault();

        //later we will use our API
    };


  return (
    <>
    <form action="">
        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
               How would you rate the overall experience?
            </h3>
{/*_____________________________ Evaluation with Star _________________________ */}
            <div>
                {[ ...Array(5).keys()].map((_, index) => {
                    index += 1;

                return ( 
                      <button 
                      key={index} 
                      type="button"
                      className={`${
                        index <= ((rating && hover) || hover )
                        ? 'text-yellowColor' 
                        : 'text-gray-400'
                    } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                      onClick={() => setRating(index)} 
                      onMouseEnter={()=>setHover(index)}
                      onMouseLeave={()=> setHover(rating)}
                      onDoubleClick={()=> {
                           setHover(0);
                           setRating(0);
                      }}
                      >
                        <span>
                            <AiFillStar />
                        </span>
                      </button>
                );
                })}
            </div>
        </div>

        {/*_______________________________ Text Part/comment  ________________________________ */}

        <div className="mt-[30px]">
             <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
               share your feedback or suggestions*
             </h3>

             <textarea 
               className="border border-solid border-[#0066ff34] focus:outline out-primaryColor w-full px-4
               py-3 rounded-md"
               rows="5"
               placeholder="write your message"
               onChange={(e)=>setReviewText(e.target.value)}>
             </textarea>

        </div>

        <button type="submit" onClick={handeleSubmitReview} className="btn">
           submit Feedback
        </button>
    </form>
    </>
  );
};

export default FeedbackForm;