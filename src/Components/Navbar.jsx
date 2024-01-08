/* eslint-disable no-template-curly-in-string */

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import  close  from '../assets/close.jpg';
import  menu  from '../assets/menu.png';
import { navLinks } from '../Constants/Data'
import Button from './Button';
import Login from './Login';
import {  Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


  return (
    <>
   <nav className='w-full flex py-6 justify-between item-center navbar'>
         <img src= {logo} alt="iwomi" className='w-[100px] h-[60px]'/>
         
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
     {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-green-800" : "text-green-800"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
         <Link to={nav.path}>
            {nav.title}
        </Link>



             </li>
          ))}
         </ul>
    {/* view on smaller devices */}
        
    <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-green-800" : "text-green-800"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.path}>
                  {nav.title}
                </Link>


              </li>
            ))}
          </ul>

        </div>
      </div>
      <div className='ml-6 sm:block hidden'>
        <Button/>
        </div>
   </nav>
   <Routes>  
    
      <Route path="/login" element={<Login />} />

 </Routes> 

</>
  )
}

export default Navbar