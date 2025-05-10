import React from 'react';

const Navbar = ({ favList }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm justify-between p-8">
            {/* Navbar left most side */}
            <div>
                <a className="btn btn-ghost text-xl"><p className='sora-regular text-blue-800'>Auction<span className='sora-bold text-amber-400'>Gallery</span></p></a>
            </div>

            {/* Navbar middle section */}
            <div>
                <ul className='flex gap-6 sora-regular text-lg'>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Categories</li>
                    <li>How it works</li>
                </ul>
            </div>

            {/* Navbar right most side */}
            <div className="flex gap-6">

                {/* the notification for cart */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                        <span className="badge badge-xs badge-secondary indicator-item">{favList.length}</span>
                    </div>
                </div>


                {/* my profile pic */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="ring-accent-content ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img

                            alt="Tailwind CSS Navbar component"
                            src='/fahimStrides.jpeg' />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;