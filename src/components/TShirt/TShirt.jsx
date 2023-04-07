import React from 'react';

const TShirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt)
    const {picture, name, price} = tshirt
    return (
        <div className='border-2 p-5 rounded-xl flex flex-col justify-between'>
            <img className='rounded-xl' src={picture} alt="" />
            <h4 className='text-2xl font-semibold'>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='bg-slate-600 hover:bg-slate-800 ease-in-out duration-200 text-white w-full py-2 rounded-xl'>Add To Cart</button>
        </div>
    );
};

export default TShirt;