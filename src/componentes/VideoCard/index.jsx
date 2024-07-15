import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoCard = ({ video, onEdit, onDelete }) => {
  const { image } = video;

  return (
    <StyledCard>
      <CardImage src={image} alt="Video thumbnail" />
      <ButtonContainer>
        <EditButton onClick={() => onEdit(video)}>Editar</EditButton>
        <DeleteButton onClick={() => onDelete(video.id)}>Eliminar</DeleteButton>
      </ButtonContainer>
    </StyledCard>
  );
};

export default VideoCard;
