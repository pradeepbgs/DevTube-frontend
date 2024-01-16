import React, { useEffect } from "react";
import { FaThumbsUp, FaThumbsDown, FaSave, FaBell } from "react-icons/fa";
import CommentPage from "./CommentPage";
import { useDispatch, useSelector } from "react-redux";
import { showDescription , toggleMenuFalse} from "../../utils/toggleSlice";
import VideoListings from "../videoListings/VideoListings";
const Watchpage = () => {
  const isDescription = useSelector((state) => state.toggle.description);
  const dispatch = useDispatch();

  const cmt = [
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
    {
      username: "pradeep",
      fullname: "Pradeep Sahu",
      comment:
        "This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      ago: 4,
    },
  ];

  const videos = [
    {
      title: "Video 1",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1600,
      duration: "8:00",
    },
    {
      title: "Video 1",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1000,
      duration: "5:30",
    },
    {
      title: "Video 2",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1500,
      duration: "8:45",
    },
    {
      title: "Video 3",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1200,
      duration: "6:20",
    },
    {
      title: "Video 4",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 800,
      duration: "4:15",
    },
    {
      title: "Video 5",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2000,
      duration: "10:00",
    },
    {
      title: "Video 6",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 3000,
      duration: "12:30",
    },
    {
      title: "Video 7",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1800,
      duration: "9:45",
    },
    {
      title: "Video 8",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 2500,
      duration: "11:20",
    },
    {
      title: "Video 9",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 900,
      duration: "4:50",
    },
    {
      title: "Video 10",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      views: 1600,
      duration: "8:00",
    },
    // Repeat the pattern for more videos...
  ];

  useEffect(() => {
    dispatch(toggleMenuFalse())
  })

  return (
    <div className="text-white h-screen flex justify-between">
      <div className="w-[67%] px-2 py-3">
        <div className=" px-2">
          <img
            className="rounded-sm "
            src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="border ml-1 px-4 py-2 mt-2 rounded-md bg-black bg-opacity-5 ">
          <div className="flex justify-between   ">
            <div className="w-[90%]">
              <h1 className="text-[1.3rem] font-semibold">
                Building a RESTful API with Node.js and Express
              </h1>
              <p>30,164 Views · 18 hours ago</p>
            </div>
            <div className="py-2 flex h-[30%]">
              <button className="px-4 py-2 border border-gray-400 flex items-center hover:bg-gray-900">
                <p className="mr-2">34k</p>
                <FaThumbsUp />
              </button>
              <button className="px-4 py-2 border border-gray-400 ml-2 flex items-center hover:bg-gray-900">
                <FaThumbsDown />
                <p className="ml-2">34k</p>
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
                src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="ml-3">
                <p className="font-semibold">username</p>
                <p className="text-gray-300">200k subscribers</p>
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
              🚀 Dive into the world of React with our latest tutorial series:
              "Advanced React Patterns"! 🛠️ Whether you're a seasoned developer
              or just starting out, this series is designed to elevate your
              React skills to the next level.
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
            {cmt.map((item, index) => (
              <CommentPage key={index} items={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        {videos.map((video, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchpage;
