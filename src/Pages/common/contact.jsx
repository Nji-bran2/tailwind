import React from 'react'
 
import logo from '../../assets/logo.png'
import { MdOutlineInfo, MdOutlineMessage, MdCall } from 'react-icons/md'
const Contact = () => {
  return (
    <div className='flex flex-col  border border-slate-300 rounded-lg bg-white'>
        <div  className='i'>
        <img src={logo} alt="" className='mx-60 h-20' />  
        
        </div>
        <div className='flex justify-between'>
          <div className='  items-center mx-10 '>
            <MdCall/>
            <p>call</p>
          </div>
          <div className='items-center mx-10'>
            <MdOutlineMessage className='mx-5'/>
            <p>message</p>
          </div>
          <div className='items-center mx-10 mb-5'>
            <MdOutlineInfo/>
            <p>info</p>
          </div>
        </div>
    </div>
  )
}

export default Contact