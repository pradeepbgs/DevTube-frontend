import React , {useState} from 'react'
import VideoCard from '../videoComponents/VideoCard'

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
  ) : <h1 className='mt-10'>No videos uploaded
  This page has yet to upload a video. Search another page in order to find more videos.</h1>
}

export default ChannelVideoPage