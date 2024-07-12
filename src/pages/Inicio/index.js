import React, { useState } from 'react';
import styles from './Inicio.module.css';
import Cabecalho from 'components/Cabecalho';
import EditarCard from 'components/Modal';
import Banner from 'components/Banner';
import BannerContainer from 'components/BannerContainer';
import Card from 'components/CardVideo';
import videos from '../../assets/json/videos.json';
import videos from '';

function Inicio() {
    const [modalAberto, setModalAberto] = useState(false);
    const [videoParaEditar, setVideoParaEditar] = useState(null);

    const abrirModal = (video) => {
        setVideoParaEditar(video);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setVideoParaEditar(null);
    };

    const handleEdit = (editedVideo) => {
        // Aqui você pode adicionar a lógica para atualizar o vídeo editado
        console.log('Vídeo editado:', editedVideo);
        fecharModal(); // Fecha o modal após editar
    };

    const handleDelete = (videoId) => {
        // Aqui você pode adicionar a lógica para deletar o vídeo com o ID fornecido
        console.log('Deletar vídeo com ID:', videoId);
    };

    const sections = [
        { title: 'Front End', key: 'frontEnd', color: videos.colors.frontEnd, videos: videos.frontEnd },
        { title: 'Back End', key: 'backEnd', color: videos.colors.backEnd, videos: videos.backEnd },
        { title: 'Mobile', key: 'mobile', color: videos.colors.mobile, videos: videos.mobile }
    ];

    return (
        <>
            <Cabecalho cor="cinza" />
            <div className="banner-wrapper">
                <Banner imagem="fundo" />
                <BannerContainer imagem="imageContainer" />
            </div>
            {sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <button className={styles.button} style={{ backgroundColor: section.color }}>
                        {section.title}
                    </button>
                    <div className={styles.videoList}>
                        {section.videos.map((video) => (
                            <Card
                                key={video.id}
                                video={video}
                                onEdit={abrirModal}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </div>
            ))}
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
