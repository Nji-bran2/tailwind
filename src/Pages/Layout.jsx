import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className=' flex gap-1 w-screen h-screen overflow-hidden flex-row'>
        <Sidebar/>

       <main className='flex-1 min-h-0 overflow-auto '>{children}</main> 

    </div>
  )
}

export default Layout