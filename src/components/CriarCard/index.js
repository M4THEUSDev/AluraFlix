import styles from './CriarCard.module.css';

function CriarCard() {
    return (
        <form onSubmit="">
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
                        value=""
                        onChange=""
                        placeholder="Digite o título"
                    />
                </label>
                <label>
                    Categoria
                    <select
                        name="category"
                        value=""
                        onChange=""
                    >
                        <option value="" disabled>Selecione a categoria</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
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
                        value=""
                        onChange=""
                        placeholder="URL é obrigatório"
                    />
                </label>
                <label>
                    Vídeo
                    <input
                        type="text"
                        name="video"
                        value=""
                        onChange=""
                        placeholder="Digite o link do video"
                    />
                </label>
            </div>
            <label className={styles.desc}>
                Descrição
                <textarea
                    name="description"
                    value=""
                    onChange=""
                    placeholder="Descrição"
                ></textarea>
            </label>
            <div className={styles.buttons}>
                <button type="submit" className={styles.buttonNewVideo}>GUARDAR</button>
                <button type="button" className={styles.buttonNewVideo}>LIMPAR</button>
            </div>
            </div>
        </form>
    );
}

export default CriarCard;
