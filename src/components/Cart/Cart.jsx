import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <p>Thanks for buying our products</p>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold'>Order Summery</h1>
            {message}
            {
                cart.length < 2
                ? <p>Aro Kinen Vai</p>
                : <p>Vai Amar JOSS!!!</p>
            }
            <h2 className={`text-3xl ${cart.length ? 'font-semibold' : ''}`}>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    className='text-xl font-semibold mb-3'
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => removeFromCart(tshirt._id)} className='bg-slate-500 hover:bg-slate-700 ease-in-out duration-200 text-white p-2 rounded-lg'>X</button></p>)
            }
            {
                cart.length === 2
                && <p>2 amar lucky number</p>
            }
            {
                cart.length < 3
                || <p>Dhonnobad vai</p>
            }
        </div>
    );
};

export default Cart;

/*
    CONDITIONAL RENDERING
1. use if else to set a variable that will contain an element, components
2. ternary operator: condition ? 'for true' : 'for false'
3. Logical &&: (if the condition is true then the next thing will be displayed)
4. Logical ||: (if the condition is false then the next thing will be displayed)
*/

/*
CONDITIONAL CSS CLASS
1. use ternary
2. ternary inside template string
*/