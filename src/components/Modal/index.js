import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

function EditarCard({ video, onClose }) {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        category: '',
        image: '',
        videoUrl: '',
        description: ''
    });

    useEffect(() => {
        if (video) {
            setFormData({
                id: video.id,
                title: video.title,
                category: video.category,
                image: video.image,
                videoUrl: video.url,
                description: video.description
            });
        }
    }, [video]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para atualizar os dados do vídeo
        console.log(formData);
        // Fechar o modal após submeter o formulário
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
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
                                name="videoUrl"
                                value={formData.videoUrl}
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
                        <button type="button" className={styles.buttonNewVideo} onClick={onClose}>LIMPAR</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default EditarCard;
