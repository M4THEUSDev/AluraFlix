// src/contexts/VideoContext.js
import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState({ frontEnd: [], backEnd: [], mobile: [] });

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const addVideo = (category, video) => {
    fetch(`http://localhost:3000/${category}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video),
    })
      .then(response => response.json())
      .then(newVideo => {
        setVideos(prevVideos => ({
          ...prevVideos,
          [category]: [...prevVideos[category], newVideo]
        }));
      });
  };

  const updateVideo = (category, id, updatedVideo) => {
    fetch(`http://localhost:3000/${category}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedVideo),
    })
      .then(response => response.json())
      .then(updated => {
        setVideos(prevVideos => ({
          ...prevVideos,
          [category]: prevVideos[category].map(video => (video.id === parseInt(id, 10) ? updated : video))
        }));
      });
  };

  const deleteVideo = (category, id) => {
    fetch(`http://localhost:3000/${category}/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setVideos(prevVideos => ({
          ...prevVideos,
          [category]: prevVideos[category].filter(video => video.id !== parseInt(id, 10))
        }));
      });
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
