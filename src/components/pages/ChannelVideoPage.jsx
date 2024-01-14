import React , {useState} from 'react'
import VideoCard from '../videoComponents/VideoCard'
import { FaVideo } from 'react-icons/fa';


const ChannelVideoPage = () => {
    const [isTr, setIstr] = useState(false)
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