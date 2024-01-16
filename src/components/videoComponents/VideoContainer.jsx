import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { toggleMenuTrue } from "../../utils/toggleSlice";
import { useDispatch } from "react-redux";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const VideoContainer = () => {
  const [isVideos, setIsVideos] = useState(false);

  const videos = [
    {
      title: "Video 1",
      thumbnail:
        "https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenuTrue());
  });

  return isVideos ? (
    <div className="overflow-hidden mt-5">
      <div className="flex flex-wrap md:ml-2">
        {videos?.map((video, index) => (
          <div className="" key={index}>
            <Link to={`watchpage?${index}`}>
              <VideoCard index={index} video={video} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex justify-center mt-[20vh]">
      <div className="flex flex-col items-center">
      <FontAwesomeIcon 
      className="text-5xl"
      icon={faVideo} />
      <h1 className="text-2xl font-semibold mt-4">No Videos Available</h1>
      <p className="text-gray-200 mt-3">There are no videos here available. Please try to search some thing else.</p>
      </div>
    </div>
  );
};

export default VideoContainer;
