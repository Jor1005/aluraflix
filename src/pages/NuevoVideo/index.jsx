import React, { useState } from 'react';
import Nav from '../../componentes/Nav';
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

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
    setErrorMessage('');
  };

  return (
    <div>
      <GlobalStyles />
      <Nav/>
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
              <button type="reset" onClick={handleReset}  className={styles.buttonReset}>Limpiar</button>
              </div>
            </div>
            <div className={styles.catvid}>
            <label>Categoría</label>
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
        </section>
      </div>
    
  );
};

export default NewVideoForm;
