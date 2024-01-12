import React from "react";

const VideoListings = () => {
  const videos = [
    {
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1600,
      duration: "8:00",
    },
    {
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail: "https://via.placeholder.com/320x180",
      views: 1600,
      duration: "8:00",
    },
    // Repeat the pattern for more videos...
  ];

  return (
    <div className="w-screen">
        <div className="py-1 px-2">
        {videos?.map((video, index) => (
        <div className="text-white ml-3 mt-4 flex" key={index}>
          <div>
            <img src={video.thumbnail} alt="" />
          </div>
          <div className="ml-2 w-[37%]">
            <h1 className="text-[1.2rem] w-[65%] font-semibold">JavaScript Fundamentals: Variables and Data Types</h1>
            <p className="mb-1">200k • views</p>
            <div className="flex items-center mb-2">
              <img
                className="w-9 mr-3 rounded-full"
                src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
                alt=""
              />
              <p>Username</p>
            </div>
            <span className="">
              Learn the basics of JavaScript, including variables, data types,
              and how to use them in your programs.
            </span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default VideoListings;
