import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoListings from './VideoListings';

const VideoListingPage = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`https://video-backend-3ot2.onrender.com/api/v1/videos?query=${query}`, { withCredentials: true });
      if (response.data.data && response.data.data.length > 0) {
        setVideos(response.data.data);
      } else {
        setError("No videos found");
      }
    } catch (error) {
      setError("An error occurred while fetching videos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [query]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error ? (
            <p className='text-red-400'>{error}</p>
          ) : (
            videos.map((video) => (
              <div className="" key={video._id}>
                <VideoListings key={video._id} showVideoDescription={false} video={video} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default VideoListingPage;
