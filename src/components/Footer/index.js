import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoAlura from '../Cabecalho/logoAlura.png'


function Footer () {
    return (
        <footer className={styles.footer}>
            <Link to="./">
                <img src={logoAlura} alt="Logo da Alura"></img>
            </Link>
        </footer>
    )
}

export default Footer;