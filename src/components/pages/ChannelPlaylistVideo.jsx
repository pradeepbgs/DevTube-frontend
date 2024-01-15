import React from 'react'
import {VideoListings} from '../index'
import ChannelPlaylistCard from './playlist/ChannelPlaylistCard';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ChannelPlaylistVideo = () => {

  const videos = [
    {
      title: "Video 1",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1600,
      duration: "8:00",
    },
    {
      title: "Video 1",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1600,
      duration: "8:00",
    },
    // Repeat the pattern for more videos...
  ];


  return (
    <div className='flex justify-evenly'>
       <div>
       <div className="relative px-5 py-4">
          <img className="w-[25.3vw]" src='https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
          <div className="flex absolute bottom-4 px-[0.6rem] bg-gray-600 bg-opacity-50 backdrop-blur-sm py-5">
            <div>
              <span>Playlist</span>
              <p>
                 views .  hours ago
              </p>
            </div>
            <p className='text-white ml-[10vw]'>
              <FontAwesomeIcon icon={faVideo} /> {`videos`}
            </p>
          </div>
        </div>
        <div className="px-5">
            <h1 className="text-[1.2rem] font-semibold"></h1>
            <p className="w-[90%] text-gray-300"></p>
          </div>
       </div>
       <div className=''>
        {
          videos.map((video, index) => (
            <VideoListings 
            titleWidth='w-[25vw]'
            descriptionWidth='w-[29vw]'
            mainDIvWidth='w-[50vw]'
            key={index} video={video} />
          )) 
        
        }
       </div>
    </div>
  )

}



export default ChannelPlaylistVideo