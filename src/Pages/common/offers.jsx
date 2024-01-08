import React from 'react';
 
import enve from '../../assets/enve.jpg'
import pay from '../../assets/save.png' 
import depos from '../../assets/depos.png'
import message from '../../assets/message.png'
const data = [
  { id: 1, title: 'Transfers', icon: enve },
  { id: 2, title: 'Pay bills', icon:pay },
  { id: 4, title: 'Messages', icon:message },
  { id: 3, title: 'Deposite', icon: depos },
];

const Offers = () => {
  return (
    <div className='flex items-start justify-start space-x-5'>
      {data.map((item) => (
        <div key={item.id} className='w-[5rem]  h-[5rem]  item-center border  border-slate-300  bg-green-700 my-2 rounded-lg p-3'>
          <img src={item.icon} alt={item.title} className=' w-[60%] mx-3 h-fit items-center' />
          <h2 className='whitespace-nowrap'>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Offers;
