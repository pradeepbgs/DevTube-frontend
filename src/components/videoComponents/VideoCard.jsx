import React from 'react'

const VideoCard = ({
    index,
    video
}) => {

    

  return (
    <div>
      <div  className='text-white md:w-[25vw] w-[90vw] rounded ml-5 mb-3 mt-2 '>
            <img 
            src={video.thumbnail} 
            alt={`Thumbnail for ${video.title}`} 
            className='w-full h-30 object-cover mb-2 rounded-md' />
            <div className='flex'>
              <img className='w-9 h-9 bg-gray-100 rounded-full'
              src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="" />
              <div className='ml-4'>
              <h2 className='text-md font-semibold'>JavaScript Fundamentals: Variables and Data Types</h2>
              <p className='text-gray-200 mt-1'>{`${video.views} views • ${video.duration}`}</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default VideoCard
