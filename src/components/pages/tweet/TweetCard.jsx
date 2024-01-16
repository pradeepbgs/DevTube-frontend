import React from 'react'
import { FaThumbsUp } from "react-icons/fa";

const TweetCard = ({tweet}) => {


  return (
    <div>
        <div className='flex mt-5'>
            <img 
            className='w-[5vw] h-[5vw] rounded-full'
            src={tweet.userAvatar} alt="" />
            <div className='ml-6'>
                <span className='mr-6 font-semibold'>{tweet.username}</span>
                <span className='text-purple-200'>{tweet.ago}</span>
                <p className='mt-2 w-[60vw]'>{tweet.tweet}</p>
                <div className='mt-2'>  
                    <button className='flex items-center'>
                    <FaThumbsUp className='mr-2'/>
                    {tweet.likes}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TweetCard