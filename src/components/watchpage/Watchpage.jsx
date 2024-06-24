import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaBell } from "react-icons/fa";
import CommentPage from "./CommentPage";
import { useSelector } from "react-redux";
import { showDescription, toggleMenuFalse } from "../../utils/toggleSlice";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toggleSubscribe } from "../../useHooks/subscribeToggle";
import VideoPlayer from "./VideoPlayer";
import { toggleLike } from "../../useHooks/likeVideoToggle";
import { decreaseLikes, increaseLikes, setLikes } from "../../utils/videoSlice";
import { getTimeElapsed } from "../../utils/getCreatedTime";


const Watchpage = () => {
  const [isloading, setIsLoading] = useState(false);
  const [Video, setVideo] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { videoId } = useParams();
  const isDescription = useSelector((state) => state.toggle.description);
  const { Likes } = useSelector((state) => state.video);
  const { user } = useSelector((state) => state.auth);
  const channelId = Video?.owner?._id;

  const handleSubscribeToggle = async () => {
    if(user){
      await toggleSubscribe(channelId, dispatch);
    }else{
      alert("pls login to like and subscribe")
    }
  };

  const toggleVideoLike = async () => {
    if(user){
      const res = await toggleLike(videoId);
      if (res?.data?.message === "liked video") {
        setVideo({ ...Video, isLiked: true });
        dispatch(increaseLikes());
      } else {
        setVideo({ ...Video, isLiked: false });
        dispatch(decreaseLikes());
      }
    }else{
      alert("pls login to like and subscribe")
      }
    
  };
  

  const getVideoDetails = async () => {
    try {
      const response = await axios.get(`https://video-backend-3ot2.onrender.com/api/v1/videos/${videoId}`, {
        withCredentials: true,
      });

      if (response) {
        const video = response.data.data;
        setVideo(video);
        dispatch(setLikes(video?.likesCount));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  

  useEffect(() => {
    dispatch(toggleMenuFalse());
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (videoId) {
      getVideoDetails();
    }
  }, [isloading]);

  const VideocreatedAGo = getTimeElapsed(Video?.createdAt);
  return (
    <div className="text-white h-screen flex justify-between">
      <div className="w-[67%] px-2 py-3">
        <div className=" px-2">
          {Video && <VideoPlayer videoFile={Video?.videoFile} />}
        </div>

        <div className="border ml-1 px-4 py-2 mt-2 rounded-md bg-black bg-opacity-5 ">
          <div className="flex justify-between   ">
            <div className="w-[90%]">
              <h1 className="text-[1.3rem] font-semibold">{Video?.title}</h1>
              <p>30,164 Views · {VideocreatedAGo}</p>
            </div>
            <div className="py-2 flex h-[30%]">
              <NavLink
                onClick={toggleVideoLike}
                className={`px-4 py-2 border border-gray-400 flex items-center hover:bg-gray-900 ${
                  Video?.isLiked ? "text-blue-500" : ""
                }`}
              >
                <p className="mr-2">{Likes}</p>
                <FaThumbsUp />
              </NavLink>

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
              <Link to={`/channel/${Video?.owner?.username}`}>
              <img
                className="w-10 h-10 rounded-full"
                src={`${Video?.owner?.avatar}`}
              />
              </Link>
              <div className="ml-3">
                <Link  to={`/channel/${Video?.owner?.username}`}
                className="font-semibold">{Video?.owner?.fullname}</Link>
                <p className="text-gray-300">
                  {Video?.subscribersCount} subscribers
                </p>
              </div>
            </div>
            <button
              onClick={handleSubscribeToggle}
              className="flex items-center bg-gray-100 hover:bg-gray-300 text-black px-2 rounded-full"
            >
              <p className="mr-3 font-semibold">
                {Video?.isSubscribed ? "subscribed" : "subscribe"}
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
              {Video?.description ? Video?.description : "No description"}
            </p>
          </div>
        </div>
        <CommentPage />
      </div>
      <div className="w-[40%]">
        ( // need more works on this listing page with backend and FE too)
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
