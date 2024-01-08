import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import  { MdAccessTime, MdPayment } from 'react-icons/md'
import  { TiTickOutline} from 'react-icons/ti'
import paya from '../../assets/paya.jpg'

const data = [
    { id: 1, title: 'Transaction 1', type:'Scheduled',icons: < MdAccessTime/>, amount: 100 },
    { id: 3, title: 'Transaction 3', type:'Scheduled',icons: <TiTickOutline/>, amount: 300 },
  ];

const Payment = () => {
  return (
    <div className='flex flex-col border bg-white border-slate-300 rounded-lg '>
        <div  className='flex justify-between py-3'>
            <h1 className='font-bold'>Payment</h1>
            <div className='flex mr-5'>
            <FaEllipsisH/>
            </div>
        
        </div>
        <div className='flex justify-center mx-20'>
          <div className='  items-center  mx-10 '>
            <MdPayment className='mx-5'/>
            <p>Pay bill</p>
          </div>
          <div className='items-center mx-10'>
        <img src={paya} alt="" className='w-[10%] ml-5'/>
            <p>Pay a Person</p>
          </div>
        </div>
         {data.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
         <div className='flex flex-row'>
            <div className='mx-5'>
              {item.icons}
            </div>
            <div className='flex flex-col'>
            <h2 className="font-bold">{item.title}</h2>
            <p >{item.type}</p>
            </div>
          </div>
          <p className='mr-5'>${item.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default Payment