import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = () => {

    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
    const [name, setName] = useState(user?.fullname)
    const [email, setEmail] = useState(user?.email)

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.patch(`http://localhost:3000/api/v1/users/update-account-details`, 
            {
                fullname: name,
                email: email,
            }, 
            {withCredentials: true})
            if(res.data.statusCode === 200){
                navigate(`/channel/${user?.username}`)
            }
        } catch (error) {
            console.log(error)
        }
        setName('')
        setEmail('')
    }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='fullname' 
            placeholder='full name'/>
            <label htmlFor="">Email:</label>
            <input 
            className='py-1 px-5 rounded-md border bg-transparent'
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email" 
            placeholder="email" />
            <button className='mt-5 px-6 border'>SAVE</button>
        </form>
        </div>
    </div>

  )
}

export default PersonalDetails