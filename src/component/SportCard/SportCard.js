
const SportCard = ({ sports,addToList }) => {
    

    const { picture, name,age,time,about}=sports;

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
                        <button  onClick={()=>addToList(time)} className="btn btn-primary btn-lg px-20 w-full">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;