import React, { useState } from 'react';
import Nav from '../../componentes';
import styles from './NuevoVideo.module.css';
import GlobalStyles from '../../componentes/GlobalStyles';

const NewVideoForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image || !video) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // TODO: Submit form data to backend
    console.log('Form data submitted:', {
      title,
      category,
      image,
      video,
      description,
    });
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
            <div className={styles.tyc}>
            <label>hola</label>
              <input
                type="text"
                placeholder="Ingrese el título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.select}
              >
                <option value="">Selecione una categoría</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="innovation">Innovation</option>
              </select>
            </div>
            <div className={styles.urls}>
              <input
                type="url"
                placeholder="Ingrese el enlace de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className={styles.input}
              />
              <p className={styles.errorMessage}>{errorMessage}</p>
              <input 
                type="url"
                placeholder="Ingrese el enlace del Video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                className={styles.input}
              />
              </div>
              <textarea 
                placeholder="¿De qué se trata el video?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
              />
            
          <button type="submit" className={styles.button}>Submit</button>
          </section>
        </form>
        </section>
      </div>
    
  );
};

export default NewVideoForm;
