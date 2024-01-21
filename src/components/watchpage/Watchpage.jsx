import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaBell } from "react-icons/fa";
import CommentPage from "./CommentPage";
import { useSelector } from "react-redux";
import { showDescription, toggleMenuFalse } from "../../utils/toggleSlice";
import { isSubscribed } from "../../utils/videoSlice";
import VideoListings from "../videoListings/VideoListings";
import {useVideoDetails} from "../../useHooks/usevideoDetails";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleSubscribe } from "../../useHooks/subscribeToggle";
import { useComment } from "../../useHooks/useComment";
import { addComment } from "../../utils/userSlice";
import VideoPlayer from "./VideoPlayer";

const Watchpage = () => {
  const [isloading, setIsLoading] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const dispatch = useDispatch();
  const { videoId } = useParams();
  const isDescription = useSelector((state) => state.toggle.description);
  const { video, comments, likes, owner, subscribers, areYouSubscribed } =
    useSelector((state) => state.video);
  const { user } = useSelector((state) => state.auth);
  

  const { getVideoDetails } = useVideoDetails(videoId);

  const channelId = owner?._id;

  const handleSubscribeToggle = async () => {
    toggleSubscribe(channelId, dispatch);
  };


  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect( () => {
    if (videoId) {
      getVideoDetails();
    }
    dispatch(toggleMenuFalse()); 
    handleVideoLoad()
  }, [isloading]);

//  console.log(video?.videoFile)

  return (
    <div className="text-white h-screen flex justify-between">
      <div className="w-[67%] px-2 py-3">
        <div className=" px-2">
          {
          isVideoLoaded && <VideoPlayer videoFile = {video?.videoFile} />}
        </div>

        <div className="border ml-1 px-4 py-2 mt-2 rounded-md bg-black bg-opacity-5 ">
          <div className="flex justify-between   ">
            <div className="w-[90%]">
              <h1 className="text-[1.3rem] font-semibold">{video?.title}</h1>
              <p>30,164 Views · 18 hours ago</p>
            </div>
            <div className="py-2 flex h-[30%]">
              <button className="px-4 py-2 border border-gray-400 flex items-center hover:bg-gray-900">
                <p className="mr-2">{likes}</p>
                <FaThumbsUp />
              </button>
              <button className="px-4 py-2 border border-gray-400 ml-2 flex items-center hover:bg-gray-900">
                <FaThumbsDown />
                <p className="ml-2"></p>
              </button>
              <button className="px-4 py-2 border border-gray-400 ml-2 flex items-center hover:bg-gray-900">
                <FaSave />
                save
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={`${owner?.avatar}`}
              />
              <div className="ml-3">
                <p className="font-semibold">{owner?.fullname}</p>
                <p className="text-gray-300">{subscribers} subscribers</p>
              </div>
            </div>
            <button
              onClick={handleSubscribeToggle}
              className="flex items-center bg-gray-100 hover:bg-gray-300 text-black px-2 rounded-full"
            >
              <p className="mr-3 font-semibold">
                {areYouSubscribed ? "subscribed" : "subscribe"}
              </p>
              <FaBell />
            </button>
          </div>
          <div
            className={`mt-4 ${
              isDescription ? "h-full" : "h-[17vh]"
            } border border-b-0 border-l-0 border-r-0 py-2 px-3 overflow-hidden`}
          >
            <button
              onClick={() => {
                dispatch(showDescription());
              }}
              className="ml-2 border px-3"
            >
              {isDescription ? "Hide" : "Show"}
            </button>
            <p className="h-[10]">
              {video?.description ? video?.description : "No description"}
            </p>
          </div>
        </div>
        <CommentPage/>
      </div>
      <div className="w-[40%]">
        // need more works on this listing page with backend and FE too
        {/* <VideoListings
              imgWidth="w-[14vw]"
              titleFont="font-semibold"
              titleWidth="w-[20vw]"
              titleSize="text-[1.rem]"
              mainDIvWidth="0"
              imgHeight="h-[9vw]"
              showVideoDescription={false}
              video={video}
            /> */}
      </div>
    </div>
  );
};

export default Watchpage;
