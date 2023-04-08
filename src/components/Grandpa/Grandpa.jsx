import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('Golden Ring')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond'
    const [money, setMoney] = useState(0)
    return (
        <div className='text-xl font-bold border-2 border-amber-500 rounded-xl p-5 grandpa'>
            <h1>Grandpa has money: {money}</h1>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='GoldenRing'>
                    <div className='flex grandpa-container gap-5 justify-center items-center'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </div>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
1. create context and export
2. create a provider and pass a value
3. use useContext and receive
*/