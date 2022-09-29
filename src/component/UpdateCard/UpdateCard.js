import { faLocationArrow, faLocationPin, faMap, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpdateCard = () => {
    return (
        <div className=''>
            {/* Name and Location in here */}
           <div className='flex items-center mt-10 gap-4'>
                <img className='w-20 h-20 rounded-full  ' src="https://watermark.lovepik.com/photo/20211130/large/lovepik-business-team-work-office-picture_501285273.jpg" alt="" />
                <div className=''>
                    <h2 className='font-bold text-xl text-black'>Shariful Islam Sajeeb</h2>
                    <div className='flex items-center gap-2 text-black'>
                        <h1 className='text-black'><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></h1>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                    
                </div>
           </div>
           {/* height and weight in here */}
            <div className='flex mx-5 px-5 rounded-lg gap-4  bg-yellow-50 mt-8 shadow-2xl '>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>70</span> <sub className='text-2xl'>kg</sub></h1>
                <p className='text-xl'>Weight</p>
             </div>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>6.8</span></h1>
                <p className='text-xl'>height</p>
             </div>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>23</span> <sub className='text-2xl'>yrs</sub></h1>
                <p className='text-xl'>Age</p>
             </div>
           </div>

           {/* add a breack text in here */}
            <div className='bg-blue-50  rounded-lg  mx-7 shadow-2xl '>
                <h1 className='text-2xl py-4 mt-10 mb-5 font-semibold text-black'>Add a Breack</h1>
            </div> 

            {/* time second in here */}
            <div className=' flex mx-8 py-5 px-8 mb-20 rounded-lg gap-4  bg-yellow-50 shadow-2xl'>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"><span className='text-2xl'>10</span><sub>s</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>20</span><sub>S</sub> </button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>30</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>40</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>50</span><sub>S</sub></button>
                
            </div>

            <h2 className='text-4x font-bold  text-black' >Exercise Details</h2>

            {/* exercise time in here */}
            <div className='mt-5 px-5  text-black mb-10'>
                <div className='py-8 px-8 rounded-lg bg-yellow-50 shadow-2xl '>
                    <h1 className='text-xl '>Exercise time:<span className='pl-5'>200 second</span></h1>
                </div>
                <div className='py-8 px-8 mt-5 rounded-lg bg-yellow-50 shadow-2xl'>
                    <h1 className='text-xl '>Break Time:<span className='pl-5'>15 second</span></h1>
                </div>
  
            </div>

            {/* active complate button */}
            <button className="btn btn-active btn-primary px-10 mt-6">Activity Complated.</button>

        </div>

    );
};

export default UpdateCard;