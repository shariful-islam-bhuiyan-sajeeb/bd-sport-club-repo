import React from 'react';

const SportCard = ({sports}) => {

    const { picture, name,age,time,about}=sports

    return (
        <div className='grid '>
            <div className="card card-compact  bg-base-100 shadow-xl mt-16">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center ">
                        <button className="btn btn-primary btn-lg px-20">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;