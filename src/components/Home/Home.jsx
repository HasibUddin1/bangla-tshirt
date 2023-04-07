import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast('You have already selected this item')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const removeFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id)
        setCart(remaining)
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
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;