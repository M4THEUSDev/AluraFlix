import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import { VideoProvider } from 'Context/VideoContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </React.StrictMode>
);