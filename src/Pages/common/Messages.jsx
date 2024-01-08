import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import { BiEnvelope } from 'react-icons/bi'
import Seemore from '../../Components/Seemore';


const data = [
    { id: 1, title: 'message', text:'Scheduled',icons: <BiEnvelope/>, date: '1hr ago' },
    { id: 2, title: 'message', text:'Scheduled',icons: <BiEnvelope/>, date: '2023-01-03'},
    { id: 3, title: 'message', text:'Scheduled',icons: <BiEnvelope/>, date: '2023-01-02' },
    { id: 4, title: 'message', text:'Scheduled',icons: <BiEnvelope/>, date:'2023-01-01' },
  ];
const Messages = () => {
  return (
    <div className='border border-slate-300 rounded-lg bg-white  my-2'>
        <div  className='flex justify-between py-3'>
            <h1>Messages</h1>
            <div className='flex gap-4 mr-4'>
           <BiEnvelope/>
            <FaEllipsisH/>
            </div>
            </div>
        {data.map((item, index) => (
            <div key={item.id} className={`flex justify-between mr-3 py-2 ${index !== data.length - 1 ? 'border-b' : ''}`}>
         <div className='flex flex-row'>
            <div className='mx-5 mt-4 '>
                {item.icons}
            </div>
            <div className='flex flex-col'>
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.text}</p>
            </div>
          </div>
          <p>{item.date}</p>
        </div>
      ))}
       <div className='flex justify-end mr-5 p-2'>
        <Seemore/>
      </div>
    </div>
  )
}

export default Messages