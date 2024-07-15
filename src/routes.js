import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { VideoProvider } from './contexts/VideoContext';
import Footer from 'components/Footer';
import Inicio from './pages/Inicio';
import NovoVideo from './pages/NovoVideo';
import { VideoProvider } from 'Context/VideoContext';

function AppRoutes() {
    return (
        <VideoProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/novoVideo" element={<NovoVideo />} />
            </Routes>
            <Footer />
        </BrowserRouter>
         </VideoProvider>
    );
}

export default AppRoutes;