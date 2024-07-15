// src/components/VideoList.js
import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';

const VideoList = ({ category }) => {
  const { videos, deleteVideo } = useContext(VideoContext);

  return (
    <div>
      {videos[category] && videos[category].map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <a href={video.url} target="_blank" rel="noopener noreferrer">Assistir</a>
          <button onClick={() => deleteVideo(category, video.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
