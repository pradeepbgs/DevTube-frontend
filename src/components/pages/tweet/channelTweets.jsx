import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {  FaTwitter } from 'react-icons/fa';
import TweetCard from './TweetCard';
import { getUserTweets } from '../../../useHooks/getUserTweets';
import { useDispatch, useSelector } from 'react-redux';

const ChannelTweets = () => {
  const [isTr, setIstr] = useState(false)
  const [tweet, setTweet] = useState('')
  const dispatch = useDispatch()
  const {user, userTweets} = useSelector(state => state.user)


  const handleAddTweet = async (e) => {
    e.preventDefault()
    try {
      const res = await axios
      .post(`http://localhost:3000/api/v1/tweets`,{content: tweet}, {withCredentials: true})
      if(res?.data){
        setTweet('')
      }
    } catch (error) {
      console.log(error);
    }
  }







  useEffect(() => {
    if(user){
      getUserTweets(dispatch, user?._id)
    }
  },[user])

  useEffect(() => {
    if(userTweets?.userTweets?.length > 0){
      setIstr(true)
    }else{
      setIstr(false)
    }
    return () => {
      setIstr(false)
    }
  },[userTweets, isTr])

  return  isTr ? (
    <div>
      <form 
      onSubmit={handleAddTweet}
      action="" className='mb-3 border border-t-0 border-l-0 border-r-0 py-3'>
      <textarea 
        className='bg-transparent border'
        placeholder='Write something'
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        name="content" id="" cols="60" rows="2"
      >
      </textarea>
      <button type='submit'>Tweet</button>
    </form>
      {
        userTweets?.userTweets?.map((tweet) => (
          <div key={tweet?._id} className='border border-l-0 border-r-0 border-t-0 pb-4'>
            <TweetCard tweet={tweet} user={user}/>
          </div>
        ))
      }
    </div>
  ) : <div className='flex flex-col items-center w-full mt-5'>
    <form action="" className='mb-3'>
      <textarea 
      className='bg-transparent border'
      placeholder='Write something'
      name="" id="" cols="60" rows="2">

      </textarea>
      <button type='submit'>Tweet</button>
    </form>
        <FaTwitter size={50} />
        <h1 className='font-bold'>No Tweets</h1>
        <p className='font-semiboold'>This channel has yet to make a Tweet.</p>
     </div>
}

export default ChannelTweets