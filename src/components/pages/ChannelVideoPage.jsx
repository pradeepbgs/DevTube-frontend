import React , {useState} from 'react'
import VideoCard from '../videoComponents/VideoCard'
import { FaVideo } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useUserVideos from '../../useHooks/getUserVideos'
import { addVideo } from '../../utils/userSlice';
import axios from 'axios';
import UploadPage from './uploadPage/UploadPage';
import {showUploadPage} from '../../utils/toggleSlice'



const ChannelVideoPage = () => {
    const [isTr, setIstr] = useState(false)
    const dispatch = useDispatch()

    const {userVideo, user} = useSelector(state => state.user)
    const authUser = useSelector((state) => state.auth.user);
    const {uploadPage} = useSelector(state => state.toggle)


    const getUserVideos = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/api/v1/videos/c/${user?._id}`,
            { withCredentials: true }
          );
          if (res) {
            setIstr(true)
            dispatch(addVideo(res.data.data));
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        if(user?._id){
            getUserVideos()
        }
      },[user])


return isTr ? (
    <div className=''>
      <div className='text-white flex mt-1 flex-wrap'>
        {
            userVideo?.map((video, index) => (
                <div key={index}>
                    <Link to={`/watchpage/${video?._id}`}><VideoCard video={video}/></Link>
                </div>
            ))
        }
      </div>
      {authUser?._id === user?._id && <div className='flex justify-center'>
      <button 
      onClick={() => dispatch(showUploadPage(true))}
      className='px-5  bg-purple-600  text-[1.5rem]'>+ upload</button>
      </div>}
      {uploadPage && <div className="absolute top-[30%] right-[30%] bg-purple-500 w-[40vw] h-fit px-10 py-10 rounded-md ">
          <UploadPage/>
       </div>}
    </div>
  ) : <div className='flex flex-col items-center mt-5'>
        <FaVideo
        className='text-4xl'
        />
        <h1 className='font-bold text-2xl'>No Videos Uploaded</h1>
        <p className='w-[70%] mt-3 font-semibold'>This page has yet to upload a video. Search another page in order to find more videos.</p>

        {authUser?._id === user?._id  && <div>
            <button onClick={() => dispatch(showUploadPage(true))}
            className='px-5  bg-purple-600 mt-4 text-[1.5rem]'>+ upload</button>
        </div>}
      </div>
}

export default ChannelVideoPage