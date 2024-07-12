import styles from './BannerContainer.module.css';

function BannerContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button className={styles.button}>FRONT END</button>
                <h1 className={styles.title}>Navegue com Front-End</h1>
                <p className={styles.text}>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div className={styles.imageContainer}>
            <img src="/imagens/imgContainer.jpg" alt="imgCard" className={styles.image} />
            </div>
        </div>
    )
}

export default BannerContainer;