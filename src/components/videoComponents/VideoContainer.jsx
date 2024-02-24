import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { toggleMenuTrue } from "../../utils/toggleSlice";
import { addVideos } from "../../utils/videos.slice";
import { useDispatch, useSelector } from "react-redux";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

// Custom hook for fetching videos
const useFetchVideos = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    try {
      const response = await axios.get("/api/v1/videos", { withCredentials: true });
      if (response?.data?.data?.length >  0) {
        dispatch(addVideos(response?.data?.data));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchVideos };
};

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);
  const { loading, error, fetchVideos } = useFetchVideos();

  useEffect(() => {
    dispatch(toggleMenuTrue());
    if (!videos) {
      fetchVideos();
    }
  }, [videos, dispatch, fetchVideos]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if videos array is empty
  if (Array.isArray(videos) && videos.length ===  0) {
    return (
      <div className="flex justify-center mt-[20vh]">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon className="text-5xl" icon={faVideo} />
          <h1 className="text-2xl font-semibold mt-4">No Videos Available</h1>
          <p className="text-gray-200 mt-3">
            There are no videos here available. Please try to search something else.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden mt-5">
      <div className="flex flex-wrap md:ml-2">
        {videos?.map((video) => (
          <div className="" key={video._id}> 
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
