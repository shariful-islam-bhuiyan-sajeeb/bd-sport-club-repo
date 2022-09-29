import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpdateCard = () => {
    return (
        <div >
            {/* Name and Location in here */}
           <div className='flex pt-10 '>
                <img src="image/player.png.png" alt="" />
                <div>
                    <h2 className='font-bold text-xl text-black'>Shariful Islam Bhuiyan Sajeeb</h2>
                    <div className='flex'>
                        <FontAwesomeIcon icon={[faLocationArrow]}></FontAwesomeIcon>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                    
                </div>
           </div>
           {/* height and weight in here */}
            <div className='flex mx-5 px-5 rounded-lg gap-4  bg-yellow-50 mt-8 drop-shadow-lg '>
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

           {/* add breack text in here */}
            <div className='bg-blue-50 '>
                <h1 className='text-2xl py-4 m-10 mx-8 font-semibold text-black'>Add a Breack</h1>
            </div>

            {/* time second in here */}
            <div className=' flex mx-8 py-5 px-8  rounded-lg gap-4  bg-yellow-50 drop-shadow-lg'>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"><span className='text-2xl'>10</span><sub>s</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>20</span><sub>S</sub> </button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>30</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>40</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success border-none rounded-full px-6"> <span className='text-2xl'>50</span><sub>S</sub></button>
                
            </div>

            <h2 className='text-4x font-bold text-black px-10' >Exercise Details</h2>

            {/* exercise time in here */}
            <div className='mt-20 px-5  text-black mb-10'>
                <div className='py-8 px-8 rounded-lg bg-yellow-50 drop-shadow-lg '>
                    <h1 className='text-xl '>Exercise time:<span className='pl-5'>200 second</span></h1>
                </div>
                <div className='py-8 px-8 mt-5 rounded-lg bg-yellow-50 drop-shadow-lg '>
                    <h1 className='text-xl '>Exercise time:<span className='pl-5'>15 second</span></h1>
                </div>
  
            </div>

            {/* active complate button */}
            <button className="btn btn-active btn-primary px-10 mt-6">Activity Complated.</button>

        </div>

    );
};

export default UpdateCard;