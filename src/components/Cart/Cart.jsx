import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Order Summery</h1>
            <h2 className='text-3xl font-semibold'>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    className='text-xl font-semibold mb-3'
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => removeFromCart(tshirt._id)} className='bg-slate-500 hover:bg-slate-700 ease-in-out duration-200 text-white p-2 rounded-lg'>X</button></p>)
            }
        </div>
    );
};

export default Cart;