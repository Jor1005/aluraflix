// ModalEditVideo.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import close from './cancelar.png'


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${(props) => (props.show ? 'flex' : 'none')}; 
  justify-content: center;
  align-items: center;
  z-index: 1000; 
  opacity: ${(props) => (props.show ? 1 : 0)}; 
  transition: opacity 0.3s ease-in-out; 
  
`;

const ModalContent = styled.div`
  background-color: #03122F;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px; 
  width: 90%; /* Asegurarse de que el modal use el 90% del ancho disponible */
  position: relative;
  border: solid 5px #6BD1FF;
`;

const Title = styled.h2`
  color: #2271D1;
  font-size: 2em;
  margin-bottom: 20px;
  text-align: start;
  padding-left: 40px;
  font-weight: bold;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  background-color: transparent;

  img {
    width: 50px; 
    height: 50px; 
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%; 
  padding-left: 40px;
  
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #ffffff;
`;

const Input = styled.input`
  background-color: transparent;
  padding: 12px;
  margin-bottom: 15px;
  border: solid 2px #6BD1FF;
  border-radius: 10px;
  width: 100%; /* Asegurarse de que el input use el 100% del ancho disponible */
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: solid 2px #6BD1FF;
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 10px;
  resize: vertical;
  width: 100%; /* Asegurarse de que el textarea use el 100% del ancho disponible */
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`

const ButtonSubmit = styled.button`
 text-align: center;
  padding: 10px 30px;
  border-radius: 10px;
  background: var(--primary-color);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: solid;
`;

const ButtonReset = styled.button`
 text-align: center;
  padding: 10px 30px;
  border-radius: 10px;
  background: var(--primary-color);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: solid;
`;


const ModalEditVideo = ({ show, video, onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (video) {
      setTitle(video.title || '');
      setCategory(video.category || '');
      setImage(video.image || '');
      setVideoUrl(video.video || '');
      setDescription(video.description || '');
    }
  }, [video]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      id: video?.id,
      title,
      category,
      image,
      video: videoUrl,
      description
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
    <ModalContainer show={show}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={close} alt="" />
          </CloseButton>
        <Title>EDITAR CARD</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="title">Título:</Label>
          <Input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />

          <Label htmlFor="category">Categoría:</Label>
          <Input 
            type="text" 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />

          <Label htmlFor="image">Imagen:</Label>
          <Input 
            type="text" 
            id="image" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />

          <Label htmlFor="videoUrl">URL del Video:</Label>
          <Input 
            type="text" 
            id="videoUrl" 
            value={videoUrl} 
            onChange={(e) => setVideoUrl(e.target.value)} 
          />

          <Label htmlFor="description">Descripción:</Label>
          <Textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        <Buttons>
          <ButtonSubmit type="submit" style={{ borderColor: '#2271D1' }} >Guardar</ButtonSubmit>
          <ButtonReset type="reset" onClick={handleReset}  >Limpiar</ButtonReset>
        </Buttons>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalEditVideo;
