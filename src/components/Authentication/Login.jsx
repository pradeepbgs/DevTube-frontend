import React from 'react'

const Login = () => {
  return (
    <div className='text-white  w-screen h-full flex justify-center items-center '>
      <div 
      className='bg-white w-[40vw] h-[70vh] flex justify-center 
      items-center 
      rounded-md bg-opacity-10'>
        <div className='text-center'>
        <h1 className='text-2xl mb-2 font-semibold'>Login</h1>
        <form action=""
        className='flex flex-col w-fit mb-3 mt-5'
        >
          <input 
          className='bg-gray-700 w-[30vw] px-5 mb-4 py-3 rounded-md'
          type="text" placeholder='Enter your email'
          />
          <input 
          className='bg-gray-700 px-5 py-3 mb-4 rounded-md'
          type="password" placeholder='Enter your password'
          />
          <button
          className='bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-3 rounded-md'>
            Login</button>
        </form>
        <span className='hover:text-blue-400 hover:underline'>
          <a href="/signup">new ? Register</a>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Login
