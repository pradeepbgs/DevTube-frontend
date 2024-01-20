import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setComments} from '../../utils/videoSlice'
import { useVideoComments } from "../../useHooks/usevideoDetails";

const CommentPage = ({videoId}) => {
  const dispatch = useDispatch()
  const [isComment, setIsComment] = useState('');
  const [isUpdatable, setIsUpdatable] = useState(false);

  const userId = useSelector((state) => state.auth.user?._id);
  const {comments} = useSelector((state) => state.video);
  
  const getVideoComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/comments/${videoId}`, { withCredentials: true });
      if (response) {
        const comments = response.data.data;
        dispatch(setComments(comments));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleDeleteComment = (commentId) => {
    if (commentId?.owner?._id === userId) {
      const res = axios.delete(`http://localhost:3000/api/v1/comments/c/${commentId?.id}`, {withCredentials: true})
    }else{
      alert("this is not your comment so you cant delete  it")
    }
  };

  const handleUpdateComment = (commentId) => {
    const res = axios
    .put(`http://localhost:3000/api/v1/comments/c/${commentId?.id}`, {
      content: isComment,
    }, {withCredentials: true})
    if(res){
      setIsUpdatable(false)
    }
  }
  

  useEffect(() => {
    getVideoComments()
  },[handleDeleteComment,handleUpdateComment])

  return (
    <div className=" w-[100%]  justify-between ">
      {comments?.map((items, index) => (
        <div key={index} className="flex justify-between hover:bg-zinc-900 border border-l-0 border-r-0 border-b-0 py-3">
          <div className="flex">
            <img
              className="w-9 h-9 rounded-full"
              src={`${items?.owner?.avatar}`}
              alt=""
            />
            <div className="px-3">
              <div className="flex">
                <span className="text-gray-300">
                  <p className="font-semibold">{items?.owner?.fullname}</p>
                  <p>@{items?.owner?.username}</p>
                </span>
                <p className="ml-3 text-gray-300">· {items?.ago} minutes ago</p>
              </div>
              <input
                value={isUpdatable ? isComment : items?.content}
                disabled={!isUpdatable}
                onChange={(e) => setIsComment(e.target.value)}
                className="mt-2 bg-transparent "
              />
            </div>
          </div>
          <div className="">
          {userId === items.owner._id && (
              <> 
                 {
                  isUpdatable ? <>
                  <button
                  onClick={() => handleUpdateComment(items)}
                  className="bg-green-400 mr-4 px-3 py-1 hover:bg-green-500"
                >
                  save
                </button>
                <button
                  onClick={() => setIsUpdatable(false)}
                  className="bg-red-400 mr-2 px-3 py-1 hover:bg-red-500"
                >
                  cancel
                </button>
                  </> : <>
                  <button
                  onClick={() => setIsUpdatable(true)}
                  className="bg-green-400 mr-4 px-3 py-1 hover:bg-green-500"
                >
                  Update
                </button>
                
                <button
                  onClick={() => handleDeleteComment(items.owner)}
                  className="bg-red-400 mr-2 px-3 py-1 hover:bg-red-500">
                  Delete
                </button>
                  </>
                 }
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentPage;
