import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../ui/button'
import CrewStats from '../../assets/crewstats.png'
import { Link } from 'react-router-dom'
import supabase from '../../Client'

function CrewView() {
  const [crewMember, setCrewMember] = useState({})
  const tableName = "mates"
  const params = useParams()
  const id = params.id
  const fetchCrew = async () => {
      const {data: mates, error} = await supabase
        .from(tableName)
        .select('id, name, speed, color')
        .eq('id', id)
      setCrewMember(mates[0])
  }
  useEffect(() => {
      fetchCrew()
      
  }, [])
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-semibold mt-14 mb-7'>Crewmate: {crewMember.name}</h1>
      <h2 className='text-6xl font-semibold mb-7'>Stats:</h2>
      <p className='text-2xl font-semibold my-4'>Color: {crewMember.color}</p>
      <p className='text-2xl font-semibold mt-4 mb-16'>Speed: {crewMember.speed} mph</p>
      {
        (crewMember.speed > 5) ? 
        <p className='mb-6'>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</p> 
        : <p className='mb-6'>You may want to find a Crewmate with more speed, this one is kind of slow 😬</p>
      }
      <Link to={`/${id}/edit`}>
        <Button className="bg-crewSecond text-white text-lg font-semibold">
          Wanna edit this Crewmate?
        </Button>
      </Link>
      
      <img src={CrewStats} alt="An image of two Crewmates blaming each other for killing the third crew member" />
    </div>
  )
}

export default CrewView