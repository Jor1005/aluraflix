// VideoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard';
import styled from 'styled-components';

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/Jor1005/aluraflix/videos');
        setVideos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleEdit = (video) => {
    // Lógica para editar el video
    console.log('Editar video', video);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://my-json-server.typicode.com/Jor1005/aluraflix/videos/${id}`);
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <VideoListContainer>
      {videos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          onEdit={handleEdit}
          onDelete={handleDelete}
          color="#2271D1"
        />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
