import React, { useState } from 'react';
import styles from './CriarCard.module.css';
import { VideoContext } from 'Context/VideoContext';
import { useNavigate } from 'react-router-dom';
import Api from 'JavaScript/ConectaApi';



function CriarCard() {

  const {ListarTodosVideos, cleanForms} = React.useContext(VideoContext);
  const navigate = useNavigate();
  const videoInicial = {
    title: "",
    category: "",
    image: "",
    url: "",
    description: ""
  };


  const [novoVideo, setNovoVideo] = React.useState(videoInicial);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setNovoVideo((state) => ({
      ...state,
      [name]: value
    }));
  }

  const sendVideo = async (e) => {
    e.preventDefault();
    try {
      await Api.post("videos", novoVideo);
      ListarTodosVideos();
      cleanForms(setNovoVideo, videoInicial);
      navigate("/");
    }catch (error) {
      console.log(error)
    }

  }


  // useEffect é utilizado para monitorar o estado do componente, na montagem, na atualização e na desmontagem
  React.useEffect(() => {
    console.log(novoVideo)
  }, [novoVideo])





  return (
    <form>
      <div className={styles.tituloConteudo}>
        <h1 className={styles.titulo}>NOVO VÍDEO</h1>
        <h2 className={styles.titulo__secundario}>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h2>
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1Card}>Criar Card</h1>
        <div className={styles.row}>
          <label>
            Título
            <input
              type="text"
              name="title"
              value={novoVideo?.title}
              onChange={handleChange}
              placeholder="Digite o título"
            />
          </label>
          <label>
            Categoria
            <select
              name="category"
              value={novoVideo?.category}
              onChange={handleChange}
            >
              <option value="" disabled>Selecione a categoria</option>
              <option value="frontEnd">Frontend</option>
              <option value="backEnd">Backend</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Imagem:
            <input
              type="text"
              name="image"
              value={novoVideo?.image}
              onChange={handleChange}
              placeholder="URL é obrigatório"
            />
          </label>
          <label>
            Vídeo
            <input
              type="text"
              name="url"
              value={novoVideo?.video}
              onChange={handleChange}
              placeholder="Digite o link do video"
            />
          </label>
        </div>
        <label className={styles.desc}>
          Descrição
          <textarea
            name="description"
            value={novoVideo?.description}
            onChange={handleChange}
            placeholder="Descrição"
          ></textarea>
        </label>
        <div className={styles.buttons}>
          <button type="submit" className={styles.buttonNewVideo}
          onClick={sendVideo}
          >
            GUARDAR
            </button>
          <button 
            type="button" 
            className={styles.buttonNewVideo} 
            onClick={(e) => {
            cleanForms(setNovoVideo, videoInicial, e)
          }}
          >LIMPAR</button>
        </div>
      </div>
    </form>
  );

}
export default CriarCard;
