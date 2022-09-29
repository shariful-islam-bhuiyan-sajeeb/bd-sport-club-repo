import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPassport} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import SportCard from '../SportCard/SportCard';


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
                        <h1 className='text-4xl text-black pr-0 font-semibold mt-10'>
                            Select you Favourite Game.</h1>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            sports.map(sports => <SportCard sports={sports}></SportCard>)
                        }
                     </div>       
                    
               </div>
               
              
                
               
           </div>
           
           <div>
                <h1> Left side</h1>
           </div>
        </div>
    );
};

export default Headers;
