import React, {useState} from 'react'
import {  FaTwitter } from 'react-icons/fa';

const ChannelTweets = () => {
  const [isTr, setIstr] = useState(false)

  return  isTr ? (
    <div>channelTweets</div>
  ) : <div className='flex flex-col items-center w-full mt-5'>
        <FaTwitter size={50} />
        <h1 className='font-bold'>No Tweets</h1>
        <p className='font-semiboold'>This channel has yet to make a Tweet.</p>
     </div>
}

export default ChannelTweets