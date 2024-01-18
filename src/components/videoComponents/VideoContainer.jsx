import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { toggleMenuTrue } from "../../utils/toggleSlice";
import { useDispatch } from "react-redux";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";



const VideoContainer = () => {
  const [isVideos, setIsVideos] = useState(false);
  const [video, setVideos] = useState([])

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/videos", {withCredentials: true});
  
      if (response) {
        setVideos(response?.data?.data); 
        setIsVideos(true);
      } else {
        setIsVideos(false); 
      }
    } catch (error) {
      setIsVideos(false); 
    }
  };


  useEffect( () => {
    dispatch(toggleMenuTrue());
    const data = getData()

    return () => {
      data
    }
  },[]);

  console.log(video)

  return isVideos ? (
    <div className="overflow-hidden mt-5">
      <div className="flex flex-wrap md:ml-2">
      {video?.map((video, index) => (
  <div className="" key={index}>
    <Link to={`/watchpage/${video?._id}`}>
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
