import React, { useState } from 'react';
import Nav from '../../componentes/Nav';
import styles from './NuevoVideo.module.css';
import GlobalStyles from '../../componentes/GlobalStyles';
import axios from 'axios';
import CategorySelect from '../../componentes/CategoryList';
import Footer from '../../componentes/Footer';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Jor1005/aluraflix/videos',
});

async function createVideo(title, description, category, image) {
  try {
    const videoData = { title, description, category, image };
    console.log("Datos del video a enviar:", videoData); // Añadir esto para ver los datos
    const response = await api.post('/', videoData, {
      headers: { 'Content-type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.log('Error al crear video', error);
    throw error;
  }
}


const NewVideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVideo = await createVideo(title, description, category, image);
      onAddVideo(newVideo);
      setSuccessMessage('Video creado con éxito!');
      setErrorMessage('');
      setTitle('');
      setDescription('');
      setCategory('');
      setImage('');
    } catch (error) {
      setErrorMessage('Error al crear el video');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setDescription('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <section className={styles.container}>
        <div className={styles.titles}>
          <h1 className={styles.h1}>NUEVO VIDEO</h1>
          <h2 className={styles.h2}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h3>Crear Tarjeta</h3>
          <section className={styles.allform}>
            <div className={styles.titimg}>
              <label>Título</label>
              <input
                type="text"
                placeholder="Ingrese el título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
              />
              <label>Imagen</label>
              <input
                type="url"
                placeholder="Ingrese el enlace de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className={styles.input}
              />
              <p className={styles.errorMessage}>{errorMessage}</p>
              <label>Descripción</label>
              <textarea
                placeholder="¿De qué se trata el video?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
              />
              <div className={styles.buttons}>
                <button type="submit" style={{ borderColor: '#2271D1' }} className={styles.buttonSave}>Guardar</button>
                <button type="reset" onClick={handleReset} className={styles.buttonReset}>Limpiar</button>
              </div>
            </div>
            <div className={styles.catvid}>
              <label htmlFor="category">Categoría</label>
              <CategorySelect 
                value={category}
                onChange={setCategory}
                className={styles.select}
              />
              <input 
                type="url"
                placeholder="Ingrese el enlace del Video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                className={styles.video}
              />
            </div>

          </section>
        </form>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </section>
      <Footer className={styles.Footer}/>
    </div>
  );
};

export default NewVideoForm;
