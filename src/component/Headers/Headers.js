import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPassport} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import SportCard from '../SportCard/SportCard';
import UpdateCard from '../UpdateCard/UpdateCard';


const Headers = () => {

 const [sports,setSport] =useState([]);
  


 useEffect(()=>{
     fetch('sport.json')
     .then(res=>res.json())
     .then(data =>setSport(data))
 },[])
    return (
        <div className='flex' >
            <div className='text-5xl font-semibold md:w-8/12 mx-auto '>
               <div className='pt-20 gap-5'>
                    <div className='flex gap-5'>
                        <FontAwesomeIcon icon={faPassport}></FontAwesomeIcon>
                        <h2> <span className=' font-bold  text-emerald-600 '>BD</span> <span className='text-red-500'>Sport Club.</span> </h2>
                    </div>
                        <h1 className='text-4xl text-black pr-0 font-semibold mt-10'>Select Your Favourite Sport.</h1>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mb-16  gap-5'>
                        {
                            sports.map(sports => <SportCard sports={sports}></SportCard>)
                        }
                     </div>        
              </div>
           </div>
           
            <div className='bg-orange-300 w-96 h-screen' >
                <UpdateCard></UpdateCard>
           </div>
     </div>
    );
};

export default Headers;
