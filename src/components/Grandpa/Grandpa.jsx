import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond'
    return (
        <div className='text-xl font-bold border-2 border-amber-500 rounded-xl p-5'>
            <h1>Grandpa</h1>
            <div className='flex grandpa-container gap-5 justify-center items-center'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;