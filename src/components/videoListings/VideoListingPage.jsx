import React from 'react'
import VideoListings from './VideoListings';


const VideoListingPage = () => {

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
    <div>
        {
          videos.map((video, index) => (
            <div className="" key={index}>
              <VideoListings key={index} video={video}/>
            </div>
          ))
        }
    </div>
  )
}

export default VideoListingPage