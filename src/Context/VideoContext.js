// src/contexts/VideoContext.js
import Api from 'JavaScript/ConectaApi';
import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(null);
  // useState 

  const filtragem = (videos) => {
    if(videos) {

      // ARRAY DE OBJETOS
      return [
        {categoria: "frontEnd", videos: videos?.filter(video => video.category === "frontEnd")},
        {categoria: "backEnd", videos: videos?.filter(video => video.category === "backEnd")},
        {categoria: "mobile", videos: videos?.filter(video => video.category === "mobile")}
      ]
    }
    return []
  }


  // CONST DATA RECEBE TODOS OS DADOS 
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
