import React , {useState} from 'react'
import VideoCard from '../videoComponents/VideoCard'
import { FaVideo } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useUserVideos from '../../useHooks/getUserVideos'
import { addVideo } from '../../utils/userSlice';
import axios from 'axios';



const ChannelVideoPage = () => {
    const [isTr, setIstr] = useState(false)
    const dispatch = useDispatch()

    const {user} = useSelector(state => state.user)



return isTr ? (
    <div className='text-white flex flex-wrap py-5'>
        {
            videos.map((video, index) => (
                <div key={index}>
                    <VideoCard video={video}/>
                </div>
            ))
        }
    </div>
  ) : <div className='flex flex-col items-center mt-5'>
        <FaVideo
        className='text-4xl'
        />
        <h1 className='font-bold text-2xl'>No Videos Uploaded</h1>
        <p className='w-[70%] mt-3 font-semibold'>This page has yet to upload a video. Search another page in order to find more videos.</p>
      </div>
}

export default ChannelVideoPage