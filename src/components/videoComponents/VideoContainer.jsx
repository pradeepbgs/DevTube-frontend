import React from 'react'
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

    const videos = [
        {
          title: 'Video 1',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1000,
          duration: '5:30',
        },
        {
          title: 'Video 2',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1500,
          duration: '8:45',
        },
        {
          title: 'Video 3',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1200,
          duration: '6:20',
        },
        {
          title: 'Video 4',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 800,
          duration: '4:15',
        },
        {
          title: 'Video 5',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 2000,
          duration: '10:00',
        },
        {
          title: 'Video 6',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 3000,
          duration: '12:30',
        },
        {
          title: 'Video 7',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1800,
          duration: '9:45',
        },
        {
          title: 'Video 8',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 2500,
          duration: '11:20',
        },
        {
          title: 'Video 9',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 900,
          duration: '4:50',
        },
        {
          title: 'Video 10',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1600,
          duration: '8:00',
        },
        {
          title: 'Video 1',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1000,
          duration: '5:30',
        },
        {
          title: 'Video 2',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1500,
          duration: '8:45',
        },
        {
          title: 'Video 3',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1200,
          duration: '6:20',
        },
        {
          title: 'Video 4',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 800,
          duration: '4:15',
        },
        {
          title: 'Video 5',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 2000,
          duration: '10:00',
        },
        {
          title: 'Video 6',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 3000,
          duration: '12:30',
        },
        {
          title: 'Video 7',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1800,
          duration: '9:45',
        },
        {
          title: 'Video 8',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 2500,
          duration: '11:20',
        },
        {
          title: 'Video 9',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 900,
          duration: '4:50',
        },
        {
          title: 'Video 10',
          thumbnail: 'https://via.placeholder.com/320x180',
          views: 1600,
          duration: '8:00',
        },
        // Repeat the pattern for more videos...
      ];



  return (
    <div className='overflow-hidden mt-5'>
      <div className='flex flex-wrap md:ml-2'>
        {videos?.map((video, index) => (
          <div className='' key={index}>
          <Link to={`watchpage?${index}`}><VideoCard index={index} video={video} /></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoContainer
