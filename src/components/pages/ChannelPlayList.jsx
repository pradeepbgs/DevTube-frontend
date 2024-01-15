import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import ChannelPlaylistCard from "./playlist/ChannelPlaylistCard";


const ChannelPlayList = () => {
  const [isTr, setIstr] = useState(true);

  const playlists = [
    {
      name: "React Mastery",
      description:
        "Master the art of building dynamic user interfaces with React.",
      thumbnail:
        "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoCount: 10,
      viewCount: 100,
      ago: 2,
    },
    {
      name: "JavaScript Mastery",
      description:
        "Master the art of building dynamic user interfaces with React.",
      thumbnail:
        "https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoCount: 10,
      viewCount: 100,
      ago: 2,
    },
    {
      name: "JavaScript Mastery",
      description:
        "Master the art of building dynamic user interfaces with React.",
      thumbnail:
        "https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoCount: 10,
      viewCount: 100,
      ago: 2,
    },
    {
      name: "JavaScript Mastery",
      description:
        "Master the art of building dynamic user interfaces with React.",
      thumbnail:
        "https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoCount: 10,
      viewCount: 100,
      ago: 2,
    },
    {
      name: "JavaScript Mastery",
      description:
        "Master the art of building dynamic user interfaces with React.",
      thumbnail:
        "https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoCount: 10,
      viewCount: 100,
      ago: 2,
    },
  ];

  return isTr ? (
    <>
    <div className="text-white flex flex-wrap ml-10 py-10">
      {playlists.map((playlist, index) => (
        <div key={index}><ChannelPlaylistCard playlist={playlist}/></div>
      ))}
    </div>
    </>
  ) : (

    <div className="mt-5 flex flex-col items-center">
      <FaPlayCircle className="text-5xl" />
      <h1 className="font-bold mt-2 mb-3">No playlist created</h1>
      <p className="font-semibold">
        There are no playlist created on this channel.
      </p>
    </div>

  );
};

export default ChannelPlayList;
