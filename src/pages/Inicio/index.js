import React, { useContext, useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import Cabecalho from 'components/Cabecalho';
import EditarCard from 'components/Modal';
import Banner from 'components/Banner';
import BannerContainer from 'components/BannerContainer';
import Card from 'components/CardVideo';
import { VideoContext } from 'Context/VideoContext';

function Inicio() {
    const [modalAberto, setModalAberto] = useState(false);
    const [videoParaEditar, setVideoParaEditar] = useState(null);

    const abrirModal = (video) => {
        setVideoParaEditar(video);
        setModalAberto(true);
    };

    const contexto = useContext(VideoContext);
    useEffect(() => {
       if(contexto.videos)
        console.log(Object.values(contexto?.videos))
    },[contexto.videos])

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

    // const sections = [
    //     { title: 'Front End', key: 'frontEnd', color: videos.colors.frontEnd, videos: videos.frontEnd },
    //     { title: 'Back End', key: 'backEnd', color: videos.colors.backEnd, videos: videos.backEnd },
    //     { title: 'Mobile', key: 'mobile', color: videos.colors.mobile, videos: videos.mobile }
    // ];

    return (
        <>
            <Cabecalho cor="cinza" />
            <div className="banner-wrapper">
                <Banner imagem="fundo" />
                <BannerContainer imagem="imageContainer" />
            </div>
            {contexto.videos && Object.keys(contexto?.videos).map((section, index) => {
                console.log(section);
                return<div key={index} className={styles.section}>
                    <button className={`${styles.button} ${styles[`button-${section}`]}`} style={{ backgroundColor: section.color }}>
                        {section}
                    </button>
                    <div className={styles.videoList}>
                        {Object.values(contexto.videos).map((video, index) => {
                            console.log(video[index]);
                            return<Card
                                key={video[index].id}
                                video={video[index]}
                                onEdit= {() => abrirModal(video[index])}
                                onDelete={handleDelete}
                            />
                        })}
                    </div>
                </div>
            })}
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
