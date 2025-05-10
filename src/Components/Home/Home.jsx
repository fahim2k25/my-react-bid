import React, { Suspense, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Bidding from '../Bidding/Bidding';


const handleGuitarPromise = async () => {
    const response = await fetch("/guitars.json");
    const data = response.json();
    return data;
}


const Home = () => {

    const [favList, setFavList] = useState([]);

    const handleFavList = (objGuitar) => {
        const tempArray = [...favList, objGuitar];
        setFavList(tempArray);
    }

    const getGuitarPromise = handleGuitarPromise();

    return (

        <div>
            <Navbar favList={favList}></Navbar>
            <Banner></Banner>
            <Suspense fallback={<h4>Loadding......</h4>}>
                <Bidding favList={favList} getGuitarPromise={getGuitarPromise} handleFavList={handleFavList}></Bidding>
            </Suspense>
            <Footer></Footer>

        </div>

    );
};

export default Home;