import React from 'react';
import { Link } from 'react-router-dom';
import './AdicionarVideoBotao.css';

function AdicionarVideoBotao() {
  return (
    <Link to="/novoVideo" className="add-video-botao">NOVO VÍDEO</Link>
  );
}

export default AdicionarVideoBotao;