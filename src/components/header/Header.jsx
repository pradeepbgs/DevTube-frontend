import React from 'react'

const Header = () => {
  return (
    <div className='full w-full'>
      <div className=''>
        <nav className="bg-black px-10 py-4 text-white  text-center">
          <ul className='flex justify-between items-center'>
            <div>
              <button>HOME</button>
            </div>
            <div>
              <form action="" className=''>
                <input 
                type="text" 
                placeholder='search'
                className='bg-black text-white w-[26vw]  border border-gray-500  px-10 py-2'/>
                <button 
                type='submit'
                className='bg-black text-white  w-[] px-5 py-2 ml-3 border border-gray-500 '
                >search</button>
              </form>
            </div>
            <div className='flex justify-between'>
              <button className='mr-7 bg-black hover:bg-gray-700 px-3 '>Login</button>
              <button className='ml-4 bg-purple-500 hover:bg-purple-700 px-3 py-2'>Signup</button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
