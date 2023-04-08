import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Friend</h1>
            {ring && <p>{ring}</p>}
        </div>
    );
};

export default Friend;