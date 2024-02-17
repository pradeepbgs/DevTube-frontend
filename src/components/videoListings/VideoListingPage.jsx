import React, { useEffect, useState } from 'react'
import VideoListings from './VideoListings';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const VideoListingPage = () => {
  const [Video, setVideo] = useState([])
  const {query} = useParams()
  
  const getVideo = async () => {
    const res = await axios.get(`/api/v1/videos?query=${query}`, {withCredentials: true})
    if(res?.data?.data){
      setVideo(res?.data?.data)
    }
  }

  useEffect(() => {
    getVideo()
  },[query])


  return (
    <div>
        {
          Video?.map((video, index) => (
            <div className="" key={index}>
              <VideoListings 
              key={index} 
              showVideoDescription={false}
              video={video}/>
            </div>
          ))
        }
    </div>
  )
}

export default VideoListingPage