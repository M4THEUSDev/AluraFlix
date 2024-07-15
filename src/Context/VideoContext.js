// src/contexts/VideoContext.js
import Api from 'JavaScript/ConectaApi';
import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(null);

  const filtragem = (videos) => {
    if(videos) {
      return [
        {categoria: "frontEnd", videos: videos?.filter(video => video.category === "frontEnd")},
        {categoria: "backEnd", videos: videos?.filter(video => video.category === "backEnd")},
        {categoria: "mobile", videos: videos?.filter(video => video.category === "mobile")}
      ]
    }
    return []
  }


  async function ListarTodosVideos () {
    const {data} = await Api.get('videos')
    // const teste = await videos.json()
    const filter = filtragem(data);
  
    console.log(filter)
    
    setVideos (() => (filter));
  }

  const cleanForms = (funcao, objeto, e = null) => {
    if(e){
      e.preventDefault()
    }
    funcao(objeto)
  }

  

  useEffect(() => {
    ListarTodosVideos();
  }, []);

  // const addVideo = (category, video) => {
  //   fetch(`http://localhost:3000/${category}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(video),
  //   })
  //     .then(response => response.json())
  //     .then(newVideo => {
  //       setVideos(prevVideos => ({
  //         ...prevVideos,
  //         [category]: [...prevVideos[category], newVideo]
  //       }));
  //     });
  // };

  // const updateVideo = (category, id, updatedVideo) => {
  //   fetch(`http://localhost:3000/${category}/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(updatedVideo),
  //   })
  //     .then(response => response.json())
  //     .then(updated => {
  //       setVideos(prevVideos => ({
  //         ...prevVideos,
  //         [category]: prevVideos[category].map(video => (video.id === parseInt(id, 10) ? updated : video))
  //       }));
  //     });
  // };

  // const deleteVideo = (category, id) => {
  //   fetch(`http://localhost:3000/${category}/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       setVideos(prevVideos => ({
  //         ...prevVideos,
  //         [category]: prevVideos[category].filter(video => video.id !== parseInt(id, 10))
  //       }));
  //     });
  // };

  const shared = {
    videos,
    ListarTodosVideos,
    cleanForms
  }

  return (
    <VideoContext.Provider value={shared}>
      {children}
    </VideoContext.Provider>
  );
};
