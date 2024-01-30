import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../utils/videoSlice";
import { useVideoComments } from "../../useHooks/usevideoDetails";
import { useParams } from "react-router-dom";
import { useComment } from "../../useHooks/useComment";
import { addComment } from "../../utils/userSlice";
import { MdMoreVert } from "react-icons/md";

const CommentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBtn, setIsBtn] = useState(false);
  const [isComment, setIsComment] = useState("");
  const [isUpdatable, setIsUpdatable] = useState(false);
  const dispatch = useDispatch();
  const { videoId } = useParams();

  const user = useSelector((state) => state.auth.user);
  const { comments } = useSelector((state) => state.video);


  const getVideoComments = async () => {
    try {
      const response = await axios.get(
        `/api/v1/comments/${videoId}`,
        { withCredentials: true }
      );
      if (response) {
        const comments = response.data.data;
        dispatch(setComments(comments));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const res = useComment(isComment, videoId);
    if (res) {
      setIsLoading((prev) => !prev);
      setIsComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    if (commentId?.owner?._id === user?._id) {
      const res = axios.delete(
        `/api/v1/comments/c/${commentId?._id}`,
        { withCredentials: true }
      );

      if (res) {
        setIsLoading((prev) => !prev);
        setIsBtn(false);
      }
    } else {
      alert("this is not your comment so you cant delete  it");
    }
  };

  const handleUpdateComment = (commentId) => {
    const res = axios.put(
      `http://localhost:3000/api/v1/comments/c/${commentId?.id}`,
      {
        content: isComment,
      },
      { withCredentials: true }
    );
    if (res) {
      setIsUpdatable(false);
    }
  };



  useEffect(() => {
    getVideoComments();
  }, [isLoading]);

  return (
    <>
      <div className="border rounded-md mt-3">
        <div className=" px-3 mt-5 ml-1 rounded-lg">
          <p className="mt-3">573 Comments</p>
          <form className="mt-3 mb-4 px-2 flex">
            <img
              className="w-8 h-8 rounded-full mr-4"
              src={`${user?.avatar}`}
              alt=""
            />
            <input
              onChange={(e) => setIsComment(e.target.value)}
              value={isComment}
              className="w-[70%] border bg-transparent text-white py-1 px-5 mr-3"
              type="text"
              name="content"
              placeholder="Add a Comment"
            />
            <button
              type="submit"
              onClick={handleCommentSubmit}
              className="border px-4 py-1 ml-4 font-semibold hover:bg-gray-800"
            >
              Add
            </button>
          </form>
        </div>
        <div className=" w-[100%]  justify-between ">
          {comments?.map((items, index) => (
            <div
              key={index}
              className="flex justify-between hover:bg-zinc-900 border border-l-0 border-r-0 border-b-0 py-3 px-2"
            >
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
                    <p className="ml-3 text-gray-300">
                      · {items?.ago} minutes ago
                    </p>
                  </div>
                  <div className="mt-2">
                    <input
                      value={isUpdatable ? isComment : items?.content}
                      disabled={!isUpdatable}
                      onChange={(e) => setIsComment(e.target.value)}
                      className="mt-2 bg-transparent "
                    />
                    {/* <p>{items?.content}</p> */}
                  </div>
                </div>
              </div>
              <div className="flex">
                {user?._id === items?.owner?._id && (
                  <div className=" h-fit w-fit mr-5 flex">
                    {isBtn && !isUpdatable && (
                      <>
                        <button
                          onClick={() => setIsUpdatable(true)}
                          className="bg-green-500 px-3">edit</button>
                        <button
                          className="bg-red-500 px-3 ml-2"
                          onClick={() => handleDeleteComment(items)}
                        >
                          delete
                        </button>
                      </>
                    )}
                  </div>
                )}
                {user?._id === items?.owner?._id && <div
                  className="cursor-pointer"
                  onClick={() => setIsBtn((prev) => !prev)}
                >
                  <MdMoreVert />
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



export default CommentPage;
