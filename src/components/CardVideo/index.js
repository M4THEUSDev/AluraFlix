import React from 'react';
import styles from './CardVideo.module.css';
import iconDeletar from './iconDeletar.png';
import iconEditar from './iconEditar.png';

function Card({ video, onEdit, onDelete }) {
    const videoIdMatch = video?.url ? video.url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n?]+)/) : null;
    const videoId = videoIdMatch ? videoIdMatch[1] : '';
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';;


    const handleEditClick = () => {
        onEdit(video); // Passa o vídeo para a função de edição
    };

    const handleDeleteClick = () => {
        onDelete(video.id); // Passa o ID do vídeo para a função de exclusão
    };

    return (
        <div className={styles.card}>
            <iframe
                src={embedUrl}
                title={video.title}
                allowFullScreen
                className={styles.cardImg}
            ></iframe>
            <div className={styles.cardActions}>
                <div className={styles.actionItem} onClick={handleDeleteClick}>
                    <img src={iconDeletar} alt="Ícone Deletar" className={styles.icon} />
                    <span>DELETAR</span>
                </div>
                <div className={styles.actionItem} onClick={handleEditClick}>
                    <img src={iconEditar} alt="Ícone Editar" className={styles.icon} />
                    <span>EDITAR</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
