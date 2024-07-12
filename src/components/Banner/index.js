import styles from './Banner.module.css';

function Banner ({ imagem }) {
    return (
        <div className={styles.fundo}
            style={{ 
                backgroundImage: `
                    linear-gradient(rgba(0, 18, 51, 0.5), rgba(0, 18, 51, 0.5)), 
                    url('/imagens/banner-${imagem}.jpg')`
            }}>
        </div>
    )
}

export default Banner;