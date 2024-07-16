// VideoCard.js
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 2px solid ${(props) => props.color};
  box-shadow: 0 4px 8px ${(props) => props.color};
  border-radius: 15px;
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  border-top: solid ${(props) => props.color};
  justify-content: space-around;
  background-color: black;
  padding: 3px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoCard = ({ video, onEdit, onDelete, color }) => {
  const { image, url, } = video;

  return (
    <StyledCard color={color}>
      <CardLink href={url} target="_blank" rel="noopener noreferrer">
        <CardImage src={image} alt="Video thumbnail" />
      </CardLink>
      <ButtonContainer color={color}>
        <EditButton onClick={() => onEdit(video)}>Editar</EditButton>  
        <DeleteButton onClick={() => onDelete(video.id)}>Eliminar</DeleteButton>
      </ButtonContainer>
    </StyledCard>
  );
};

export default VideoCard;
