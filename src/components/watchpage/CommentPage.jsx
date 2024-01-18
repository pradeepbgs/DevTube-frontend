import React from 'react'

const CommentPage = ({
    items
}) => {
  return (
    <div className='border border-l-0 border-r-0 border-b-0 py-2 mt-3 flex'>
        <img className='w-9 h-9 rounded-full'
        src={`${items?.owner?.avatar}`} alt="" />
        <div className='px-3'>
            <div className='flex'>
            <span className='text-gray-300'>
            <p className='font-semibold'>{items?.owner.fullname}</p>
            <p>@{items?.owner.username}</p>
            </span>
                <p className='ml-3 text-gray-300'>· {items.ago} minutes ago</p>
            </div>
            <p className='mt-2 '>{items.content}</p>
        </div>
    </div>
  )
}

export default CommentPage