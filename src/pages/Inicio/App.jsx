import React, { useState, useEffect } from 'react';
import './index.css';
import Nav from '../../componentes/Nav';
import Banner from '../../componentes/Banner';
import Category from '../../componentes/Categories';
import GlobalStyles from '../../componentes/GlobalStyles';
import videosData from '../../data/db.json'; 
import Footer from '../../componentes/Footer';
import ModalConfirm from '../../componentes/Modal/ModalConfirm';
import ModalEditVideo from '../../componentes/Modal/ModalEditVideo'; 

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
  const [showModal, setShowModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null); 
  const [showEditModal, setShowEditModal] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState(null);

  useEffect(() => {
    setVideos(videosData.videos);
  }, []);

  const handleDeleteVideo = (id) => {
    setShowModal(true); 
    setVideoToDelete(id); 
  };

  const confirmDeleteVideo = () => {
    setVideos((prevVideos) => prevVideos.filter(video => video.id !== videoToDelete));
    setShowModal(false);
    setVideoToDelete(null); 
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoToDelete(null); 
  };

  const handleEditVideo = (video) => {
    setShowEditModal(true);
    setVideoToEdit(video);
  };

  const handleSaveVideo = (updatedVideo) => {
    const updatedVideos = videos.map(video => {
      if (video.id === updatedVideo.id) {
        return updatedVideo;
      }
      return video;
    });
    setVideos(updatedVideos);
    setShowEditModal(false);
    setVideoToEdit(null);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setVideoToEdit(null);
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
            onEdit={handleEditVideo}  // Asegúrate de pasar el método onEdit aquí
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
  
      <ModalEditVideo 
        show={showEditModal}
        video={videoToEdit}
        onSave={handleSaveVideo}
        onClose={closeEditModal}
      />
    </div>
  );
}
export default App;
