import React from 'react';

 

const VideoPlayer = ({videoFile}) => {
    // console.log(videoFile)
  return (
    <video 
    className="rounded-sm h-[34vw] w-[100%]"
    
    controls
    >
      <source src={`${videoFile}`} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
