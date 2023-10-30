import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Peeking  from '../assets/peeking.png'

function WelcomeSidebar() {
  return (
   <> 
    <div className='flex flex-row h-screen w-screen'>
      <div className='bg-crewSecond w-1/6 flex flex-col justify-between'>
        <div className="flex flex-col items-center text-center">
          <Link to='/' className='text-white text-2xl p-4'>Home</Link>
          <Link to='/create' className='text-white text-2xl p-4'>Create a Crewmate!</Link>
          <Link to='/gallery' className='text-white text-2xl p-4'>Gallery</Link>
        </div>
        <img src={Peeking} alt='Crewmate' className='self-center' />
      </div>
      <div className="w-5/6 bg-crewPrimary text-white">
        <Outlet  />
      </div>
    </div>
   </>
  )
}

export default WelcomeSidebar