/* eslint-disable no-unused-vars */
import React from 'react'
import '../index.css';
import  Dashboardstats  from './common/Dashboardstats'
import Profile from './common/profile';
import Offers from './common/offers';
import TransactionList from './common/Transactions';
import Payment from './common/Payment';
import Contact from './common/contact';
import Messages from './common/Messages';
import Rdeposite from './common/Rdeposite';

export default function Dashboard() {
  return (
    <div className='bg-color  h-screen '>
      <div className='mx-10'>
      <Profile/>
   
   <Dashboardstats />
   <Offers/>
   <div class="flex space-x-4">
  <div class="flex flex-col w-1/2 space-y-4">
    <TransactionList/>
    <Payment/>
  </div>
  <div class="flex flex-col  w-1/2 space-y-2">
    <Contact/>
    <Rdeposite/>
    <Messages/>
  </div>
</div>

      </div>
      
   
    </div>
  )
}
