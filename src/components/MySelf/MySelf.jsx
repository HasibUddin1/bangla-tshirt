import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h1 className='text-xl font-bold'>MySelf</h1>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;