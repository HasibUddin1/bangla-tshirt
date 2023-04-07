import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()

    const [] = useState([])

    const handleAddToCart = tshirt => {
        console.log(tshirt)
    }

    return (
        <div className='home-container'>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='mt-10'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;