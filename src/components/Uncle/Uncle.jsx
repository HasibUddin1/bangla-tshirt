import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Uncle</h1>
            <div className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Habil</Cousin>
                <Cousin>Nabila</Cousin>
            </div>
        </div>
    );
};

export default Uncle;