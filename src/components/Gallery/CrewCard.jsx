import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
 from "../ui/card"
import { Link } from 'react-router-dom'

const CrewCard = ({id, name, speed, color, image}) => {
  const shadowColor = (color === 'Rainbow' ?
  'shadow-[7px_-5px_10px_#4c0082b6,11px_-9px_10px_#0000ff71,16px_-14px_10px_#00ff007d,20px_-17px_10px_#ffff0093,24px_-19px_10px_#ff8000d7,27px_-23px_10px_#eb1818af,5px_5px_15px_5px_#0000]'
  :
  `shadow-[7px_-5px_10px] shadow-${color.toLowerCase()}-500`)
  return (
    <Card className={`w-96 bg-crewSecond border-0 p-5 text-center shadow-2x text-white my-7 mx-7 ${shadowColor}`} key={id}>
        <CardHeader>
            <Link to={`/${id}`} className='self-center'>
              <img src={image} alt="Crewmate" className='w-40'/>
            </Link>
        </CardHeader>
        <CardContent>
            <CardTitle className="mb-3 text-xl font-semibold">
              Name of Crewmate:&nbsp;
              <span className='bg-secondary/50 text-black rounded-md p-1'> 
                {name}
              </span>
            </CardTitle>
            <CardDescription className="text-white mb-3 text-xl font-semibold">
              Speed of Crewmate:&nbsp; 
              <span className='bg-secondary/50 text-black rounded-md p-1'> 
                {speed} mph
              </span>
            </CardDescription>
            <CardDescription className="text-white mb-3 text-xl font-semibold">
              Color of Crewmate:&nbsp;
              <span className='bg-secondary/50 text-black rounded-md p-1'> 
                {color}
              </span>
            </CardDescription>
        </CardContent>
        <CardFooter>
            <Link to={`/${id}/edit`} className='mx-auto'>
              <Button className=" text-lg font-semibold">
                Edit Crewmate
              </Button>
            </Link>
        </CardFooter>
    </Card>
  )
}

export default CrewCard