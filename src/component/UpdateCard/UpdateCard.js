import React from 'react';
import { faLocationArrow, faLocationPin, faMap, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


const UpdateCard = ({time}) => {

    const toastify = () => {
        toast("You have completed your activity!", { position: "top-center" });
    };

    const [breakTime, setBreakTime] = useState(0);
    useEffect(() => { }, [breakTime]);

    const addLocalStorage = Time => {
        setBreakTime(Time);
        localStorage.setItem("break", Time);
    };
    const getLocalStorageItem = localStorage.getItem("break");
    return (
        <div className='sticky top-5 px-5'>
            {/* Name and Location in here */}
           <div className='flex items-center mt-10 gap-4 '>
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
            <div className='flex justify-between px-3  rounded-lg gap-4  bg-yellow-50 mt-8 shadow-2xl '>
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

            <div className='py-5 '>
                <h1 className="font-bold text-black text-2xl mb-5">Add A Break</h1>
                <div className="bg-yellow-50 py-3  px-5 flex justify-between rounded-lg">
                    <div className="rounded-full cursor-pointer transition-all   bg-gray-800  text-white  hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                        <button
                            className="  p-4 font-bold "
                            onClick={e => addLocalStorage(e.target.innerText)}>
                            15
                        </button>
                        <span className="relative right-2">s</span>
                    </div>
                    <div className="rounded-full cursor-pointer transition-all   bg-gray-800  text-white  hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                        <button
                            className="  p-4 font-bold "
                            onClick={e => addLocalStorage(e.target.innerText)}>
                            25
                        </button>
                        <span className="relative right-2">s</span>
                    </div>
                    <div className="rounded-full cursor-pointer transition-all   bg-gray-800  text-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                        <button
                            className="  p-4 font-bold "
                            onClick={e => addLocalStorage(e.target.innerText)}>
                            35
                        </button>
                        <span className="relative right-2">s</span>
                    </div>
                    <div className="rounded-full cursor-pointer transition-all   bg-gray-800  text-white  hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                        <button
                            className="  p-4 font-bold "
                            onClick={e => addLocalStorage(e.target.innerText)}>
                            45
                        </button>
                        <span className="relative right-2">s</span>
                    </div>
                    <div className="rounded-full cursor-pointer transition-all   bg-gray-800  text-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                        <button
                            className="  p-4 font-bold "
                            onClick={e => addLocalStorage(e.target.innerText)}>
                            60
                        </button>
                        <span className="relative right-2">s</span>
                    </div>
                </div>
            </div>
            


            <h2 className='text-4x font-bold  text-black' >Exercise Details</h2>

            {/* exercise time in here */}
            <div className='mt-5   text-black mb-10'>
                <div className='py-8 px-8 rounded-lg bg-yellow-50 shadow-2xl '>
                    <h1 className='text-xl '>Exercise time:<span className='pl-5'>{time} second</span></h1>
                </div>
                <div className='py-8 px-8 mt-5 rounded-lg bg-yellow-50 shadow-2xl'>
                    <h1 className='text-xl '>Break Time:<span className='pl-5'>{getLocalStorageItem}second</span></h1>
                </div>
  
            </div>

            {/* active complate button */}
            <button onClick={toastify} className="btn btn-active btn-primary px-10 mt-6 w-full">Activity Complated.</button>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default UpdateCard;