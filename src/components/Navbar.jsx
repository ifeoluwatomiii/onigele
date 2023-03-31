import React from 'react'
import logo from '../assets/logoo.svg'
import {FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='flex px-4 py-4 justify-between items-center'>
        <div className='w-[30%]'>
            <img className='w-[45%]' src={logo} alt="" />
        </div>
        <div className='flex items-center gap-6'>
            <a className='hover:underline underline-offset-8 underline underline-offset-8  decoration-red-600 decoration-2' href="">Home</a>
            <a className='hover:underline underline-offset-8 decoration-red-600 decoration-2' href="">About</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Services</a>
            <a className='hover:underline underline-offset-8  decoration-red-600 decoration-2' href="">Contact</a>
        </div>
                
    </div>
  )
}

export default Navbar