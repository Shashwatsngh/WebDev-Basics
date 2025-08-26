import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-slate-700 text-white'>
      <p className='text-2xl font-bold'>Startup</p>
      <div className='flex gap-4'>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
} 

export default Navbar