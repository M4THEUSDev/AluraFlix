import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBotao.css';
import homeIcon from './homeIcon.png';


function HomeBotao() {
  return (
    <Link to="/" className="home-botao">
      <div className="icon">
        <img src={homeIcon} alt="icone do home" />
      </div>
      <span className="text">HOME</span>
    </Link>
  );
}

export default HomeBotao;

