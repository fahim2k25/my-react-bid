import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "url(/banner_bg.jpg)",}}>

            <div className="hero-overlay"></div>
            <div className="text-neutral-content text-start">
                <div className="w-1/2">
                    <h1 className="mb-5 text-5xl sora-bold">Bid on Unique Guitars from Around the World</h1>
                    <p className="mb-5 text-2xl sora-3">
                    Discover rare collectibles, luxury designer gears, and vintage treasures in our curated auctions..
                    </p>
                    <button className="btn btn-soft sora-5">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;