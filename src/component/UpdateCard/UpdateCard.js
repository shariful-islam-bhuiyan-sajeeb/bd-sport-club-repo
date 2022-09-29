import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpdateCard = () => {
    return (
        <div >
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
            <div className='flex mx-5 px-5 rounded-lg gap-4  bg-yellow-50 mt-8 '>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>70</span> <sub className='text-2xl'>kg</sub></h1>
                <p className='text-2xl'>Weight</p>
             </div>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>6.8</span></h1>
                <p className='text-2xl'>height</p>
             </div>
             <div className=''>
                <h1><span className='text-5xl text-black font-bold'>23</span> <sub className='text-2xl'>yrs</sub></h1>
                <p className='text-2xl'>Age</p>
             </div>
           </div>
            <h1 className='text-5xl py-10 font-semibold text-black'>Add a Breack</h1>

            <div className=' flex mx-8 py-5 px-8 rounded-lg gap-4  bg-yellow-50'>
                <button className="btn btn-outline btn-success rounded-full px-6"><span className='text-2xl'>10</span><sub>s</sub></button>
                <button className="btn btn-outline btn-success rounded-full px-6"> <span className='text-2xl'>20</span><sub>S</sub> </button>
                <button className="btn btn-outline btn-success rounded-full px-6"> <span className='text-2xl'>30</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success rounded-full px-6"> <span className='text-2xl'>40</span><sub>S</sub></button>
                <button className="btn btn-outline btn-success rounded-full px-6"> <span className='text-2xl'>50</span><sub>S</sub></button>
                
            </div>
            <h2 className='text-4x font-bold text-black px-10 mt-18' >Exercise Details</h2>
            <div className='mt-20 px-5 text-black'>
                

            </div>

        </div>

    );
};

export default UpdateCard;