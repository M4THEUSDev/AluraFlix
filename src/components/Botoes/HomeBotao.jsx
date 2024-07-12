import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBotao.css';

function HomeBotao() {
  return (
    <Link to="/" className="home-botao">
      <div className="icon"></div>
      <span className="text">HOME</span>
    </Link>
  );
}

export default HomeBotao;