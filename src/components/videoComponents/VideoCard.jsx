import React from 'react'

const VideoCard = ({
  video
}) => {

    

  return (
    <div>
      <div  className='text-white md:w-[25vw] w-[90vw] rounded ml-5 mb-3 mt-2'>
            <img 
            src={video.thumbnail} 
            alt={`Thumbnail for ${video.title}`} 
            className='w-full h-[14vw] object-cover mb-2 rounded-md' />
            <div className='flex'>
              <img className='w-9 h-9 bg-gray-100 rounded-full'
              src={`${video?.owner?.avatar}`} alt="" />
              <div className='ml-4'>
              <h2 className='text-md font-semibold'>{video.title}</h2>
              <p className='text-gray-200 mt-1'>{`${video.views} views • ${video.duration}`}</p>
              <h2 className='text-gray-200'>{video?.owner?.fullname}</h2>
              </div>
            </div>
          </div>
    </div>
  )
}

export default VideoCard
