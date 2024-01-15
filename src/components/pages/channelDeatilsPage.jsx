import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';




const ChannelDetailsPage = () => {


  
  return (
    <div className='w-full h-full text-white'>
      <div className='border border-l-0 border-r-0 border-t-0'>
     <div className=''>
      <nav className='flex justify-center  w-full h-full '>
        <ul className='fixed flex justify-between border border-dotted bg-gray-700 rounded-sm px-5 py-3 mt-2'>
          <NavLink
          to={'/channel'}
           className={({isActive}) => `${isActive? "text-purple-400" : "text-gray-200"}`}
          >
            <button className='px-6 py-1 mt mr-5 border rounded-sm hover:bg-purple-500 hover:text-white'>Videos</button>
          </NavLink>

          <NavLink
          to='/channel/playlist'
           className={({isActive}) => `${isActive? "text-purple-400 " : "text-gray-200"}`}
          >
            <button className='px-6 py-1 mt mr-5 border rounded-sm hover:bg-purple-500'>Playlist</button>
          </NavLink>
          
          <NavLink
          to='/channel/tweets'
           className={({isActive}) => `${isActive? "text-purple-400" : "text-gray-200"}`}
          >
            <button className='px-6 py-1 mt mr-5 border rounded-sm hover:bg-purple-500'>Tweets</button>
          </NavLink>

          <NavLink
          to='/channel/subscribed'
           className={({isActive}) => `${isActive? "text-purple-400" : "text-gray-200"}`}
          >
            <button className='px-6 py-1 mt border rounded-sm hover:bg-purple-500'>Subscribed</button>
            </NavLink>
        </ul>
      </nav>
     </div>
     <div className='mt-[6%] flex justify-around px-5 py-5'>
        <div className='flex justify-center'>
          <img className='w-[10vw] h-[20vh] rounded-full'
          src="https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='ml-10'>
            <p className='font-semibold'>Full Name</p>
            <p className='text-gray-300'>@Username</p>
            <p className='text-gray-300'>200k subscribers</p>
          </div>
        </div>
      <img className='w-[30vw] rounded-md'
     src="https://plus.unsplash.com/premium_photo-1677215211005-0305cb45e09f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     </div>
     </div>

     <div className='flex justify-center'>
    <Outlet/>
     </div>

    </div>
  );
};




export default ChannelDetailsPage;
