import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPassport} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import SportCard from '../SportCard/SportCard';
import UpdateCard from '../UpdateCard/UpdateCard';
const Headers = () => {

 const [sports,setSport] =useState([]);
 const [times,setTime] =useState(0)
    const addToList =(time)=>{
       setTime(times+time)

    }
  


 useEffect(()=>{
     fetch('sport.json')
     .then(res=>res.json())
     .then(data =>setSport(data))
 },[])
    return (
        <div className='lg:pl-10 lg px-4 bg-slate-100 xl:grid xl:grid-cols-4 lg:grid-cols-3 gap-6 sm:grid grid-cols-2 flex  flex-col-reverse  ' >
            <div className='text-5xl font-semibold xl:col-span-3 lg:col-span-2  pb-12 pt-6 '>
               <div className='pt-20 gap-5'>
                    <div className='flex gap-5'>
                        <FontAwesomeIcon icon={faPassport}></FontAwesomeIcon>
                        <h2> <span className=' font-bold  text-emerald-600 '>BD</span> <span className='text-red-500'>Sport Club.</span> </h2>
                    </div>
                        <h1 className='text-4xl text-black pr-0 font-semibold mt-10'>Select Your Favourite Sport.</h1>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mb-16  gap-5'>
                        {
                            sports.map(sports => <SportCard sports={sports} addToList={addToList}></SportCard>)
                        }
                     </div>        
              </div>
           </div>
           
            <div className='bg-orange-300  ' >
                <UpdateCard time={times} > </UpdateCard>
           </div>
     </div>
    );
};

export default Headers;
