import React, { useState, useEffect } from 'react';
import './index.css';
import Nav from '../../componentes/Nav';
import Banner from '../../componentes/Banner';
import Category from '../../componentes/Categories';
import GlobalStyles from '../../componentes/GlobalStyles';
import videosData from '../../data/db.json'; 
import Footer from '../../componentes/Footer';

// aca ira el formulario

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

  useEffect(() => {
   
    setVideos(videosData.videos);
  }, []);

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
          />
        ))}
      </div>
        <Footer/>
    </div>
  );
}

export default App;
