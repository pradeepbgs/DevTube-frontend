import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaBell } from "react-icons/fa";
import CommentPage from "./CommentPage";
import { useDispatch, useSelector } from "react-redux";
import { showDescription , toggleMenuFalse} from "../../utils/toggleSlice";
import VideoListings from "../videoListings/VideoListings";
import { useParams } from "react-router-dom";
import axios  from "axios";
import {setVideo, setOwner, setSubscribers, isSubscribed, setComments, setLikes} from "../../utils/videoSlice";

const Watchpage = () => {
  const [video, setVideos] = useState([])
  const isDescription = useSelector((state) => state.toggle.description);
  const dispatch = useDispatch();

  
  const { videoId } = useParams();

  const getVideoDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/videos/${videoId}`, {withCredentials: true});
  
      if (response) {
        console.log(response.data.data)
        setVideos(response.data.data)
        const video = response.data.data
       
        dispatch(setVideo({...video, owner: "", comments: ""}))
        dispatch(setOwner(video.owner))
        dispatch(setSubscribers(video.subscribersCount))  
        dispatch(isSubscribed(video.isSubscribed))
        dispatch(setComments(video.comments))
        dispatch(setLikes(video.likesCount))
      } 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  }

  useEffect(() => {
    dispatch(toggleMenuFalse())
    getVideoDetails()
  },[])

  console.log(video)

  const { title, thumbnail, likesCount, owner, subscribersCount, description, comments } = video;


  return (
    <div className="text-white h-screen flex justify-between">
      <div className="w-[67%] px-2 py-3">
        <div className=" px-2">
          <img
            className="rounded-sm h-[70vh] w-[60vw]"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="border ml-1 px-4 py-2 mt-2 rounded-md bg-black bg-opacity-5 ">
          <div className="flex justify-between   ">
            <div className="w-[90%]">
              <h1 className="text-[1.3rem] font-semibold">
               {title}
              </h1>
              <p>30,164 Views · 18 hours ago</p>
            </div>
            <div className="py-2 flex h-[30%]">
              <button className="px-4 py-2 border border-gray-400 flex items-center hover:bg-gray-900">
                <p className="mr-2">{likesCount}</p>
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
                src={`${video?.owner?.avatar}`}
              />
              <div className="ml-3">
                <p className="font-semibold">{owner?.fullname}</p>
                <p className="text-gray-300">{subscribersCount} subscribers</p>
              </div>
            </div>
            <button className="flex items-center bg-gray-100 hover:bg-gray-300 text-black px-2 rounded-full">
              <p className="mr-3 font-semibold">Subscribe</p>
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
              {description ? description : "No description"}
            </p>
          </div>
        </div>
        <div className="border px-3 mt-5 ml-1 rounded-lg">
          <p className="mt-3">573 Comments</p>
          <form action="" className="mt-3 mb-4 px-2">
            <input
              className="w-[80%] border bg-transparent text-white py-1 px-5 mr-3"
              type="text"
              placeholder="Add a Comment"
            />
            <button className="border px-4 py-1 font-semibold hover:bg-gray-800">
              Add
            </button>
          </form>
          <div className="">
            {comments?.map((item, index) => (
              <CommentPage key={index} items={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        {/* {video.map((video, index) => ( */}
          {/* <div key={index}> */}
            <VideoListings
              imgWidth="w-[14vw]"
              titleFont="font-semibold"
              titleWidth="w-[20vw]"
              titleSize="text-[1.rem]"
              mainDIvWidth="0"
              imgHeight="h-[15vh]"
              showVideoDescription={false}
              video={video}
            />
          {/* </div> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default Watchpage;
