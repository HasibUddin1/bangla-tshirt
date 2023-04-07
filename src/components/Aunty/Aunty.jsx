import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Aunty</h1>
            <div className='flex'>
                <Cousin>Nafis</Cousin>
                <Cousin>Nafisa</Cousin>
                <Cousin>Raihan</Cousin>
            </div>
        </div>
    );
};

export default Aunty;