import React, { use } from 'react';
import Auction from '../Auction/Auction';
import Favorite from '../Favorite/Favorite';


const Bidding = ({ getGuitarPromise, handleFavList, favList, handleRemovalFavList }) => {
    const guitars = use(getGuitarPromise);

    return (
        <div className='bg-[#EBF0F5] py-28'>
            <div className='w-11/12 mx-auto'>
                <section>
                    <h2 className='sora-5 text-3xl text-[#0E2954] mb-4'>Active Auctions</h2>
                    <p className='sora-regular text-xl text-slate-900 mb-4'>Discover and bid on extraordinary guitars</p>
                </section>
                <section className='flex justify-between gap-5'>
                    <Auction guitars={guitars} handleFavList={handleFavList} ></Auction>
                    <Favorite favList={favList} handleRemovalFavList={handleRemovalFavList}></Favorite>
                </section>
            </div>
        </div>
    );
};

export default Bidding;