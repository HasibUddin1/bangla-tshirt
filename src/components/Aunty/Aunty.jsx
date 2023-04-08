import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = ({ ring }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1 className='text-xl font-bold'>Aunty</h1>
            <div className='flex'>
                <Cousin>
                    Nafis
                    Grandpa Money: {money}
                    <button onClick={() => setMoney(money + 1000)} className='bg-slate-500 hover:bg-slate-700 ease-in-out duration-200 text-white p-2 rounded-lg'>Add 1000 Taka</button>
                </Cousin>
                <Cousin>Nafisa</Cousin>
                <Cousin hasFriend={true} ring={ring}>Raihan</Cousin>
            </div>
        </div>
    );
};

export default Aunty;