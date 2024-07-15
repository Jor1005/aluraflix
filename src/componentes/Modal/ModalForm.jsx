import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const SaveButton = styled(Button)`
  background: #5cb85c;
  color: white;
`;

const CancelButton = styled(Button)`
  background: #ccc;
  color: black;
`;

const ModalForm = ({ show, video, onSave, onClose }) => {
  const [formData, setFormData] = useState(video);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Editar Video</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Label>
              Título:
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Categoría:
              <Input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Imagen URL:
              <Input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Video URL:
              <Input
                type="text"
                name="video"
                value={formData.video}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Descripción:
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
              />
            </Label>
            <ButtonContainer>
              <CancelButton onClick={onClose}>Cancelar</CancelButton>
              <SaveButton type="submit">Guardar</SaveButton>
            </ButtonContainer>
          </Form>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalForm;
