import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal bg-white footer-center text-gray-700 p-14">
            <aside>
                <div>
                    <a className="btn btn-ghost text-xl"><p className='sora-regular text-blue-800'>Auction<span className='sora-bold text-amber-400'>Gallery</span></p></a>
                </div>
                <p className="sora-9">
                    Bid. Win. Own.
                </p>

                <ul className='flex gap-4 sora-5 text-base mt-2'>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Categories</li>
                    <li>How it works</li>
                </ul>

                <p className='sora-5 text-xs mt-4'>Copyright © {new Date().getFullYear()} - AuctionGallery. All right reserved</p>
            </aside>
           
        </footer>
    );
};

export default Footer;