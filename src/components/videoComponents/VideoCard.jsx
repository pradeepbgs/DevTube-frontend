import React from "react";
import { Link } from "react-router-dom";

const formatDuration = (duration) => {
  const seconds = Math.floor(duration % 60);
  const minutes = Math.floor((duration / 60) % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')} minutes`;
};

const VideoCard = ({ video }) => {
  const formattedDuration = formatDuration(video?.duration);

  return (
    <div>
      <div className="text-white md:w-[25vw] w-[90vw] rounded ml-5 mb-3 mt-2">
        <Link to={`/watchpage/${video?._id}`}>
          <img
            src={video?.thumbnail}
            alt={`Thumbnail for ${video?.title}`}
            className="w-full h-[14vw] object-cover mb-2 rounded-md"
          />
        </Link>
        <div className="flex">
          <Link to={`/channel/${video?.owner?.username}`}>
            <img
              className="w-9 h-9 bg-gray-100 rounded-full"
              src={`${video?.owner?.avatar}`}
              alt=""
            />
          </Link>
          <div className="ml-4">
            <h2 className="text-md font-semibold">{video?.title}</h2>
            <p className="text-gray-200 mt-1">{`${video?.views} views • ${formattedDuration}`}</p>
            <h2 className="text-gray-200">{video?.owner?.fullname}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
