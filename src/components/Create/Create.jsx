import { React, useState, useEffect } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { useParams } from 'react-router-dom'
import Crewmates from '../../assets/Crewmates.png'
import supabase from '../../Client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle,
  } from '../ui/alert-dialog'

function Create() {
    const [name, setName] = useState('')
    const [speed, setSpeed] = useState('')
    const [color, setColor] = useState('red')
    const [crewMember, setCrewMember] = useState({})
    const [open, setOpen] = useState(false)
    const [actionType, setActionType] = useState('create')
    const tableName = "mates"
    const params = useParams()
    let id = null
    if (params.id) {
        id = params.id
    }
    useEffect(() => {
        if (id) {
            const fetchCrew = async () => {
                const {data: mates} = await supabase
                    .from(tableName)
                    .select('id, name, speed, color')
                    .eq('id', id)
                setCrewMember({name: mates[0].name, speed: mates[0].speed, color: mates[0].color})
            }
            fetchCrew()
        }
    })
    
    const handleSubmit = () => {
        setActionType('create')
        setOpen(true)
    }

    const handleUpdate = () => {
        setActionType('update')
        setOpen(true)
    }

    const handleDelete = () => {
        setActionType('delete')
        setOpen(true)   
    }

    const createCrewmate = async () => {
        await supabase
            .from(tableName)
            .insert([
                { name: name, speed: parseFloat(speed), color: color }
            ])
    }

    const updateCrewmate = async () => {
        await supabase
            .from(tableName)
            .update([
                { name: name, speed: parseFloat(speed), color: color }
            ])
            .eq('id', id)
    }

    const deleteCrewmate = async () => {
        window.location.href = '/gallery'
        await supabase
            .from(tableName)
            .delete()
            .eq('id', id)
    }

    const handleClose = () => {
        if (actionType === 'create') {
            createCrewmate()
        } else if (actionType === 'update') {
            updateCrewmate()
        }
        else if (actionType === 'delete') {
            deleteCrewmate()
        }
        setOpen(false)
        setName('')
        setSpeed('')
        setColor('red')
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value)
    }

    const handleColorChange = (color) => {
        setColor(color)
    }
    
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen'>
        <h1 className='text-6xl font-semibold'>{id ? 'Update Your Crewmate :)' : 'Create a New Crewmate'}</h1>
        <img src={Crewmates} alt="" className='h-72'/>
        {id && 
            <div> 
                <h2 className='text-2xl font-semibold'>Current Crewmate Info: </h2>
                <h3 className='text-xl font-semibold mt-4 mb-7'>Name: {crewMember.name}, Speed: {crewMember.speed}, Color: {crewMember.color} </h3>
            </div>
        }
        <div className='flex flex-row gap-10 flex-wrap justify-center'>
            <div className='bg-crewSecond p-10 rounded-xl h-44'>
                <Label htmlFor="name" className='text-2xl font-semibold'>Name:</Label>
                <Input type="text" id="name" placeholder="Enter a crewmate's name" 
                    value={name} onChange={handleNameChange}
                    className="text-black mt-7">
                </Input>
            </div>
            <div className='bg-crewSecond p-10 rounded-xl h-44'>
                <Label htmlFor="speed" className='text-2xl font-semibold'>Speed (mph):</Label>
                <Input type="text" id="speed" placeholder="Enter a crewmate's name"
                    value={speed} onChange={handleSpeedChange}
                    className="text-black mt-7">
                </Input>
            </div>
            <div className='bg-crewSecond p-10 rounded-xl'>
                <Label htmlFor="color" className='text-2xl font-semibold'>Color:</Label>
                <RadioGroup defaultValue="red" name="color" onValueChange={handleColorChange} 
                    className="flex flex-row mt-4"    
                >
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Red" id="red"/>
                        <Label htmlFor="red" className="text-lg font-semibold">Red</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Green" id="green"/>
                        <Label htmlFor="green" className="text-lg font-semibold">Green</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Blue" id="blue"/>
                        <Label htmlFor="blue" className="text-lg font-semibold">Blue</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Purple" id="purple"/>
                        <Label htmlFor="purple" className="text-lg font-semibold">Purple</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Yellow" id="yellow"/>
                        <Label htmlFor="yellow" className="text-lg font-semibold">Yellow</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Orange" id="orange"/>
                        <Label htmlFor="orange" className="text-lg font-semibold">Orange</Label> 
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Pink" id="pink"/>
                        <Label htmlFor="pink" className="text-lg font-semibold">Pink</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <RadioGroupItem value="Rainbow" id="rainbow"/>
                        <Label htmlFor="rainbow" className="text-lg font-semibold">Rainbow</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
        {
            id ? 
            <div>
                <Button onClick={handleUpdate} className="text-2xl font-semibold bg-crewSecond mt-7 mx-4">Update Crewmate</Button>
                <Button onClick={handleDelete} className="text-2xl font-semibold bg-crewSecond mt-7 mx-4">Delete Crewmate</Button>
            </div> :
            <div>
                <Button onClick={handleSubmit} className="text-2xl font-semibold bg-crewSecond mt-7 mx-4">Create Crewmate</Button>
            </div> 
        }
        <AlertDialog open={open} onDismiss={() => handleClose()}>
            <AlertDialogContent>
                <AlertDialogTitle>{actionType.charAt(0).toUpperCase() + actionType.slice(1)} Crewmate</AlertDialogTitle>
                <AlertDialogDescription>
                    Are you sure you want to {actionType} this crewmate?
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClose}>{actionType.charAt(0).toUpperCase() + actionType.slice(1)}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default Create