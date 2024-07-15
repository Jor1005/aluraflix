import React, { useState, useEffect } from 'react';
import './index.css';
import Nav from '../../componentes/Nav';
import Banner from '../../componentes/Banner';
import Category from '../../componentes/Categories';
import GlobalStyles from '../../componentes/GlobalStyles';
import videosData from '../../data/db.json'; 
import Footer from '../../componentes/Footer';
import ModalConfirm from '../../componentes/Modal/ModalConfirm';

function App() {
  const categories = [
    {
      title: "FRONTEND",
      color: "#6BD1FF"
    },
    {
      title: "BACKEND",
      color: "#00C86F"
    },
    {
      title: "INNOVACIÓN Y GESTION",
      color: "#FFBA05"
    },
  ];

  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar la modal
  const [videoToDelete, setVideoToDelete] = useState(null); // Estado para almacenar el ID del video a eliminar

  useEffect(() => {
    setVideos(videosData.videos);
  }, []);

  const handleDeleteVideo = (id) => {
    setShowModal(true); // Mostrar la modal de confirmación
    setVideoToDelete(id); // Almacenar el ID del video a eliminar
  };

  const confirmDeleteVideo = () => {
    setVideos((prevVideos) => prevVideos.filter(video => video.id !== videoToDelete)); // Filtrar videos para eliminar el seleccionado
    setShowModal(false); // Ocultar la modal de confirmación
    setVideoToDelete(null); // Reiniciar el estado del video a eliminar
  };

  const closeModal = () => {
    setShowModal(false); // Simplemente ocultar la modal sin efectuar ninguna acción
    setVideoToDelete(null); // Reiniciar el estado del video a eliminar
  };

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Banner />
      <div>
        {categories.map((category) => (
          <Category 
            data={category} 
            key={category.title}
            videos={videos.filter(video => video.category.toUpperCase() === category.title.toUpperCase())}
            onDelete={handleDeleteVideo}
          />
        ))}
      </div>
      <Footer />
      <ModalConfirm 
        show={showModal} 
        title="Confirmación" 
        onConfirm={confirmDeleteVideo} 
        onClose={closeModal}
      >
        ¿Estás seguro de que deseas eliminar este video?
      </ModalConfirm>
    </div>
  );
}

export default App;
