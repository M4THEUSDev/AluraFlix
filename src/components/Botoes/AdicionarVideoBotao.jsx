import React from 'react';
import { Link } from 'react-router-dom';
import './AdicionarVideoBotao.css';
import novoVideo from './novoVideo.png';

function AdicionarVideoBotao() {
  return (
    <Link to="/novoVideo" className="add-video-botao">
      <span>NOVO VÍDEO</span>
      <div className="icon">
        <img src={novoVideo} alt=""  />
      </div>
    </Link>
  );
}

export default AdicionarVideoBotao;