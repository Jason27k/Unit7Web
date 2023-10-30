import { React, useState, useEffect } from 'react'
import Crewmate from "../../assets/crewmate.png"
import CrewCard from './CrewCard'
import supabase from '../../Client'

function Gallary() {
  const [crew, setCrew] = useState()
  const tableName = "mates"
  const fetchCrew = async () => {
      const {data: mates} = await supabase
        .from(tableName)
        .select('id, name, speed, color');
      setCrew(mates)
  }
  useEffect(() => {
      fetchCrew()
  }, [])
  return (
    <div className='overflow-y-scroll h-screen'>
      <h1 className='text-6xl font-semibold text-center my-16'>You Crewmate Gallery!</h1>
      <div className='flex flex-row flex-wrap justify-evenly w-5/6 mx-auto'>
        {crew?.map((mate) => (
          <CrewCard id={mate.id} name={mate.name} speed={mate.speed} color={mate.color} key={mate.id} image={Crewmate}/>
        ))}
      </div>
    </div>
  )
}

export default Gallary