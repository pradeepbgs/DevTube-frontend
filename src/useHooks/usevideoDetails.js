// useVideoDetails.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setVideo, setOwner, setSubscribers, isSubscribed, setComments, setLikes } from '../utils/videoSlice';

const useVideoDetails = (videoId) => {
  const dispatch = useDispatch();

  const getVideoDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/videos/${videoId}`, { withCredentials: true });

      if (response) {
        const video = response.data.data;
        dispatch(setVideo({ ...video, owner: '', comments: '' }));
        dispatch(setOwner(video.owner));
        dispatch(setSubscribers(video.subscribersCount));
        dispatch(isSubscribed(video.isSubscribed));
        dispatch(setComments(video.comments));
        dispatch(setLikes(video.likesCount));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect(() => {
  //   getVideoDetails();
  // }, [videoId]);

  return { getVideoDetails }; // You can expose more functions or state if needed
};

export default useVideoDetails;
