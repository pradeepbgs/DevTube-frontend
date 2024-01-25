
import React from 'react'
import { useDispatch } from 'react-redux'
import { showUploadPage } from '../../../utils/toggleSlice'
import axios from 'axios'


const UploadPage = () => {

const dispatch = useDispatch()

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    

    // const res = await axios.post(`http://localhost:3000/api/v1/videos/`, 
    // {
    //     title: e.target.title.value,
    //     description: e.target.description.value,
    //     video: e.target.video.files[0],
    //     thumbnail: e.target.thumbnail.files[0]
    // }, 
    // {withCredentials: true})
    console.log(formData);
  }

  return (
    <div className=''>
        <form 
        encType="multipart/form-data"
        onSubmit={handleVideoUpload}
        action="">
            <label htmlFor="">Title</label>
            <input 
            className='w-full mb-4 text-black'
            type="text" 
            name='title'
            placeholder='Title' 
            />
            <input 
            className='w-full mb-4'
            type="file"
            name='video'
            accept="video/*"
             placeholder='choose a video file'
             />
             <label htmlFor="">*Thumbnail</label>
            <input 
            className='w-full mb-4'
            type="file"
            name='thumbnail'
            accept="image/*"
             placeholder='choose a video file'
             />
             <label htmlFor="">description</label>
            <textarea 
            className='w-full mb-4 text-black'
            name="description" 
            id="" 
            cols="30" 
            rows="2"></textarea>
            <button 
            type='submit' className='bg-purple-800 px-5 py-1'>upload</button>
            <button 
            onClick={() => dispatch(showUploadPage(false))}
            className='bg-purple-800 px-5 py-1 ml-10'>cancel</button>
        </form>
    </div>
  )
}

export default UploadPage