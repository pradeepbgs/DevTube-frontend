import React from 'react'

const Signup = () => {
  return (
    <div className='text-white  w-screen h-full flex justify-center items-center '>
      <div 
      className='bg-blue-300 w-[40vw] h-[70vh] flex justify-center 
      items-center 
      rounded-lg bg-opacity-10'>
        <div className='text-center'>
        <h1 className='text-2xl mb-2 font-semibold'>Login</h1>
        <form action=""
        className='flex flex-col w-fit mb-3 mt-5'
        >
            <input 
            type="text" 
            className='bg-gray-800 w-[30vw] px-5 mb-4 py-3 rounded-md'
            placeholder='Enter your name'
            />
          <input 
          className='bg-gray-800 px-5 mb-4 py-3 rounded-md'
          type="text" placeholder='Enter your email'
          />
          <input 
          className='bg-gray-800 px-5 py-3 mb-4 rounded-md'
          type="password" placeholder='Enter your password'
          />
          <button
          className='bg-blue-500 px-5 py-3 rounded-md'>
            Register</button>
        </form>
        <span className='hover:text-blue-400 hover:underline'>
          <a href="/login">Already a user ? Login </a>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Signup
