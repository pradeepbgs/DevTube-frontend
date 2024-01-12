import React from 'react'

const VideoCard = ({
    index,
    video
}) => {

    

  return (
    <div>
      <div key={index} className='text-white md:w-[25vw] w-[90vw] rounded ml-5 mb-3 mt-2 '>
            <img 
            src={video.thumbnail} 
            alt={`Thumbnail for ${video.title}`} 
            className='w-full h-30 object-cover mb-2 rounded-md' />
            <h2 className='text-lg font-semibold'>{video.title}</h2>
            <p className='text-gray-400'>{`${video.views} views • ${video.duration}`}</p>
          </div>
    </div>
  )
}

export default VideoCard
