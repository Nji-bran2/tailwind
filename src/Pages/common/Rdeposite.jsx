import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import  { MdAccessTime } from 'react-icons/md'
import  { TiTickOutline} from 'react-icons/ti'
const data = [
    { id: 1, title: '0Processing', icon: <MdAccessTime/> },
    { id: 2, title: '9Accepted', icon :<TiTickOutline/>},
  
  ];

const Rdeposite = () => {
  return (
    <div className='flex flex-col border border-slate-300 rounded-lg bg-white'>
    <div  className='flex justify-between py-3'>
        <h1 className='font-bold'>Recent Deposites</h1>
        <div className='flex mr-5'>
        <FaEllipsisH/>
        </div>
    
    </div>
    <div className='flex flex-row w-1/2'>
    {data.map((item) => (
        <div key={item.id} className=' flex flex-1  h-[3rem]  item-center border  border-slate-300  bg-green-700 my-2 rounded-lg p-2'>
          <div>{item.icon}</div>
          <h2 className='whitespace-nowrap'>{item.title}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Rdeposite