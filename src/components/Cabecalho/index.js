import React from 'react';
import { Link } from 'react-router-dom';
import logoAlura from './logoAlura.png';
import styles from './Cabecalho.module.css';
import HomeBotao from '../Botoes/HomeBotao';
import AdicionarVideoBotao from '../Botoes/AdicionarVideoBotao';

function Cabecalho({ cor }) {
    return (
        <header className={`${styles.cabecalho} ${styles[cor]}`}>
            <Link to="./">
                <img src={logoAlura} alt="Logo da Alura"/>
            </Link>
            <nav>
                <ul>
                    <li><HomeBotao /></li>
                    <li><AdicionarVideoBotao /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;

