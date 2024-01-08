import {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { HiOutlineLogout } from 'react-icons/hi';
import { motion } from 'framer-motion'
import {FcMoneyTransfer} from 'react-icons/fc' 
import { AiOutlineMenu } from 'react-icons/ai'

import { RiLuggageDepositFill} from 'react-icons/ri'
import { MdOutlineDashboard,MdSettings, MdAccountBalanceWallet,MdOutlineContactSupport, MdPayment,MdOutlineMessage } from 'react-icons/md'
import logo from '../assets/logo.png'
import { useMediaQuery } from 'react-responsive'


const Sidebar = () => {


  const {pathname} = useLocation()

    const isTab = useMediaQuery({ query: '(max-width: 768px)' })

    const [isOpen, setIsOpen] = useState(isTab ? false : true)

    
    const Sidebar_animation =  isOpen ? {
        //mobile view
        open : {
            x: 0,
            width: "16rem",
            transition: {
              damping: 40,
            },
          },
          closed : {
              width: 0,
              transition: {
                damping: 40,
              },
          }
        }:
        {
        
        //system view
        open : {
            x: -250,
          width: "16rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        closed : {
            width: "4rem",
            transition: {
              damping: 40,
            },
        }
    };
    useEffect(() => {

      if(isTab){
        //mobile 
        setIsOpen(false)
      }else{
    // laptop
     setIsOpen(true)
      }
    }, [isTab])

    //on pathname change close sidebar (only mobile view)
    useEffect(() => {
      isTab && setIsOpen(false);
    }, [isTab, pathname])
    
    

    return (
       
    <div>
        <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[19] bg-black/50
        ${isOpen ? 'block' : "hidden"}`}>

        </div>
        <motion.div
        variants={Sidebar_animation}
        initial={{x: isTab ? -250 : 0}}
        animate={isOpen ? "open" : "closed"}
        className='bg-white text-gray shadow-xl z-[20] w-[16rem] max-w-[16rem] h-screen overflow-hidden
        md:relative fixed fullHeight'>

        <div className='flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3 '>
            <img src= {logo} alt="iwomi" width={45}/>
            <span className='text-xl whitespace-pre'>Iwomi techs</span>
        </div>

        <div className='flex flex-col h-full'>
            <ul className='whitespace-pre px-3 text-[1rem] py-5 flex  flex-col gap-1 font-medium overflow-x-hidden 
            scrollbar-thin scollbar-track-white scrollbar-thumb-slate-100 '>
                <li>
                    <NavLink to='/dashboard' className={'link'} >
                        <MdOutlineDashboard fontSize={24} className='min-w-max'/>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/accounts' className={'link'} >
                        <MdAccountBalanceWallet fontSize={24} className='min-w-max'/>
                       Accounts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/transfers' className={'link'} >
                        <FcMoneyTransfer fontSize={24} className='min-w-max'/>
                       Transfers
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/deposites' className={'link'} >
                        <RiLuggageDepositFill fontSize={24} className='min-w-max'/>
                       Deposites
                    </NavLink> 
                </li> 
                 <li>
                    <NavLink to='/payment' className={'link'} >
                        <MdPayment fontSize={24} className='min-w-max'/>
                      Payments
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/messages' className={'link'} >
                        <MdOutlineMessage fontSize={24} className='min-w-max'/>
                       Messages
                    </NavLink> 
                </li>
                
            </ul>
            <div className="flex flex-col gap-0.5 py-4 border-t mx-3 border-slate-300 my-20">
              <ul>
              <li>
                    <NavLink to='/support' className={'link'} >
                        <MdSettings fontSize={24} className='min-w-max'/>
                       Settings
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/support' className={'link'} >
                        <MdOutlineContactSupport fontSize={24} className='min-w-max'/>
                      Help & Support
                    </NavLink> 
                </li>
              </ul>
            <div className='cursor-pointer px-3 mt-7 text-red-500 '>
		<NavLink to="/login" className="flex items-center">
		  <span className="text-xl ">
            <HiOutlineLogout className='min-w-max' />
          </span>
          Logout
		  </NavLink>
        </div>
        </div>       
        </div>

            {/* button controller */}
            <motion.div
            onClick={() => {setIsOpen(!isOpen)}}
        
    
            className='absolute w-fit h-fit z-50 right-0 top-1 cursor-pointer sm:block hidden'>
                <AiOutlineMenu/>
            </motion.div>
        </motion.div>
        <div className='m-3 md:hidden' onClick={()=>setIsOpen(true)}>
        <AiOutlineMenu size={24}/>
        </div>
        </div>

      )
}

export default Sidebar