import React from 'react';
import Guitar from './Guitar';

const Auction = ({ guitars, handleFavList }) => {
  
    return (

        <div className="overflow-x-auto bg-white rounded-2xl p-1 w-3/5">

            <table className="table">

                {/* head */}
                <thead>
                    <tr className='sora-regular text-xl text-slate-800 text-left'>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    {
                        guitars.map((guitar) => <Guitar key={guitar.id} singleGuitar={guitar} handleFavList={handleFavList}></Guitar>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Auction;