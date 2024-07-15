import React, { useContext, useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import Cabecalho from 'components/Cabecalho';
import EditarCard from 'components/Modal';
import Banner from 'components/Banner';
import BannerContainer from 'components/BannerContainer';
import Card from 'components/CardVideo';
import { VideoContext } from 'Context/VideoContext';
import Api from 'JavaScript/ConectaApi';

function Inicio() {
    const [modalAberto, setModalAberto] = useState(false);
    const [videoParaEditar, setVideoParaEditar] = useState(null);

    const { videos, ListarTodosVideos } = useContext(VideoContext);

    useEffect(() => {
        ListarTodosVideos();
    }, []);

    useEffect(() => {
        if (videos)
            videos.map(video => console.log(video));
    }, [videos]);

    const abrirModal = (video) => {
        setVideoParaEditar(video);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setVideoParaEditar(null);
    };

    const handleEdit = async (editedVideo) => {
        try {
            await Api.put(`videos/${editedVideo.id}`, editedVideo);
            ListarTodosVideos();
            fecharModal();
        } catch (error) {
            console.error('Erro ao editar o vídeo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await Api.delete(`videos/${id}`);
            ListarTodosVideos();
        } catch (error) {
            console.error('Erro ao deletar o vídeo:', error);
        }
    };

    return (
        <>
            <Cabecalho cor="cinza" />
            <div className="banner-wrapper">
                <Banner imagem="fundo" />
                <BannerContainer imagem="imageContainer" />
            </div>
            {videos ? (
                videos.map((video, index) => (
                    <div key={index} className={styles.section}>
                        <button className={`${styles.button} ${styles[`button-${video.categoria}`]}`}>
                            {video.categoria}
                        </button>
                        <div className={styles.videoList}>
                            {video.videos.map(video => (
                                <Card
                                    key={video.id}
                                    video={video}
                                    onEdit={() => abrirModal(video)}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                ""
            )}
            {modalAberto && (
                <EditarCard
                    video={videoParaEditar}
                    onClose={fecharModal}
                    onEdit={handleEdit}
                />
            )}
        </>
    );
}

export default Inicio;
