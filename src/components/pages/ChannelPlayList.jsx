import React, {useState} from 'react'
import { FaPlayCircle } from 'react-icons/fa';

const ChannelPlayList = () => {
  const [isTr, setIstr] = useState(false)

  return isTr ? (
    <div className='text-white'>ChannelPlayList</div>
  ) : <div className='mt-5 flex flex-col items-center'>
        <FaPlayCircle
        className='text-5xl'
        />
        <h1 className='font-bold mt-2 mb-3'>No playlist created</h1>
        <p className='font-semibold'>There are no playlist created on this channel.</p>
      </div>
}

export default ChannelPlayList