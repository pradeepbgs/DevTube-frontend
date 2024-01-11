import React from 'react'

const Sidebar = () => {

  const items = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Liked Videos',
      link: '/liked-videos'
    },
    {
      name: 'History',
      link: '/history'
    },
    {
      name: 'My Content',
      link: '/my-content'
    },
    {
      name: 'Collections',
      link: '/collections'
    },
    {
      name: 'Subscribers',
      link: '/subscribers'
    },
  ]

  return (
    <div className='bg-black text-white '>
     <ul className=' w-[15vw] h-[100%]'>
      {
        items?.map((item, index) => (
          <li 
          key={index}
          className='py-2 px-4 hover:bg-gray-700 cursor-pointer'
          >{item.name}</li>
        ))
      }
      <div className='mt-[100%]'>
      <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer'>Support</li>
      <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer'>Setting</li>
      </div>
     </ul>
    </div>
  )
}

export default Sidebar
