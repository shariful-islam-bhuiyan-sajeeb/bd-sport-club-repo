import React, { useState } from 'react';

const SportCard = ({sports}) => {
    const [card,setCard] =useState({})
    console.log(card);


    const addToList =()=>{

    }



    const { picture, name,age,time,about}=sports

    return (
        <div className='grid'>
            <div className="card card-compact bg-base-100 shadow-2xl p-6 mt-16">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{about.slice(0,100)}...</p>
                    <p>For Age:{age}</p>
                    <p>For Time{time}</p>

                    <div className="card-actions justify-center ">
                        <button className="btn btn-primary btn-lg px-20">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;