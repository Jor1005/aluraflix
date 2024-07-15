import React, { useState } from 'react';
import Nav from '../../componentes/Nav';
import styles from './NuevoVideo.module.css';
import GlobalStyles from '../../componentes/GlobalStyles';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Jor1005/aluraflix/videos',
});

export const createVideo = async (video) => {
  try {
    const response = await api.post('/', video);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const NewVideoForm = ({ categorias }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = {
      title,
      description,
      url,
      category,
    };
    try {
      const newVideo = await createVideo(videoData);
      console.log('Video creado:', newVideo);
      setSuccessMessage('Video creado con éxito!');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al crear el video');
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setUrl('');
    setVideo('');
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
              <select 
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}>
              <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
                {categorias && categorias.map((cat, index) => (
              <option key={index} value={cat.title}>
                {cat.title}
              </option>
                ))}
              </select>
              <label>Video</label>
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
    </div>
  );
};

export default NewVideoForm;