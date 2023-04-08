import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const angti = useContext(RingContext)

    return (
        <div>
            <h1 className='text-xl font-bold'>Special</h1>
            <p><small>{ring}</small></p>
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Special;