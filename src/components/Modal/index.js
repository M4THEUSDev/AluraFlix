import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import Api from 'JavaScript/ConectaApi';
import { VideoContext } from 'Context/VideoContext';

function EditarCard({ video, onClose }) {
    const { ListarTodosVideos, cleanForms } = React.useContext(VideoContext);

    const videoInicial = {
        id: '',
        title: '',
        category: '',
        image: '',
        url: '',
        description: ''
    };

    const [formData, setFormData] = useState(videoInicial);

    useEffect(() => {
        if (video) {
            setFormData({
                id: video.id,
                title: video.title,
                category: video.category,
                image: video.image,
                url: video.url,
                description: video.description 
            });
        }
    }, [video]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Api.put(`videos/${formData.id}`, formData);
            ListarTodosVideos();
            onClose();
        } catch (error) {
            console.error('Erro ao atualizar o vídeo:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContainer}>
                <div className={styles.rowModal}>
                    <div className={styles.closeButton} onClick={onClose}>
                        <img src="./imagens/cancel.png" alt="Fechar" />
                    </div>
                    <div className={styles.textCard}>
                        <h1>EDITAR CARD:</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.labelContainer}>
                            <label>
                                <h1 className={styles.h1Style}>Título</h1>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Digite o título"
                                />
                            </label>
                            <label>
                                <h1 className={styles.h1Style}>Categoria</h1>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Selecione a categoria</option>
                                    <option value="frontEnd">Frontend</option>
                                    <option value="backEnd">Backend</option>
                                    <option value="mobile">Mobile</option>
                                </select>
                            </label>
                            <label>
                                <h1 className={styles.h1Style}>Imagem</h1>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="URL é obrigatório"
                                />
                            </label>
                            <label>
                                <h1 className={styles.h1Style}>Vídeo</h1>
                                <input
                                    type="text"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleChange}
                                    placeholder="Digite o link do vídeo"
                                />
                            </label>
                            <label>
                                <h1 className={styles.h1Style}>Descrição</h1>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Descrição"
                                ></textarea>
                            </label>
                        </div>
                        <div className={styles.modalButtons}>
                            <button type="submit" className={styles.buttonNewVideo}>GUARDAR</button>
                            <button type="button" className={styles.buttonNewVideo} onClick={(e) => cleanForms(setFormData, videoInicial, e)}>LIMPAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditarCard;
