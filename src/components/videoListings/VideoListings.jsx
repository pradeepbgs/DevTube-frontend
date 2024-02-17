import React from "react";
import { Link } from "react-router-dom";



const VideoListings = ({
  imgWidth = "w-[20vw]",
  imgHeight = "h-[25vh]",
  mainDIvWidth = "w-screen",
  titleWidth = "w-[65%]",
  titleSize = "text-[1.2rem]",
  titleFont = "font-semibold",
  showVideoDescription = true,
  descriptionWidth = "w-[40vw]",
  divBorder = "",
  video
}) => {


  return (
    <div className={`${mainDIvWidth} ${divBorder} mt-2`}>
        <div className="py">
    
        <div className="text-white ml-3 py-2 flex" >
          <div>
            <Link 
              to={`/watchpage/${video?._id}`}
            >
            <img 
            className={`${imgWidth} ${imgHeight}`}
            src={video?.thumbnail} alt="" />
            </Link>
          </div>
          <div className="ml-2 w-[37%]">
            <h1 className={`${titleFont} ${titleWidth} ${titleSize}`}>{video?.title}</h1>
            <p className="mb-1">200k • views</p>
            <div className="flex items-center mb-2">
              <Link
              to={`/channel/${video?.owner?.username}`}
              >
              <img
                className="w-8 h-8 mr-3 rounded-full"
                src={`${video?.owner?.avatar}`}
                alt=""
              />
              </Link>
              <p>{video?.owner?.username}</p>
            </div>
            {showVideoDescription && <span className={``}>
              <p className={`${descriptionWidth}`}>
              {video?.description}
              </p>
            </span>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoListings;
