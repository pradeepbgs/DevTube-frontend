import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getCurrentUser} from '../../../useHooks/getCurrenttUser'

const PersonalDetails = () => {

    const {user,currentUser} = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState(currentUser?.fullname)
    const [email, setEmail] = useState(currentUser?.email)
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdate = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.patch(`/api/v1/users/update-account-details`, 
            {
                fullname: name,
                email: email,
            }, 
            {withCredentials: true})
            if(res.data.statusCode === 200){
                navigate(`/channel/${user?.username}`)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
        setName('')
        setEmail('')
        
    }


    useEffect(() =>{
        getCurrentUser(dispatch)
    },[])

  return (

    <div className=' mt-10 rounded-md border w-[35vw] h-[25vw]'>
        <div className='flex justify-center'>
        <form 
        onSubmit={handleUpdate}
        className='flex flex-col mt-10'
        action="">
            <label htmlFor="">Full Name:</label>
            <input 
            className='w-[30vw] mb-5 py-1 px-5 rounded-md border bg-transparent'
            type="text" 
            value={currentUser?.fullname}
            onChange={(e) => setName(e.target.value)}
            name='fullname' 
            placeholder='full name'/>
            <label htmlFor="">Email:</label>
            <input 
            className='py-1 px-5 rounded-md border bg-transparent'
            type="text" 
            value={currentUser?.email}
            onChange={(e) => setEmail(e.target.value)}
            name="email" 
            placeholder="email" />
            <button className='mt-5 px-6 border'>{isLoading? "UPDATING" : "SAVE"}</button>
        </form>
        </div>
    </div>

  )
}

export default PersonalDetails