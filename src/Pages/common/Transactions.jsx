import React from 'react';
import {HiOutlineSearch} from 'react-icons/hi'
import {FaEllipsisH} from 'react-icons/fa'
import Seemore from '../../Components/Seemore';

const data = [
  { id: 1, title: 'Transaction 1', date: '2023-01-01', amount: 100 },
  { id: 2, title: 'Transaction 2', date: '2023-02-01', amount: 200 },
  { id: 3, title: 'Transaction 3', date: '2023-03-01', amount: 300 },
  { id: 4, title: 'Transaction 4', date: '2023-03-01', amount: 300 },

];

const TransactionList = () => {
  return (
    <div className=' flex flex-col border border-slate-300 rounded-lg my-2 bg-white  '>
        <div className='flex justify-between py-3 mx-3'>
            <h1>Transactions</h1>
            <div className='flex gap-4 '>
            <HiOutlineSearch/>
            <FaEllipsisH/>
            </div>
        </div>
      {data.map((item, index) => (
        <div key={item.id} className={`flex justify-between py-2 mx-3 ${index !== data.length - 1 ? 'border-b' : ''}`}>
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.date},Checkings</p>
          </div>
          <p>${item.amount}</p>
        </div>
      ))}
      <div className='flex justify-end mr-5 p-2'>
        <Seemore/>
      </div>
    </div>
  );
};

export default TransactionList;
