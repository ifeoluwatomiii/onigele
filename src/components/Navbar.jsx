import React from 'react'
import logo from '../assets/logoo.svg'
import {FiMenu } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false)
  return (
    <div className='flex px-4 py-4 justify-between items-center bg-white/95'>
        <div className='w-[30%] cursor-pointer'>
            <img className='w-[100%] xl:w-[45%]' src={logo} alt="" />
        </div>
        <div className='flex items-center gap-6 hidden xl:flex grow xl:justify-end'>
            <a className='hover:underline underline-offset-8 underline decoration-red-600 decoration-2' href="">Home</a>
            <a className='hover:underline underline-offset-8 decoration-red-600 decoration-2' href="">About</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Services</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Contact</a>
        </div>

        {/*mobile navbar*/}
        <div  className={isOpen ?'bg-black/70 flex flex-col gap-4 w-[50%] xl:hidden px-4 py-8 text-white mt-4 cursor-pointer  transition-all ease-in duration-500 shadow-lg fixed top-10 left-[44%] items-center':' text-white transition-all ease-out duration-500 hidden'}>
            <a className='hover:underline underline-offset-8 underline  decoration-red-600 decoration-2' href="">Home</a>
            <a className='hover:underline underline-offset-8 decoration-red-600 decoration-2' href="">About</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Services</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Contact</a>
        </div>

        
        <div>
            {isOpen ?
            (<VscClose
            className='w-[30px] h-[40px] text-black cursor-pointer'
            title='Close'
            onClick={()=>setIsOpen(!isOpen)}/>):
            <FiMenu className='text-black w-6 h-6 xl:hidden cursor-pointer'
            title='Menu'
            onClick={()=> setIsOpen(!isOpen)}/>}
        </div>
                
    </div>
  )
}

export default Navbar