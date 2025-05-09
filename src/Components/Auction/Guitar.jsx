import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function dynamicTime(duration) {
    const regex = /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = duration.match(regex);
    let days = parseInt(matches[1]) || 0;
    let hours = parseInt(matches[2]) || 0;
    let minutes = parseInt(matches[3]) || 0;
    const result = `${days > 1 ? `${days} days` : `${days} day`} ${hours ? `${hours} hours` : ""} ${minutes ? `${minutes} minutes` : ""} left`;
    return result;
}



const Guitar = ({ singleGuitar, handleFavList }) => {


    const notify = () => {
        toast("Added the Product Successfully");
    }

    const { title, currentBidPrice, image, timeLeft } = singleGuitar;

    const [bid, setBid] = useState(false);


    const handleBidNow = (objGuitar) => {
        setBid(true);
        handleFavList(objGuitar);

    }

    return (
        <tr className='text-[#0E2954]'>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-28 w-28">
                            <img
                                src={image}
                                alt="My first guitar" />
                        </div>
                    </div>
                    <div>
                        <div className="sora-regular text-base">{title}</div>
                    </div>
                </div>
            </td>

            <td className="sora-5 text-base">
                ৳ {currentBidPrice.toLocaleString()}
            </td>
            <td className="sora-5 text-sm">{dynamicTime(timeLeft)}</td>
            <th>

                <button
                    onClick={() => {
                        notify();
                        handleBidNow(singleGuitar);
                    }}
                    disabled={bid ? true : false}
                    className={`btn btn-circle ${bid ? 'cursor-not-allowed':''}`}>
                    { 
                        !bid ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> :
                        <img className='w-5 h-5' src="/bidHeart.svg" alt="heart"/>
                    }
                </button>
                <ToastContainer />
            </th>
        </tr>
    );
};

export default Guitar;