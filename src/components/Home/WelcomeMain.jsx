import React from 'react'
import Crewmates from '../../assets/Crewmates.png'
import Spaceship from '../../assets/Spaceship.webp'

function WelcomeMain() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center mx-7'>
      <h1 className='text-6xl font-semibold mb-7'>Welcome to the Crewmate Creator!</h1>
      <p className='text-2xl font-semibold'>
        Here is wher you can create your very own set of crewmates 
        before sending them off into space!
      </p>
      <img src={Crewmates} alt="Image of many different colored crewmates together in two rows" 
        className='h-72'
      />
      <img src={Spaceship} alt="Spaceship" 
        className='h-96'
      />
    </div>
  )
}

export default WelcomeMain