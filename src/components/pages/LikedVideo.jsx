import React, { useState, useEffect } from 'react';
import VideoCard from '../videoComponents/VideoCard';
import axios from 'axios';

const LikedVideo = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  
  const fetchLikedVideos = async () => {
    try {
      const response = await axios.get(`/api/v1/likes/videos`, { withCredentials: true });
      setLikedVideos(response?.data?.data);
    } catch (error) {
      console.error('Error fetching liked videos:', error);
    }
  };

  useEffect(() => {
    fetchLikedVideos();
  }, []);

  console.log(likedVideos);

  return (
    <div className='text-white flex flex-wrap'>
      {likedVideos?.map((video,index) => (
        <div key={index} className='flex'>
        <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default LikedVideo;
